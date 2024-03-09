/** @format */

import Button from "./button";
import { Play } from "../domain/enums";
import { useStore } from "../domain/store";
import shallow from "zustand/shallow";
import Styles from "../styles/menu.module.css";

export default function Menu() {
	const { play, changePlay } = useStore((state)=>({play:state.play,changePlay:state.changePlay}), shallow);

	const handleContinueStart = () => changePlay(Play.start);

	const handleSetting = () => changePlay(Play.settings);

	return (
		<div className={Styles.place}>
			<Button
				className={Styles.btn}
				title={`${play === Play.stop ? "Start" : "continue"}`}
				onClick={handleContinueStart}
			/>
			<Button className={Styles.btn} title='settings' onClick={handleSetting} />
		</div>
	);
}
