"use strict";
// const workerpool = require('workerpool');
var tslib_1 = require("tslib");
function fibonacciWithPromise(n) {
    var _this = this;
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var _a, a, b;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (n < 2) {
                        return [2 /*return*/, resolve(n)];
                    }
                    return [4 /*yield*/, Promise.all([fibonacciWithPromise(n - 2), fibonacciWithPromise(n - 1)])];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), a = _a[0], b = _a[1];
                    return [2 /*return*/, resolve(a + b)];
            }
        });
    }); });
}
function fibonacci(n) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fibonacciWithPromise(n)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
module.exports = fibonacciWithPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlib25hY2NpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlib25hY2NpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7O0FBRTVDLDhCQUE4QixDQUFTO0lBQXZDLGlCQU1DO0lBTEcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQU8sT0FBTyxFQUFFLE1BQU07Ozs7O29CQUNyQyxFQUFFLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxNQUFNLGdCQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQztvQkFBQyxDQUFDO29CQUNqQixxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUE7O29CQUF0RixLQUFBLDhCQUFTLFNBQTZFLEtBQUEsRUFBckYsQ0FBQyxRQUFBLEVBQUUsQ0FBQyxRQUFBO29CQUNYLHNCQUFPLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7OztTQUN6QixDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsbUJBQXlCLENBQVM7Ozs7O3dCQUNmLHFCQUFNLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFBOztvQkFBdEMsTUFBTSxHQUFHLFNBQTZCO29CQUM1QyxzQkFBTyxNQUFNLEVBQUM7Ozs7Q0FDakI7QUFHRCxpQkFBUyxvQkFBb0IsQ0FBQyJ9