/** @format */

import { useId } from "react";
import Piece from "../domain/pieces/piece";
import { Point, Coordinate } from "../domain/types";
import T from "../domain/pieces/t";

export default function DrawPiece({
	piece,
	isStatic,
	justifyCenter
}: {
	piece: Piece;
	isStatic?: boolean;
	justifyCenter?: boolean;
}) {
	const unique: string = useId();

	//TODO justificar el componente al centro, sin perder la movilidad
	//TODO Centralizar el componente al estar en isStatic

	const _Styles = {
		position: `${"absolute"}`,
		width: `${piece.width}px`,
		height: `${piece.height}px`,
		boxSizing: "border-box",
		top: piece.point.y + "px",
		left: piece.point.x + "px",
		border: "0px solid red"
	};

	const coor: Coordinate = piece.coordinates.filter(
		(coor: Coordinate) => coor.rotate === piece.rotate
	)[0];
	
	return (
		<div style={_Styles}>
			{coor.points.map((point: Point, index: number) => (
				<Box
					key={`${index}-${unique}`}
					point={point}
					side={piece.side}
					img={piece.img}
				/>
			))}
		</div>
	);
}

function Box({
	point,
	side,
	img
}: {
	point: Point;
	side: number;
	img: string;
}) {
	const _Styles = {
		position: "absolute",
		top: `${point.y}px`,
		left: `${point.x}px`,
		boxSizing: "border-box",
		height: `${side}px`,
		width: `${side}px`,
		backgroundImage: `url("/${img}.png")`,
		backgroundSize: "cover",
		border: "0px solid black"
	};

	return <div style={_Styles}></div>;
}
