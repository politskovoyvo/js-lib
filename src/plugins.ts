/**
 * Найти значение внутри объекта по key
 * @param obj
 * @param key
 */
const findValueByKey = (obj: any, key: string): any => {
    if (typeof obj === 'string') {
        return obj;
    }

    if (!obj) {
        return 'Empty object';
    }

    for (let k in obj) {
        if (k === key) {
            return obj[k];
        } else if (typeof obj[k] === 'object') {
            return findValueByKey(obj[k], key);
        }
    }
};

/**
 * Исключить одинаковые значения
 * @param object1
 * @param object2
 */
const objectDiff = <T extends object>(
    object1: T,
    object2: Partial<T>
): Partial<T> => {
    const nextStateEntries = Object.entries(object2);
    const different = {};

    for (let i = 0; i < nextStateEntries.length; i++) {
        const [key, nextValue] = nextStateEntries[i];
        // @ts-ignore
        const prevValue = object1[key];

        if (nextValue !== prevValue) {
            if (Array.isArray(nextValue)) {
                const arr = [];
                for (let ii = 0; ii < prevValue.length; ii++) {
                    arr.push(objectDiff(prevValue[ii], nextValue[ii]));
                }
                if (arr.length) {
                    // @ts-ignore
                    different[key] = arr;
                }
            } else if (typeof nextValue === "object") {
                const objDiff = objectDiff(prevValue, nextValue);
                if (Object.keys(objDiff).length) {
                    // @ts-ignore
                    different[key] = objDiff;
                }
            } else {
                // @ts-ignore
                different[key] = nextValue;
            }
        }
    }

    return different;
};

export default {
    findValueByKey,
    objectDiff
}
