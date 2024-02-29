/** @format */

export type Point = {
	x: number;
	y: number;
};

export default abstract class Piece {
	img: string;
	side: number;
	invert: boolean;
	point: Point;
	coordinates: Point[];

	constructor(img: string, coordinates: Point[], invert: boolean = false) {
		this.img = img;
		this.side = 15;
		this.point = { x: 0, y: 0 };
		this.invert= invert
		this.coordinates = coordinates;
	}
}
