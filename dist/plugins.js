"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Найти значение внутри объекта по key
 * @param obj
 * @param key
 */
var findValueByKey = function (obj, key) {
    // Проверяем, является ли текущий объект объектом
    if (typeof obj === "object" && obj !== null) {
        // Проверяем наличие ключа в текущем объекте
        if (key in obj) {
            return obj[key]; // Если ключ найден, возвращаем его значение
        }
        // Рекурсивно обходим все поля объекта
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var value = findValueByKey(obj[prop], key); // Рекурсивный вызов для вложенных объектов
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
var objectDiff = function (object1, object2) {
    var nextStateEntries = Object.entries(object2);
    var different = {};
    for (var i = 0; i < nextStateEntries.length; i++) {
        var _a = tslib_1.__read(nextStateEntries[i], 2), key = _a[0], nextValue = _a[1];
        // @ts-ignore
        var prevValue = object1[key];
        if (nextValue !== prevValue) {
            if (Array.isArray(nextValue)) {
                if (JSON.stringify(prevValue) !== JSON.stringify(nextValue)) {
                    // @ts-ignore
                    different[key] = nextValue;
                }
            }
            else if (typeof nextValue === "object") {
                if (!nextValue) {
                    // @ts-ignore
                    different[key] = null;
                }
                else {
                    var objDiff = objectDiff(prevValue, nextValue);
                    if (Object.keys(objDiff).length) {
                        // @ts-ignore
                        different[key] = objDiff;
                    }
                }
            }
            else {
                // @ts-ignore
                different[key] = nextValue;
            }
        }
    }
    return different;
};
exports.default = {
    findValueByKey: findValueByKey,
    objectDiff: objectDiff
};
//# sourceMappingURL=plugins.js.map