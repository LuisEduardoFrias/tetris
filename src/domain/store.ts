/** @format */
import GeneratePiece from "./generate_piece";
import { globalState, Control } from "./types";
import { Play } from "./enums";
import clone from "./clone";
import Piece from "./pieces/piece";

const USE_STORE: globalState = {
	play: Play.init,
	pieces: [GeneratePiece()],
	nextPiece: GeneratePiece(),
	score: 0,
	lines: 0,
	level: 1,
	control: {
		left: false,
		right: false,
		a: false,
		b: false
	},
	changeLevel: function (newLevel: number) {
		USE_STORE.level = newLevel;
	},
	changePlay: function (newplay: Play) {
		USE_STORE.play = newplay;
	},
	changeControl: function (newControl: Control) {
		USE_STORE.control = newControl;
	},
	movePiece: function (newpiece: Piece) {
		try {
			if (USE_STORE.control.b) assignRotation(newpiece);

			const pieces: Piece = USE_STORE.pieces.map((piece, index) =>
				index === USE_STORE.pieces.length - 1 ? newpiece : piece
			);
			const control_: Control = clone(USE_STORE.control);

			control_.b = false;

			USE_STORE.pieces = pieces;
			USE_STORE.control = control_;
		} catch (err) {
			alert(err);
		}
	},
	addPiece: function (newpiece: Piece) {
		{
			const newNextPiece: Piece = GeneratePiece();

			const updateNextPiece: Piece = clone(USE_STORE.nextPiece);
			updateNextPiece.point.y = 0;
			updateNextPiece.point.x = 0;

			USE_STORE.pieces.pop();
			USE_STORE.pieces.push(newpiece);
			USE_STORE.pieces.push(updateNextPiece);
			USE_STORE.nextPiece = newNextPiece;

			console.log("varias: " + JSON.stringify(USE_STORE.pieces, null, 2))

		}
	}
};

export function useStore() {
	return USE_STORE;
}

function assignRotation(piece: Piece) {
	switch (piece.rotate) {
		case 0:
			setRotate(piece, 90);
			break;
		case 90:
			setRotate(piece, 180);
			break;
		case 180:
			setRotate(piece, 270);
			break;
		case 270:
			setRotate(piece, 0);
			break;
	}

	if (piece.point.x + piece.width > 255) {
		piece.point.x -= piece.point.x + piece.width - 255;
	}
}

function setRotate(piece: Piece, value: number) {
	piece.rotate = value;
	if (value === 90 || value === 270) {
		const aux: number = piece.height;
		piece.height = piece.width;
		piece.width = aux;
	} else {
		const aux: number = piece.width;
		piece.width = piece.height;
		piece.height = aux;
	}
}
