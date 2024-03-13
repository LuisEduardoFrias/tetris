/** @format */

import Piece from "./piece";
import Coordinate from "../types";

/**
 * Clase para representar una pieza recta.
 */
export default class Straight extends Piece {
	/**
	 * Crea una instancia de Straight.
	 * @param {string} img - La ruta de la imagen de la pieza.
	 */
	constructor(img: string) {
		const coordinates: Coordinate[4] = [
			{
				rotate: 0,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 15 },
					{ x: 0, y: 30 },
					{ x: 0, y: 45 }
				]
			},
			{
				rotate: 90,
				points: [
					{ x: 0, y: 0 },
					{ x: 15, y: 0 },
					{ x: 30, y: 0 },
					{ x: 45, y: 0 }
				]
			},
			{
				rotate: 180,
				points: [
					{ x: 0, y: 0 },
					{ x: 0, y: 15 },
					{ x: 0, y: 30 },
					{ x: 0, y: 45 }
				]
			},
			{
				rotate: 270,
				points: [
					{ x: 0, y: 0 },
					{ x: 15, y: 0 },
					{ x: 30, y: 0 },
					{ x: 45, y: 0 }
				]
			}
		];
		super(img, coordinates, 4, 1);
	}
}
