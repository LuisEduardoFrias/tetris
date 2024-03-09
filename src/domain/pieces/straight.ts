/** @format */

import Piece from "./piece";

/**
 * Clase para representar una pieza recta.
 */
export default class Straight extends Piece {
	/**
	 * Crea una instancia de Straight.
	 * @param {string} img - La ruta de la imagen de la pieza.
	 */
	constructor(img: string) {
		const coordinates: Point[] = [
			{ x: 0, y: 0 },
			{ x: 0, y: 14 },
			{ x: 0, y: 28 },
			{ x: 0, y: 42 }
		];
		super(img, coordinates, 4, 1);
	}
}
