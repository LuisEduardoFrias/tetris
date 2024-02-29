/** @format */

import Piece from "./piece";

export default class Dot extends Piece {
	constructor(img: string, invet: boolean = false) {
		const coordinates: coordinate[4] = [
			{ x: 0, y: 0 },
			{ x: 0, y: 0 },
			{ x: 0, y: 0 },
			{ x: 0, y: 0 }
		];
		super(img, coordinates, invet);
	}
}
