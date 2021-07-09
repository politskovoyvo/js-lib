"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = {
    findValueByKey: findValueByKey
};
//# sourceMappingURL=plugins.js.map