const isValuefullArray = (array: Array<unknown>) => array.length > 0;
const isValuefullObject = (obj: Record<string, unknown>) => Object.keys(obj).length > 0;

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

export const uniqBy = <T,>(
	input: Array<T>,
	iteratee: (item: T) => unknown,
): T[] => {
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
