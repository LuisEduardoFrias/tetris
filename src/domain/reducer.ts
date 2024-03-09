/** @format */

import { Action } from "../super_state/lib/types";
import { clone } from "./super_state/index";

export const enum Actions {
	changePlay = "changePlay",
	addPiece = "addPiece",
	movePiece = "movePiece",
	addNextPiece = "addNextPiece",
	upScore = "upScore",
	upLines = "upLines",
	uplevel = "uplevel",
	changeLeft = "changeLeft",
	changeRight = "changeRight",
	changeA = "changeA",
	changeB = "changeB"
}

export default function reducer(state: object, action: Action) {
	const _reduce = {
		changePlay: () => {
			return { ...state, play: action.value };
		},
		addPiece: () => {
			return { ...state, pieces: action.value };
		},
		addNextPiece: () => {
			return { ...state, nextPiece: action.value };
		},
		upScore: () => {
			return { ...state, score: action.value };
		},
		upLines: () => {
			return { ...state, lines: action.value };
		},
		uplevel: () => {
			return { ...state, level: action.value };
		},
		changeLeft: () => {
			return {
				...state,
				control: { ...state.control, left: action.value }
			};
		},
		changeRight: () => {
			return {
				...state,
				control: { ...state.control, right: action.value }
			};
		},
		changeA: () => {
			return { ...state, control: { ...state.control, a: action.value } };
		},
		changeB: () => {
			return { ...state, control: { ...state.control, b: action.value } };
		},
		movePiece: () => {
			return action.value;
		},
		default: () => {
			alert("La accion delecionar no existe.");
			return { ...state };
		}
	};

	const value: any = (_reduce[action.type] ?? _reduce["default"])();

	return value;
}
