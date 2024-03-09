/** @format */

import { useEffect } from "react";
import Menu from "./components/menu";
import Data from "./components/data";
import Controls from "./components/controls";
import Space from "./components/space";

import Dot from "./domain/pieces/dot";
import T from "./domain/pieces/t";
import Z from "./domain/pieces/z";
import ZInvert from "./domain/pieces/z_invert";
import L from "./domain/pieces/l";
import LInvert from "./domain/pieces/l_invert";
import Square from "./domain/pieces/square";
import Straight from "./domain/pieces/straight";
import Piece from "./domain/pieces/piece";

import { Actions } from "./domain/reducer";
import { Play } from "./domain/enums";
import { globalState, Control } from "./domain/types";
import { clone } from "./super_state/index";
import { useStore } from "./domain/store";
import shallow from "zustand/shallow";

import Styles from "./styles/game.module.css";

export default function Game() {
	const { play, pieces, nextPiece, movePiece, addPiece, control } = useStore();

	useEffect(() => {
		if (play == Play.start) {
			const lastPiece: Piece = getLast(pieces);
			movePieces(lastPiece, movePiece, control);
			colitions(lastPiece, addPiece);
		}
	}, [pieces, play]);

	return (
		<div className={Styles.word}>
			<div className={Styles.container}>
				{(play === Play.init || play === Play.stop) && <Menu />}
				<Space pieces={pieces} />
				<Data nextPiece={nextPiece} />
			</div>
			<Controls />
		</div>
	);
}

function movePieces(
	piece: Piece,
	movePiece: (piece: Piece) => void,
	control: Control
) {
	setTimeout(() => {
		const otherPiece: Piece = { ...piece };

		if (control.left && otherPiece.point.x >= 0) {
			otherPiece.point.x -= 0.5;
		}
		if (control.right && otherPiece.point.x <= 200) {
			otherPiece.point.x += 0.5;
		}

		//if (control.b) {}

		if (control.a) {
			otherPiece.point.y += 1;
		} else {
			otherPiece.point.y += 0.2;
		}

		movePiece(otherPiece);
	}, 1);
}

function colitions(piece: Piece, addPiece: () => void) {
	//colision contra las paredes 550 - piece.height
	if (piece.point.y >= 500) {
		addPiece();
	}
	//
}

function getLast(pieces: Piece[]): Piece {
	return { ...pieces[pieces.length - 1] };
}
