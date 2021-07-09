"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
String.prototype.contains = function (predicate) {
    return this.indexOf(predicate) !== -1;
};
Array.prototype.maxBy = function (predicate) {
    return this.reduce(function (a, b) { return ((predicate ? predicate(a) : a) >= (predicate ? predicate(b) : b) ? a : b); }, {});
};
// @ts-ignore
Array.prototype.selectMany = function (predicate) {
    // @ts-ignore
    return this.map(predicate).reduce(function (arr, curr) { return arr.concat(curr); }, []);
};
Math.randomRange = function (min, max) {
    if (isNaN(+min)) {
        throw new Error('Min должен быть числом');
    }
    if (isNaN(+max)) {
        throw new Error('Max должен быть числом');
    }
    if (+min > +max) {
        throw new Error('Max должен быть меньше либо равен min');
    }
    return Math.floor(Math.random() * (+max - +min + 1) + +min);
};
// Object.prototype.isEqual = function <T>(p): boolean {
//   const keysO = Object.keys(this).sort();
//   const keysP = Object.keys(p).sort();
//   if (keysO.length !== keysP.length) {
//     return false;
//   }// not the same nr of keys
//   if (keysO.join('') !== keysP.join('')) {
//     return false;
//   }// different keys
//   for (let i = 0; i < keysO.length; ++i) {
//     if (this[keysO[i]] instanceof Array) {
//       if (!(p[keysO[i]] instanceof Array)) {
//         return false;
//       }
//       // if (compareObjects(o[keysO[i]], p[keysO[i]] === false) return false
//       // would work, too, and perhaps is a better fit, still, this is easy, too
//       if (p[keysO[i]].sort().join('') !== this[keysO[i]].sort().join('')) {
//         return false;
//       }
//     } else if (this[keysO[i]] instanceof Date) {
//       if (!(p[keysO[i]] instanceof Date)) {
//         return false;
//       }
//       if (('' + this[keysO[i]]) !== ('' + p[keysO[i]])) {
//         return false;
//       }
//     } else if (this[keysO[i]] instanceof Function) {
//       if (!(p[keysO[i]] instanceof Function)) {
//         return false;
//       }
//       // ignore functions, or check them regardless?
//     } else if (this[keysO[i]] instanceof Object) {
//       if (!(p[keysO[i]] instanceof Object)) {
//         return false;
//       }
//       if (this[keysO[i]] === this) {// self reference?
//         if (p[keysO[i]] !== p) {
//           return false;
//         }
//       } else if (this[keysO[i]].isEqual(p[keysO[i]]) === false) {
//         return false;
//       }// WARNING: does not deal with circular refs other than ^^
//     }
//     if (this[keysO[i]] !== p[keysO[i]]) {// change !== to != for loose comparison
//       return false;
//     }// not the same value
//   }
//   return true;
// };
Array.prototype.differenceWith = function (array, predicate) {
    return [this, array].reduce(function (a, b) {
        return a.filter(function (c) { return (predicate ? !b.some(function (d) { return predicate(d, c); }) : b.includes(c)); });
    });
};
Array.prototype.unionWith = function (array, predicate) {
    return [this, array].reduce(function (a, b) {
        return a.filter(function (c) { return (predicate ? b.some(function (d) { return predicate(d, c); }) : b.includes(c)); });
    });
};
Array.prototype.groupBy = function (predicate) {
    var map = {};
    this.forEach(function (item) {
        var key = predicate ? "" + predicate(item) : item;
        var collection = map[key];
        if (!collection) {
            map[key] = [item];
        }
        else {
            map[key] = tslib_1.__spread(map[key], [item]);
        }
    });
    return map;
};
Array.prototype.minBy = function (predicate) {
    return this.reduce(function (a, b) { return ((predicate ? predicate(a) : a) <= (predicate ? predicate(b) : b) ? a : b); }, {});
};
Array.prototype.sortBy = function (predicate) {
    return this.sort(function (a, b) {
        return (predicate ? predicate(a) : a) > (predicate ? predicate(b) : b)
            ? 1
            : (predicate ? predicate(b) : b) > (predicate ? predicate(a) : a)
                ? -1
                : 0;
    });
};
Array.prototype.sortSearch = function (predicate, search) {
    return this.sort(function (a, b) {
        var ap = ((predicate ? predicate(a) : a).toLowerCase().indexOf(search.toLowerCase()) === 0
            ? '\x00'
            : '') + (predicate ? predicate(a) : a);
        var bp = ((predicate ? predicate(b) : b).toLowerCase().indexOf(search.toLowerCase()) === 0
            ? '\x00'
            : '') + (predicate ? predicate(b) : b);
        return ap > bp ? 1 : bp > ap ? -1 : 0;
    });
};
Array.prototype.distinct = function (selector) {
    var _this = this;
    if (!selector) {
        return Array.from(new Set(this));
    }
    var result = [];
    var resultIndex = [];
    var selectedItems = this.map(selector);
    selectedItems.forEach(function (el, index) {
        if (!resultIndex.includes(el)) {
            resultIndex.push(el);
            result.push(_this[index]);
        }
    });
    return result;
};
Array.prototype.leftJoin = function (array, primaryKey, foreignKey) {
    var arr = [];
    primaryKey = primaryKey || (function (a) { return a; });
    foreignKey = foreignKey || (function (b) { return b; });
    // tslint:disable-next-line:prefer-for-of
    for (var l = 0; l < this.length; l++) {
        var wasFound = false;
        // tslint:disable-next-line:prefer-for-of
        for (var r = 0; r < array.length; r++) {
            var isMatch = primaryKey(this[l]) === foreignKey(array[r]);
            if (isMatch) {
                wasFound = true;
                arr.push(Object.assign(this[l], array[r]));
            }
        }
    }
    return arr;
};
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
Date.prototype.addHours = function (hours) {
    var date = new Date(this.valueOf());
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return date;
};
//# sourceMappingURL=prototype.js.map