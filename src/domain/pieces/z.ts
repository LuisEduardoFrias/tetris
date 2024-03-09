/** @format */

import Piece from "./piece";

export default class Z extends Piece {
	constructor(img: string) {
		const coordinates: Point[4] = [
			{ x: 0, y: 0 },
			{ x: 14, y: 0 },
			{ x: 14, y: 14 },
			{ x: 28, y: 14 }
		];
		super(img, coordinates, 2, 3);
	}
}
