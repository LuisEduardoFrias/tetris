/** @format */

import { useState, useEffect } from "react";
import Piece from "../domain/pieces/piece";
import DrawPiece from "./draw_piece";
import Styles from "../styles/space.module.css";

export default function Space({ pieces }: { pieces: Piece[] }) {
	//w: 350 h:550
	return (
		<section className={Styles.container}>
			{pieces?.map((piece: Piece, index: number) => (
				<DrawPiece piece={piece} />
			))}
		</section>
	);
}
