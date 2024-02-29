/** @format */

import Space from "./components/space";
import Data from "./components/data";
import L from "./domain/l";
import Controls from "./components/controls";
import Styles from "./styles/game.module.css";

export default function Game() {
	return (
		<div className={Styles.word}>
			<div className={Styles.container}>
				<Space />
				<Data nextPiece={new L("yellow_cube")} />
			</div>
			<Controls />
		</div>
	);
}
