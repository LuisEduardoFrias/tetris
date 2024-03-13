/** @format */

import { TouchEvent } from "react";
import { Actions } from "../domain/reducer";
import PushButton from "./push_button";
import { globalState, control as Ct } from "../domain/types";
import { Play } from "../domain/enums";
import { useStore } from "../domain/store";
import shallow from "zustand/shallow";
import Styles from "../styles/controls.module.css";

export default function Controls() {
	const { changeControl, control } = useStore(
		state => ({
			changeControl: state.changeControl,
			control: state.control
		}),
		shallow
	);

	return (
		<div
			className={Styles.container}
			style={{ backgroundColor: `${0 ? "red" : "transparent"}` }}>
			<div className={Styles.containerButtons}>
				<PushButton
					img='left-button'
					action={(e: TouchEvent<HTMLButtonElement>) => {
						const newcontrol: Ct = { ...control };
						newcontrol.left = e.isDown;
						changeControl(newcontrol);
					}}
				/>

				<PushButton
					img='right-button'
					action={(e: TouchEvent<HTMLButtonElement>) => {
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
