/** @format */

import DrawPiece from "./draw_piece";
import Piece from "../domain/piece";
import "../styles/data.css";

export default function Data({ nextPiece }: { nextPiece: Piece }) {
	return (
		<div className='container-data'>
			<div>
				<span>{`Score: ${0}`}</span>
				<span>{`Lines: ${1}`}</span>
				<span>{`Level: ${1}`}</span>
			</div>
			<div>
				<span>{`Next`}</span>
				{	<DrawPiece piece={nextPiece} /> }
			</div>
		</div>
	);
}
