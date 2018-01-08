"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var js_sha256 = require("js-sha256");
var sha256 = js_sha256.sha256;
var NonceFinderWorker = require("worker-loader!../domain/NonceFinder.worker.ts");
var NonceFinder_1 = require("../domain/NonceFinder");
var BlockModel = /** @class */ (function () {
    function BlockModel() {
        this._nonce = 0;
        this._sequenceId = 1;
        this._data = '';
        this._worker = new NonceFinderWorker();
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
            var worker, msg;
            return tslib_1.__generator(this, function (_a) {
                worker = this._worker;
                worker.onmessage = function (message) {
                    console.log('message received from worker1...');
                    console.log(message);
                    _this._nonce = JSON.parse(message.data);
                    resolve(_this._nonce);
                };
                msg = {
                    sequenceId: this._sequenceId,
                    data: this._data,
                    difficulty: BlockModel.DIFFICULTY,
                    offset: 0,
                    workerId: 1,
                    prevHash: ''
                };
                console.log('sending msg to worker1...');
                console.log(msg);
                worker.postMessage(JSON.stringify(msg));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJsb2NrTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFFaEMsaUZBQW9GO0FBRXBGLHFEQUFvRDtBQUVwRDtJQVFJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBUSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBUyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBTyxJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLDZCQUFRLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sa0NBQWEsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlDQUFZLEdBQW5CO1FBQUEsaUJBYUM7UUFaRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7O2dCQUNyQyxVQUFVLENBQUM7b0JBQ1AsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztvQkFDcEMsSUFBTSxLQUFLLEdBQVEsS0FBSSxDQUFDLE1BQU0sQ0FBQztvQkFDL0IsSUFBTSxJQUFJLEdBQVMsS0FBSSxDQUFDLEtBQUssQ0FBQztvQkFFOUIsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3RSxJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUVyQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O2FBQ1QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhCQUFTLEdBQWhCO1FBQUEsaUJBd0JDO1FBdkJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7O2dCQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFFNUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFDLE9BQXFCO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQztnQkFFSSxHQUFHLEdBQUc7b0JBQ1IsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM1QixJQUFJLEVBQVEsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtvQkFDakMsTUFBTSxFQUFNLENBQUM7b0JBQ2IsUUFBUSxFQUFJLENBQUM7b0JBQ2IsUUFBUSxFQUFJLEVBQUU7aUJBQ2pCLENBQUM7Z0JBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7O2FBQzNDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxnQ0FBVyxHQUFsQjtRQUNJLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLElBQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBM0V1QixxQkFBVSxHQUFHLENBQUMsQ0FBQztJQTRFM0MsaUJBQUM7Q0FBQSxBQTdFRCxJQTZFQztBQTdFWSxnQ0FBVSJ9