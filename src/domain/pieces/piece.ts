/** @format */

import { Point, Coordinate } from "../types";

/**
 * Clase abstracta para representar una pieza en un juego.
 */
export default abstract class Piece {
	/**
	 * La ruta de la imagen de los cubos.
	 */
	img: string;
	/**
	 * La altura de cada cubo.
	 */
	side: number;
	/**
	 * La altura total de la pieza.
	 */
	height: number;
	/**
	 * El ancho total de la pieza.
	 */
	width: number;
	/**
	 * Las cordenadas de la pieza.
	 */
	point: Point;
	/**
	 * La rotacion de la pieza.
	 */
	rotate: number;
	/**
	 * Las coordenadas de cada cubo que condforman la pieza.
	 */
	coordinates: Coordinate[];

	/**
	 * Crea una instancia de Piece.
	 * @param {string} img - La ruta de la imagen de la pieza.
	 * @param {Coordinates[]} coordinates - Las coordenadas de la pieza.
	 * @param {number} heightMultiplier - El multiplicador de altura.
	 */
	constructor(
		img: string,
		coordinates: Coordinate[],
		heightMultiplier: number,
		widthMultiplier: number
	) {
		this.img = img;
		this.side = 15;
		this.rotate = 0;
		this.height = this.side * heightMultiplier;
		this.width = this.side * widthMultiplier;
		this.point = { x: 0, y: 0 };
		this.coordinates = coordinates;
	}
}
