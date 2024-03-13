/** @format */

import Piece from "./piece";
import Coordinate from "../types";

export default class Dot extends Piece {
	constructor(img: string) {
		const coordinates: Coordinate[4] = [
			{
				rotate: 0,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 0 },
					{ x: 0, y: 0 },
					{ x: 0, y: 0 }
				]
			},
			{
				rotate: 90,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 0 },
					{ x: 0, y: 0 },
					{ x: 0, y: 0 }
				]
			},
			{
				rotate: 180,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 0 },
					{ x: 0, y: 0 },
					{ x: 0, y: 0 }
				]
			},
			{
				rotate: 270,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 0 },
					{ x: 0, y: 0 },
					{ x: 0, y: 0 }
				]
			}
		];

		super(img, coordinates, 1, 1);
	}
}
