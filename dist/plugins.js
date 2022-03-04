"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Найти значение внутри объекта по key
 * @param obj
 * @param key
 */
var findValueByKey = function (obj, key) {
    if (typeof obj === 'string') {
        return obj;
    }
    if (!obj) {
        return 'Empty object';
    }
    for (var k in obj) {
        if (k === key) {
            return obj[k];
        }
        else if (typeof obj[k] === 'object') {
            return findValueByKey(obj[k], key);
        }
    }
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
                var arr = [];
                for (var ii = 0; ii < prevValue.length; ii++) {
                    arr.push(objectDiff(prevValue[ii], nextValue[ii]));
                }
                if (arr.length) {
                    // @ts-ignore
                    different[key] = arr;
                }
            }
            else if (typeof nextValue === "object") {
                var objDiff = objectDiff(prevValue, nextValue);
                if (Object.keys(objDiff).length) {
                    // @ts-ignore
                    different[key] = objDiff;
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