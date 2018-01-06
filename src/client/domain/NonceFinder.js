"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var js_sha256 = require("js-sha256");
var sha256 = js_sha256.sha256;
var NonceFinder = /** @class */ (function () {
    function NonceFinder(difficulty, sequenceId, data, prevHash) {
        if (sequenceId === void 0) { sequenceId = 0; }
        if (data === void 0) { data = ''; }
        if (prevHash === void 0) { prevHash = ''; }
        this._difficulty = difficulty;
        this._sequenceId = sequenceId;
        this._data = data;
        this._prevHash = prevHash;
        this._shouldStop = false;
    }
    NonceFinder.prototype.stop = function () {
        this._shouldStop = true;
    };
    NonceFinder.prototype.findNonce = function (startingNonce) {
        var _this = this;
        if (startingNonce === void 0) { startingNonce = 0; }
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                setTimeout(function () {
                    _this._shouldStop = false;
                    var nonce = startingNonce;
                    while (!_this.isHashMatch(nonce) && !_this._shouldStop) {
                        ++nonce;
                    }
                    resolve(nonce);
                }, 0);
                return [2 /*return*/];
            });
        }); });
    };
    NonceFinder.prototype.hash = function (nonce) {
        var dataStructure = {
            nonce: nonce,
            sequence_id: this._sequenceId,
            data: this._data,
            prev_hash: this._prevHash
        };
        var serializedData = JSON.stringify(dataStructure);
        var hash = sha256(serializedData);
        return hash;
    };
    NonceFinder.prototype.isHashMatch = function (nonce) {
        var hash = this.hash(nonce);
        var diff = this._difficulty;
        var substr = hash.substring(0, diff);
        var matchString = '';
        for (var i = 0; i < diff; i++) {
            matchString = matchString.concat('0');
        }
        return (substr == matchString);
    };
    return NonceFinder;
}());
exports.NonceFinder = NonceFinder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uY2VGaW5kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOb25jZUZpbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFDeEMsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUVoQztJQU9JLHFCQUFtQixVQUFrQixFQUFFLFVBQVksRUFBRSxJQUFPLEVBQUUsUUFBVztRQUFsQywyQkFBQSxFQUFBLGNBQVk7UUFBRSxxQkFBQSxFQUFBLFNBQU87UUFBRSx5QkFBQSxFQUFBLGFBQVc7UUFDckUsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBSyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLDBCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU0sK0JBQVMsR0FBaEIsVUFBaUIsYUFBZTtRQUFoQyxpQkFhQztRQWJnQiw4QkFBQSxFQUFBLGlCQUFlO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7Z0JBQ3JDLFVBQVUsQ0FBQztvQkFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDO29CQUUxQixPQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbEQsRUFBRSxLQUFLLENBQUM7b0JBQ1osQ0FBQztvQkFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2FBQ1QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDBCQUFJLEdBQVgsVUFBWSxLQUFhO1FBQ3JCLElBQU0sYUFBYSxHQUFHO1lBQ2xCLEtBQUssRUFBUSxLQUFLO1lBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixJQUFJLEVBQVMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsU0FBUyxFQUFJLElBQUksQ0FBQyxTQUFTO1NBQzlCLENBQUM7UUFFRixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxpQ0FBVyxHQUFsQixVQUFtQixLQUFhO1FBQzVCLElBQU0sSUFBSSxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBTSxJQUFJLEdBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFckIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksa0NBQVcifQ==