/** @format */

import Piece from "../domain/piece";
import Dot from "../domain/dot";
import T from "../domain/t";
import Z from "../domain/z";
import L from "../domain/l";
import Square from "../domain/square";
import Straight from "../domain/straight";
import DrawPiece from "./draw_piece";
import Styles from "../styles/space.module.css";

export default function Space() {
	const pieces: Pieces = [
		new Dot("red_cube"),
		new T("blue_cube"),
		new Z("green_cube", true),
		new Z("green_cube"),
		new L("yellow_cube", true),
		new L("yellow_cube"),
		new Square("pink_cube"),
		new Straight("gray_cube")
	];
	
	return (
		<div className={Styles.container}>
			<DrawPiece piece={pieces[5]} />
		</div>
	);
}
