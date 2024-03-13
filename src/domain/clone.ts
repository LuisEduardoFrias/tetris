//clone object
export default function clone(obj: GlobalState): GlobalState {
	const clonedObj = { ...JSON.parse(JSON.stringify(obj)) };
	addMethods(clonedObj, obj);
	return clonedObj;
}

function addMethods(clonedObj: GlobalState, originalObj: GlobalState) {
	for (let prop in originalObj) {
		if (Array.isArray(originalObj[prop])) {
			clonedObj[prop] = originalObj[prop].slice();
		} else if (
			typeof originalObj[prop] === "object" &&
			typeof originalObj[prop] !== "function" &&
			originalObj[prop] !== null
		) {
			clonedObj[prop] = {};
			addMethods(clonedObj[prop], originalObj[prop]);
		} else if (
			typeof originalObj[prop] === "function" &&
			prop !== "constructor"
		) {
			clonedObj[prop] = originalObj[prop].bind(clonedObj);
		} else {
			clonedObj[prop] = originalObj[prop];
		}
	}
	const prototype = Object.getPrototypeOf(originalObj);
	if (prototype !== null) {
		const prototypeMethods = Object.getOwnPropertyNames(prototype);
		prototypeMethods.forEach(prop => {
			if (typeof prototype[prop] === "function" && prop !== "constructor") {
				clonedObj[prop] = prototype[prop].bind(clonedObj);
			}
		});
	}
}