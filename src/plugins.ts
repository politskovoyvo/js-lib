const valueForKey = (obj: any, prop: string): any => {
    if (typeof obj === 'string') {
        return obj;
    }

    if (!obj) {
        return 'unknown error';
    }

    for (let k in obj) {
        if (k === prop) {
            return obj[k];
        } else if (typeof obj[k] === 'object') {
            return valueForKey(obj[k], prop);
        }
    }
};

export default {
    valueForKey
}
