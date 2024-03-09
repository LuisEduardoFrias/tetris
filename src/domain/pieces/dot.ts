/** @format */

import Piece from "./piece";

export default class Dot extends Piece {
	constructor(img: string) {
		const coordinates: Point[4] = [
			{ x: 0, y: 0 },
			{ x: 0, y: 0 },
			{ x: 0, y: 0 },
			{ x: 0, y: 0 }
		];
		super(img, coordinates, 1, 1);
	}
}
