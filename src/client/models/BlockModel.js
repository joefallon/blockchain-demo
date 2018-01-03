"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var js_sha256 = require("js-sha256");
var sha256 = js_sha256.sha256;
var BlockModel = /** @class */ (function () {
    function BlockModel() {
        this._nonce = 0;
        this._sequenceId = 1;
        this._data = '';
    }
    BlockModel.prototype.getNonce = function () {
        return this._nonce;
    };
    BlockModel.prototype.getSequenceId = function () {
        return this._sequenceId;
    };
    BlockModel.prototype.setData = function (data) {
        this._data = data;
    };
    BlockModel.prototype.getHashValue = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                setImmediate(function () {
                    var sequenceId = _this._sequenceId.toString(10);
                    var nonce = _this._nonce.toString(10);
                    var data = _this._data;
                    var hash = sha256(sequenceId + nonce + data);
                    resolve(hash);
                });
                return [2 /*return*/];
            });
        }); });
    };
    BlockModel.prototype.findNonce = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var found;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        found = false;
                        this._nonce = 0;
                        _a.label = 1;
                    case 1:
                        if (!!found) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.hashIsValid()];
                    case 2:
                        if (_a.sent()) {
                            found = true;
                        }
                        else {
                            this._nonce++;
                        }
                        return [3 /*break*/, 1];
                    case 3:
                        resolve(this._nonce);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    BlockModel.prototype.hashIsValid = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hash, substr;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getHashValue()];
                    case 1:
                        hash = _a.sent();
                        substr = hash.substring(0, 4);
                        return [2 /*return*/, (substr == '0000')];
                }
            });
        });
    };
    return BlockModel;
}());
exports.BlockModel = BlockModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJsb2NrTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFHaEM7SUFLSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQVMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSw2QkFBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLGtDQUFhLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUFBLGlCQVVDO1FBVEcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQU8sT0FBTyxFQUFFLE1BQU07OztnQkFDckMsWUFBWSxDQUFDO29CQUNULElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNqRCxJQUFNLEtBQUssR0FBUSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDNUMsSUFBTSxJQUFJLEdBQVMsS0FBSSxDQUFDLEtBQUssQ0FBQztvQkFDOUIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7OzthQUNOLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw4QkFBUyxHQUFoQjtRQUFBLGlCQWdCQztRQWZHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7Ozt3QkFDakMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs2QkFFVixDQUFDLEtBQUs7d0JBQ0wscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBM0IsRUFBRSxDQUFBLENBQUMsU0FBd0IsQ0FBQyxDQUFDLENBQUM7NEJBQzFCLEtBQUssR0FBRyxJQUFJLENBQUM7d0JBQ2pCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNsQixDQUFDOzs7d0JBR0wsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7OzthQUN4QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVksZ0NBQVcsR0FBeEI7Ozs7OzRCQUNpQixxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUFoQyxJQUFJLEdBQUcsU0FBeUI7d0JBQ2hDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsc0JBQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEVBQUM7Ozs7S0FDN0I7SUFDTCxpQkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExRFksZ0NBQVUifQ==