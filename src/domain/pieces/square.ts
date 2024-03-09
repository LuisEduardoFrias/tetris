/** @format */

import Piece from "./piece";

export default class Square extends Piece {
	constructor(img: string) {
		const coordinates: Point[4] = [
			{ x: 0, y: 0 },
			{ x: 14, y: 0 },
			{ x: 0, y: 14 },
			{ x: 14, y: 14 }
		];
		super(img, coordinates, 2, 2);
	}
}
