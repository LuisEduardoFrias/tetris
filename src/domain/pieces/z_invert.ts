/** @format */

import Piece from "./piece";
import Coordinate from "../types";

export default class ZInvert extends Piece {
	constructor(img: string) {
		const coordinates: Coordinate[4] = [
			{
				rotate: 0,
				points: [
					{ x: 0, y: 15 },
					{ x: 15, y: 15 },
					{ x: 15, y: 0 },
					{ x: 30, y: 0 }
				]
			},
			{
				rotate: 90,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 15 },
					{ x: 15, y: 15 },
					{ x: 15, y: 30 }
				]
			},
			{
				rotate: 180,
				points: [
					{ x: 0, y: 15 },
					{ x: 15, y: 15 },
					{ x: 15, y: 0 },
					{ x: 30, y: 0 }
				]
			},
			{
				rotate: 270,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 15 },
					{ x: 15, y: 15 },
					{ x: 15, y: 30 }
				]
			}
		];
		super(img, coordinates, 2, 3);
	}
}
