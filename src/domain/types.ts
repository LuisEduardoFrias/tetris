/** @format */

export type Control = {
	left: boolean;
	right: boolean;
	a: boolean;
	b: boolean;
};

export type globalState = {
	play: Play;
	pieces: Piece[];
	nextPiece: Piece;
	score: number;
	lines: number;
	level: number;
	control: Control;
	changePlay: (play: Play) => void;
	movePiece: (pieces: Piece) => void;
	changeControl: (newControl: Control) => void;
	addPiece: () => void;
};

export type Point = {
	x: number;
	y: number;
};
