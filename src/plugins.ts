/**
 * Найти значение внутри объекта по key
 * @param obj
 * @param key
 */
const findValueByKey = (obj: any, key: string): string => {
    // Проверяем, является ли текущий объект объектом
    if (typeof obj === "object" && obj !== null) {
        // Проверяем наличие ключа в текущем объекте
        if (key in obj) {
            return obj[key]; // Если ключ найден, возвращаем его значение
        }

        // Рекурсивно обходим все поля объекта
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                const value = findValueByKey(obj[prop], key); // Рекурсивный вызов для вложенных объектов
                if (value !== null) {
                    return value; // Если ключ найден во вложенном объекте, возвращаем его значение
                }
            }
        }
    }

    return '';
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
                if (JSON.stringify(prevValue) !== JSON.stringify(nextValue)) {
                    // @ts-ignore
                    different[key] = nextValue;
                }
            } else if (typeof nextValue === "object") {
                if (!nextValue) {
                    // @ts-ignore
                    different[key] = null;
                } else {
                    const objDiff = objectDiff(prevValue, nextValue);
                    if (Object.keys(objDiff).length) {
                        // @ts-ignore
                        different[key] = objDiff;
                    }
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
