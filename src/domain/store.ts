/** @format */

import GeneratePiece from "./generate_piece";
import { create } from "zustand";
import { globalState, Control } from "./types";
import { Play } from "./enums";
import Piece from "./pieces/piece";

let USE_STORE = null;

export default function CreateStore() {
	USE_STORE = create<globalState>()(set => ({
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
		changePlay: (newplay: Play) =>
			set(state => ({
				play: newplay
			})),
		changeControl: (newControl: Control) =>
			set(state => ({ control: newControl })),
		movePiece: (newpiece: Piece) =>
			set(state => {
				
				if(state.control.b)
				assignRotation(newpiece);

				const pieces: Piece = state.pieces.map((piece, index) =>
					index === state.pieces.length - 1 ? newpiece : piece
				);

				const control_: Control = { ...state.control };

				control_.b = false;

				return { pieces: pieces, control: control_ };
			}),
		addPiece: () => {
			set(state => {
				const newNextPiece: Piece = GeneratePiece();

				const updateNextPiece: Piece = { ...state.nextPiece };
				updateNextPiece.point.y = 0;
				updateNextPiece.point.x = 0;

				const newPiece: Piece[] = [...state.pieces, updateNextPiece];

				const newObj: object = {
					pieces: newPiece,
					nextPiece: newNextPiece
				};

				return newObj;
			});
		}
	}));
}

function assignRotation(piece: Piece) {
	switch (piece.rotate) {
		case 0:
			piece.rotate = 90;
			break;
		case 90:
			piece.rotate = 180;
			break;
		case 180:
			piece.rotate = 270;
			break;
		case 270:
			piece.rotate = 0;
			break;
	}
}

export function useStore() {
	return USE_STORE();
}
