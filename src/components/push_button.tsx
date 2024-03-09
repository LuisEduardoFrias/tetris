/** @format */

import { TouchEvent } from "react";

export default function PushButton({
	img,
	action
}: {
	img: string;
	action: (e: TouchEvent<HTMLButtonElement>) => void;
}) {
	//
	const _Styles = {
		backgroundImage: `url("/${img}.png")`,
		backgroundRepeat: "none",
		width: "70px",
		height: "70px"
	};
	//

	function handleTouchStartEvent(e: TouchEvent<HTMLButtonElement>) {
		e.preventDefault();
		action({ event: e, isDown: true });
	}

	function handleTouchEndEvent(e: TouchEvent<HTMLButtonElement>) {
		e.preventDefault();
		action({ event: e, isDown: false });
	}

	return (
		<button
			style={_Styles}
			onTouchStart={handleTouchStartEvent}
			onTouchEnd={handleTouchEndEvent}
			className='btn'></button>
	);
}
