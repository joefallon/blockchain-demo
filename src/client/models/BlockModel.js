"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var js_sha256 = require("js-sha256");
var sha256 = js_sha256.sha256;
var NonceFinderWorker1 = require("worker-loader!../domain/NonceFinder1.worker.ts");
var NonceFinderWorker2 = require("worker-loader!../domain/NonceFinder2.worker.ts");
var NonceFinderWorker3 = require("worker-loader!../domain/NonceFinder3.worker.ts");
var NonceFinderWorker4 = require("worker-loader!../domain/NonceFinder4.worker.ts");
var NonceFinder_1 = require("../domain/NonceFinder");
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
                setTimeout(function () {
                    var sequenceId = _this._sequenceId;
                    var nonce = _this._nonce;
                    var data = _this._data;
                    var nonceFinder = new NonceFinder_1.NonceFinder(BlockModel.DIFFICULTY, sequenceId, data);
                    var hash = nonceFinder.hash(nonce);
                    resolve(hash);
                }, 0);
                return [2 /*return*/];
            });
        }); });
    };
    BlockModel.prototype.findNonce = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var found, worker1, worker2, worker3, worker4, nonceOffSet, msg1, msg2, msg3, msg4;
            return tslib_1.__generator(this, function (_a) {
                found = false;
                worker1 = new NonceFinderWorker1();
                worker2 = new NonceFinderWorker2();
                worker3 = new NonceFinderWorker3();
                worker4 = new NonceFinderWorker4();
                worker1.onmessage = function (message) {
                    console.log('message received from worker1...');
                    console.log(message);
                    _this._nonce = JSON.parse(message.data);
                    if (!found) {
                        found = true;
                        resolve(_this._nonce);
                    }
                };
                worker2.onmessage = function (message) {
                    console.log('message received from worker2...');
                    console.log(message);
                    _this._nonce = JSON.parse(message.data);
                    if (!found) {
                        found = true;
                        resolve(_this._nonce);
                    }
                };
                worker3.onmessage = function (message) {
                    console.log('message received from worker3...');
                    console.log(message);
                    _this._nonce = JSON.parse(message.data);
                    if (!found) {
                        found = true;
                        resolve(_this._nonce);
                    }
                };
                worker4.onmessage = function (message) {
                    console.log('message received from worker4...');
                    console.log(message);
                    _this._nonce = JSON.parse(message.data);
                    if (!found) {
                        found = true;
                        resolve(_this._nonce);
                    }
                };
                nonceOffSet = Math.floor(Number.MAX_SAFE_INTEGER / 4 - 1);
                msg1 = {
                    sequenceId: this._sequenceId,
                    data: this._data,
                    difficulty: BlockModel.DIFFICULTY,
                    offset: 0,
                    workerId: 1
                };
                msg2 = {
                    sequenceId: this._sequenceId,
                    data: this._data,
                    difficulty: BlockModel.DIFFICULTY,
                    offset: nonceOffSet,
                    workerId: 2
                };
                msg3 = {
                    sequenceId: this._sequenceId,
                    data: this._data,
                    difficulty: BlockModel.DIFFICULTY,
                    offset: nonceOffSet * 2,
                    workerId: 3
                };
                msg4 = {
                    sequenceId: this._sequenceId,
                    data: this._data,
                    difficulty: BlockModel.DIFFICULTY,
                    offset: nonceOffSet * 3,
                    workerId: 4
                };
                console.log('sending msg to worker1...');
                console.log(msg1);
                worker1.postMessage(JSON.stringify(msg1));
                return [2 /*return*/];
            });
        }); });
    };
    BlockModel.prototype.hashIsValid = function () {
        var sequenceId = this._sequenceId;
        var nonce = this._nonce;
        var data = this._data;
        var nonceFinder = new NonceFinder_1.NonceFinder(BlockModel.DIFFICULTY, sequenceId, data);
        return nonceFinder.isHashMatch(nonce);
    };
    BlockModel.DIFFICULTY = 4;
    return BlockModel;
}());
exports.BlockModel = BlockModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJsb2NrTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFFaEMsbUZBQXNGO0FBQ3RGLG1GQUFzRjtBQUN0RixtRkFBc0Y7QUFDdEYsbUZBQXNGO0FBRXRGLHFEQUFvRDtBQUVwRDtJQU9JO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBUSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDZCQUFRLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sa0NBQWEsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlDQUFZLEdBQW5CO1FBQUEsaUJBYUM7UUFaRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7O2dCQUNyQyxVQUFVLENBQUM7b0JBQ1AsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztvQkFDcEMsSUFBTSxLQUFLLEdBQVEsS0FBSSxDQUFDLE1BQU0sQ0FBQztvQkFDL0IsSUFBTSxJQUFJLEdBQVMsS0FBSSxDQUFDLEtBQUssQ0FBQztvQkFFOUIsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3RSxJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUVyQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2FBQ1QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhCQUFTLEdBQWhCO1FBQUEsaUJBd0dDO1FBdkdHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7O2dCQUNqQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNaLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7Z0JBQ25DLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7Z0JBQ25DLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7Z0JBQ25DLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7Z0JBRXpDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBQyxPQUFxQjtvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV2QyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDYixPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFFRixPQUFPLENBQUMsU0FBUyxHQUFHLFVBQUMsT0FBcUI7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztvQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFdkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNSLEtBQUssR0FBRyxJQUFJLENBQUM7d0JBQ2IsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekIsQ0FBQztnQkFDTCxDQUFDLENBQUM7Z0JBRUYsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFDLE9BQXFCO29CQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXZDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDUixLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNiLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDO2dCQUVGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBQyxPQUFxQjtvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV2QyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDYixPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFFSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUUxRCxJQUFJLEdBQUc7b0JBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM1QixJQUFJLEVBQVEsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtvQkFDakMsTUFBTSxFQUFNLENBQUM7b0JBQ2IsUUFBUSxFQUFJLENBQUM7aUJBQ2hCLENBQUM7Z0JBRUksSUFBSSxHQUFHO29CQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDNUIsSUFBSSxFQUFRLElBQUksQ0FBQyxLQUFLO29CQUN0QixVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7b0JBQ2pDLE1BQU0sRUFBTSxXQUFXO29CQUN2QixRQUFRLEVBQUksQ0FBQztpQkFDaEIsQ0FBQztnQkFFSSxJQUFJLEdBQUc7b0JBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM1QixJQUFJLEVBQVEsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtvQkFDakMsTUFBTSxFQUFNLFdBQVcsR0FBRyxDQUFDO29CQUMzQixRQUFRLEVBQUksQ0FBQztpQkFDaEIsQ0FBQztnQkFFSSxJQUFJLEdBQUc7b0JBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM1QixJQUFJLEVBQVEsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtvQkFDakMsTUFBTSxFQUFNLFdBQVcsR0FBRyxDQUFDO29CQUMzQixRQUFRLEVBQUksQ0FBQztpQkFDaEIsQ0FBQztnQkFJRixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7YUFhN0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdDQUFXLEdBQWxCO1FBQ0ksSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFNLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdFLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUF6SnVCLHFCQUFVLEdBQUcsQ0FBQyxDQUFDO0lBMEozQyxpQkFBQztDQUFBLEFBM0pELElBMkpDO0FBM0pZLGdDQUFVIn0=