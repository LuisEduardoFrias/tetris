/** @format */

import Piece from "./piece";

export default class L extends Piece {
	constructor(img: string) {
		const coordinates: Point[4] = [
			{ x: 0, y: 0 },
			{ x: 0, y: 14 },
			{ x: 0, y: 28 },
			{ x: 14, y: 28 }
		];
		super(img, coordinates, 3,2);
	}
}
