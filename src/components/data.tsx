/** @format */

import DrawPiece from "./draw_piece";
import Piece from "../domain/pieces/piece";
import { useStore } from "../domain/store";
import shallow from "zustand/shallow";
import "../styles/data.css";

export default function Data() {
	const { nextPiece } = useStore(state=>({nextPiece:state.nextPiece}));

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
					<DrawPiece isStatic={true} piece={nextPiece} />
				</div>
			</article>
		</aside>
	);
}
