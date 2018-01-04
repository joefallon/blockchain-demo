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
                    console.log('finding with offset ' + startingNonce + '...');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uY2VGaW5kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOb25jZUZpbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFDeEMsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUVoQztJQU9JLHFCQUFtQixVQUFrQixFQUFFLFVBQVksRUFBRSxJQUFPLEVBQUUsUUFBVztRQUFsQywyQkFBQSxFQUFBLGNBQVk7UUFBRSxxQkFBQSxFQUFBLFNBQU87UUFBRSx5QkFBQSxFQUFBLGFBQVc7UUFDckUsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBSyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLDBCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU0sK0JBQVMsR0FBaEIsVUFBaUIsYUFBZTtRQUFoQyxpQkFjQztRQWRnQiw4QkFBQSxFQUFBLGlCQUFlO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7Z0JBQ3JDLFVBQVUsQ0FBQztvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDNUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQztvQkFFMUIsT0FBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ2xELEVBQUUsS0FBSyxDQUFDO29CQUNaLENBQUM7b0JBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OzthQUNULENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQkFBSSxHQUFYLFVBQVksS0FBYTtRQUNyQixJQUFNLGFBQWEsR0FBRztZQUNsQixLQUFLLEVBQVEsS0FBSztZQUNsQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsSUFBSSxFQUFTLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFNBQVMsRUFBSSxJQUFJLENBQUMsU0FBUztTQUM5QixDQUFDO1FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFcEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFNLElBQUksR0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQU0sSUFBSSxHQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXJCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0IsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELE1BQU0sQ0FBQyxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDO0FBN0RZLGtDQUFXIn0=