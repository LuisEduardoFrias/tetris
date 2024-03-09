/** @format */

import { useState } from "react";
import { TouchEvent } from "react";
import { Actions } from "../domain/reducer";
import PushButton from "./push_button";
import { globalState, control as Ct } from "../domain/types";
import { Play } from "../domain/enums";
import { useStore } from "../domain/store";
import Styles from "../styles/controls.module.css";

export default function Controls() {
	//const [sta, setSta] = useState(false);
	const { changeControl, control } = useStore();

	return (
		<div
			className={Styles.container}
			style={{ backgroundColor: `${0 ? "red" : "transparent"}` }}>
			<div className={Styles.containerButtons}>
				<PushButton
					img='left-button'
					action={(e: TouchEvent<HTMLButtonElement>) => {
						//setSta(e.isDown);
						const newcontrol: Ct = { ...control };
						newcontrol.left = e.isDown;
						changeControl(newcontrol);
					}}
				/>
				<PushButton
					img='right-button'
					action={(e: TouchEvent<HTMLButtonElement>) => {
						//setSta(e.isDown);
						const newcontrol: Ct = { ...control };
						newcontrol.right = e.isDown;
						changeControl(newcontrol);
					}}
				/>
			</div>
			<div className={Styles.containerButtons}>
				<PushButton
					img='A-button'
					action={(e: TouchEvent<HTMLButtonElement>) => {
						const newcontrol: Ct = { ...control };
						newcontrol.a = e.isDown;
						changeControl(newcontrol);
					}}
				/>
				<PushButton
					img='B-button'
					action={(e: TouchEvent<HTMLButtonElement>) => {
						const newcontrol: Ct = { ...control };
						newcontrol.b = e.isDown;
						changeControl(newcontrol);
					}}
				/>
			</div>
		</div>
	);
}
