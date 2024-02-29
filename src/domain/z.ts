/** @format */

import Piece from "./piece";

export default class Z extends Piece {
	constructor(img: string, invert: boolean = false) {
		const coordinates: coordinate[4] = [
			{ x: 0, y: 0 },
			{ x: 14, y: 0 },
			{ x: 30, y: 14 },
			{ x: 28, y: 14 }
		];
		super(img, coordinates, invert);
	}
}
