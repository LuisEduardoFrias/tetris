/** @format */

import Piece, { Point } from "../domain/piece";

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
			height: `${piece.side}px`,
			width: `${piece.side}px`,
			backgroundImage: `url("../../public/${piece.img}.png")`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "14px"
		};
	}

	const _Styles = {
		position: "absolute",
		top: "10px",
		left: "10px"
		//border: "1px solid red"
	};

	return (
		<div style={_Styles}>
			{piece.coordinates.map((coor: Point, index: number) => (
				<div style={Box(coor)}></div>
			))}
		</div>
	);
}
