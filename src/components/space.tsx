/** @format */

import { useState, useEffect } from "react";
import Piece from "../domain/pieces/piece";
import DrawPiece from "./draw_piece";
import { useStore } from "../domain/store";
import shallow from "zustand/shallow";
import Styles from "../styles/space.module.css";

export default function Space() {
	const { pieces } = useStore(state => ({ pieces: state.pieces }), shallow);
	//w: 350 h:550
	return (
		<section className={Styles.container}>
			{pieces?.map((piece: Piece, index: number) => (
				<DrawPiece key={index} justifyCenter={true} piece={piece} />
			))}
		</section>
	);
}
