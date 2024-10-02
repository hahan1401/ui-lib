export const deepClone = <T>(input: T): T => {
    if (typeof input !== 'object' || input === null) {
        return input
    }

    if (Array.isArray(input)) {
        return input.map(_i => deepClone(_i)) as T
    }

    return Object.fromEntries(Object.entries(input).map(([key, value]) => [key, deepClone(value)])) as T
}
