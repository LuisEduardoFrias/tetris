/** @format */

import Piece, { Coordinate } from "./piece";

export default class Straight extends Piece {
	constructor(img: string, invert: boolean = false) {
		const coordinates: Coordinate[] = [
			{ x: 0, y: 0 },
			{ x: 0, y: 14 },
			{ x: 0, y: 28 },
			{ x: 0, y: 42 }
		];
		super(img, coordinates, invert);
	}
}
