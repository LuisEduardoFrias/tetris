/** @format */

import Dot from "./pieces/dot";
import T from "./pieces/t";
import Z from "./pieces/z";
import ZInvert from "./pieces/z_invert";
import L from "./pieces/l";
import LInvert from "./pieces/l_invert";
import Square from "./pieces/square";
import Straight from "./pieces/straight";
import Piece from "./pieces/piece";

export default function GeneratePiece(): Piece {
	const pieces: Piece = [
		new Dot("red_cube"),
		new T("blue_cube"),
		new Z("green_cube"),
		new ZInvert("green_cube"),
		new L("yellow_cube"),
		new LInvert("yellow_cube"),
		new Square("pink_cube"),
		new Straight("gray_cube")
	];

	function getRandomValue() {
		return Math.floor(Math.random() * 8);
	}

	return pieces[getRandomValue()];
}
