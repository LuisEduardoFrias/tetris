/** @format */

import Piece from "../domain/pieces/piece";
import { Point } from "../domain/types";

export default function DrawPiece({ piece }: { piece: Piece }) {
	//

	const Styles = {
		position: "absolute"
	};

	function Box(coor: Point): object {
		return {
			position: "absolute",
			top: `${coor.y}px`,
			left: `${coor.x}px`,
			boxSizing: "border-box",
			height: `${piece.side}px`,
			width: `${piece.side}px`,
			backgroundImage: `url("/${piece.img}.png")`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "14px"
		};
	}

	const _Styles = {
		position: "absolute",
		width: `${piece.width}px`,
		height: `${piece.height}px`,
		boxSizing: "border-box",
		top: `${piece.point.y}px`,
		left: `${piece.point.x}px`,
		transform: `rotate(${piece.rotate}deg)`,
		transformOrigin: "center",
		border: "0px solid red"
	};

	return (
		<div style={_Styles}>
			{piece.coordinates.map((coor: Point, index: number) => (
				<div style={Box(coor)}></div>
			))}
		</div>
	);
}
