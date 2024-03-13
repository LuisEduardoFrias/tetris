/** @format */

import Piece from "./piece";
import Coordinate from "../types";

export default class L extends Piece {
	constructor(img: string) {
		const coordinates: Coordinate[4] = [
			{
				rotate: 0,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 15 },
					{ x: 0, y: 30 },
					{ x: 15, y: 30 }
				]
			},
			{
				rotate: 90,
				points: [
					{ x: 0, y: 15 },
					{ x: 15, y: 15 },
					{ x: 30, y: 15 },
					{ x: 30, y: 0 }
				]
			},
			{
				rotate: 180,
				points: [
					{ x: 0, y: 0 },
					{ x: 15, y: 0 },
					{ x: 15, y: 15 },
					{ x: 15, y: 30 }
				]
			},
			{
				rotate: 270,
				points: [
					{ x: 0, y: 15 },
					{ x: 0, y: 0 },
					{ x: 15, y: 0 },
					{ x: 30, y: 0 }
				]
			}
		];
		super(img, coordinates, 3, 2);
	}
}
