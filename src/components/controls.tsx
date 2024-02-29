/** @format */

import PushButton from "./push_button";
import Styles from "../styles/controls.module.css";

export default function Controls() {
	return (
		<div className={Styles.container}>
			<div className={Styles.containerButtons}>
				<PushButton img='left-button' action={() => {}} />
				<PushButton img='right-button' rotate={180} action={() => {}} />
			</div>
			<div className={Styles.containerButtons}>
				<PushButton img='A-button' action={() => {}} />
				<PushButton img='B-button' action={() => {}} />
			</div>
		</div>
	);
}
