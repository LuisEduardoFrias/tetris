/** @format */

import DrawPiece from "./draw_piece";
import Piece from "../domain/pieces/piece";
import "../styles/data.css";

export default function Data({ nextPiece }: { nextPiece: Piece }) {
	nextPiece.point.y = 6;
	nextPiece.point.x = 25;
	return (
		<aside className='container-data'>
			<article>
				<span>{`Score: ${0}`}</span>
				<span>{`Lines: ${1}`}</span>
				<span>{`Level: ${1}`}</span>
			</article>
			<article>
				<span>{`Next`}</span>
				<div>
					{" "}
					<DrawPiece piece={nextPiece} />{" "}
				</div>
			</article>
		</aside>
	);
}
