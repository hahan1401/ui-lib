const isValuefullArray = (array: Array<unknown>) => array.length > 0;
const isValuefullObject = (obj: Record<string, unknown>) => Object.keys(obj).length > 0;

export const isEmpty = (input: unknown): boolean => {
	if (input === null || input === undefined) return true;
	if (typeof input === 'object') {
		if (Array.isArray(input)) return input.length > 0 ? false : true;

		const keys = Object.keys(input);
		return keys.length > 0 ? false : true;
	}
	return true;
};

export const deepClone = <T>(input: T): T => {
	if (typeof input !== 'object' || input === null) {
		return input;
	}

	if (Array.isArray(input)) {
		return input.map((_i) => deepClone(_i)) as T;
	}

	return Object.fromEntries(Object.entries(input).map(([key, value]) => [key, deepClone(value)])) as T;
};

export const removeValueLess = <T>(input: T): T => {
	if (Array.isArray(input)) {
		return input
			.map((item) => removeValueLess(item))
			.filter((item) => {
				if (typeof item !== 'object' || item === null) return Boolean(item);
				if (typeof item == 'object' && item !== null && Array.isArray(item) && !isValuefullArray(item)) return false;
				if (typeof item == 'object' && item !== null && !Array.isArray(item) && !isValuefullObject(item)) return false;
				return true;
			}) as T;
	}
	if (typeof input === 'object' && input !== null) {
		const result: Record<string, unknown> = {};
		for (const key in input) {
			const value = removeValueLess(input[key]);
			if (
				typeof value === 'object' &&
				value !== null &&
				!Array.isArray(value) &&
				isValuefullObject(value as Record<string, unknown>)
			) {
				result[key] = value;
			}
			if (typeof value === 'object' && value !== null && Array.isArray(value) && isValuefullArray(value)) {
				result[key] = value;
			}
			if (typeof value !== 'object' && Boolean(value)) {
				result[key] = value;
			}
		}
		return result as T;
	}
	return input;
};

export const uniqBy = <T>(input: Array<T>, iteratee: (item: T) => unknown = (item) => item): T[] => {
	const seen = new Set();
	return input.filter((item) => {
		const key = iteratee(item);
		if (seen.has(key)) {
			return false;
		} else {
			seen.add(key);
			return true;
		}
	});
};

export const intersectionBy = <T>(...args: (T[] | ((item: T) => unknown))[]): T[] => {
	let iteratee = (item: T): unknown => item;
	const mainInput = args[0] as T[];
	const restInput = args.slice(1).flat(1) as T[];

	if (typeof args.at(-1) === 'function') {
		iteratee = args.at(-1) as (item: T) => unknown;
		restInput.pop();
	}

	const arrayToComparewith = restInput.map(iteratee);
	const output = mainInput.filter((item) => arrayToComparewith.includes(iteratee(item)));
	return output;
};

export const isEqual = (firstArgument: any, secondArgument: any): boolean => {
	if (typeof firstArgument !== typeof secondArgument) return false;
	if (firstArgument === null || secondArgument === null) return firstArgument === secondArgument;
	if (typeof firstArgument !== 'object') return firstArgument === secondArgument;

	if (Array.isArray(firstArgument) && Array.isArray(secondArgument)) {
		if (firstArgument.length !== secondArgument.length) return false;
		let _isEqual = true;
		for (let i = 0; i < firstArgument.length; i++) {
			_isEqual = isEqual(firstArgument[i], secondArgument[i]);
			if (_isEqual === false) {
				return false;
			}
		}
		return _isEqual;
	}

	if (!Array.isArray(firstArgument) && !Array.isArray(secondArgument)) {
		const firstArgumentKeys = Object.keys(firstArgument);
		const secondArgumentKeys = Object.keys(secondArgument);
		if (firstArgumentKeys.length !== secondArgumentKeys.length) return false;
		if (firstArgumentKeys.toString() !== secondArgumentKeys.toString()) return false;

		let _isEqual = true;
		for (const key of firstArgumentKeys) {
			_isEqual = isEqual(firstArgument[key], secondArgument[key]);
			if (_isEqual === false) break;
		}
		return _isEqual;
	}

	return false;
};
