/** @format */

import Button from "./button";
import { Play } from "../domain/enums";
import { useStore } from "../domain/store";
import Styles from "../styles/menu.module.css";

export default function Menu() {
	const state = useStore();

	const handleContinueStart = () => 
		state.changePlay(Play.start);


	const handleSetting = () => state.changePlay(Play.settings);

	return (
		<div className={Styles.place}>
			<Button
				className={Styles.btn}
				title={`${true ? "Start" : "continue"}`}
				onClick={handleContinueStart}
			/>
			<Button className={Styles.btn} title='settings' onClick={handleSetting} />
		</div>
	);
}
