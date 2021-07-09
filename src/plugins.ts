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

export default {
    findValueByKey
}
