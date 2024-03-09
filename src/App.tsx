/** @format */

//crypto.randomUUID

import Game from "./game";
import createStore from "./domain/store";

export default function App() {
	createStore();
	return <Game />;
}
