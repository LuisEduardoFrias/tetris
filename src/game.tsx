/** @format */

import React, { useEffect, useState } from "react";

import Controls from "./components/controls";
import Menu from "./components/menu";
import Data from "./components/data";
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
import clone from "./domain/clone";
import { Play } from "./domain/enums";
import { globalState, Control } from "./domain/types";
import { useStore, getPieces } from "./domain/store";
import shallow from "zustand/shallow";

import Styles from "./styles/game.module.css";

const speedMovement: number = 15;
const increaseSpeed: number = 21;
const fallSpeed: number = 3;
const frame: number = 100;

//TODO cambiar el manejo de estado a zustand

export default function Game() {
	const [state, setState] = useState(0);

	const { play, level, pieces, movePiece, addPiece, control, changeLevel } =
		useStore();

	if (play === Play.start) {
		colitions(getLast(pieces), addPiece);
		movePieces(getLast(pieces), movePiece, control);
	}

	useEffect(() => {
		setTimeout(() => {
			if (state >= 70) {
				setState(0);
			} else {
				setState(state + 1);
			}
		}, frame);
	}, [state]);

	const lastPirce = getLast(pieces);

	return (
		<div className={Styles.word}>
			<h1>
				{state}--{lastPirce.point.x}--{lastPirce.point.y}
			</h1>
			<h2>
				{lastPirce.point.y}--{lastPirce.height}
			</h2>
			<div className={Styles.container}>
				{(play === Play.init || play === Play.stop) && <Menu />}
				<Space />
				<Data />
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
	const otherPiece: Piece = clone(piece);

	//TODO mejorar los controles, la jugavilidad se ve afectada.

	if (control.left && otherPiece.point.x > 0) {
		otherPiece.point.x -= speedMovement;
	}
	if (control.right && otherPiece.point.x + otherPiece.width < 255) {
		otherPiece.point.x += speedMovement;
	}

	//if (control.b) {}

	if (control.a) {
		otherPiece.point.y += increaseSpeed;
	} else {
		otherPiece.point.y += fallSpeed;
	}

	movePiece(otherPiece);
}

function colitions(piece: Piece, addPiece: () => void) {
	//colision contra las paredes 550 - piece.height
	if (piece.point.y + piece.height >= 548) {
		const otherPiece: Piece = { ...piece };
		otherPiece.point.y = (550 - piece.height);
		addPiece(otherPiece);
	}
	//
}

function getLast(pieces: Piece[]): Piece {
	return clone(pieces[pieces.length - 1]);
}
