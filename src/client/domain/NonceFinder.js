"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var js_sha256 = require("js-sha256");
var sha256 = js_sha256.sha256;
addEventListener('findNonce', function (message) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var sequenceId, data, nonce;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sequenceId = message['sequenceId'];
                data = message['data'];
                return [4 /*yield*/, findNonce(sequenceId, data)];
            case 1:
                nonce = _a.sent();
                postMessage(nonce, null, null);
                return [2 /*return*/];
        }
    });
}); });
function findNonce(sequenceId, data) {
    var _this = this;
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var found, nonce;
        return tslib_1.__generator(this, function (_a) {
            found = false;
            nonce = 0;
            while (!found) {
                if (isHashValid(sequenceId, nonce, data)) {
                    found = true;
                }
                else {
                    nonce++;
                }
            }
            resolve(nonce);
            return [2 /*return*/];
        });
    }); });
}
function isHashValid(sequenceId, nonce, data) {
    var hash = getHashValue(sequenceId, nonce, data);
    var substr = hash.substring(0, 4);
    return (substr == '0000');
}
function getHashValue(sequenceId, nonce, data) {
    var hash = sha256(sequenceId + nonce + data);
    return hash;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uY2VGaW5kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOb25jZUZpbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBc0NDOzs7QUF0Q0QscUNBQXdDO0FBQ3hDLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFFaEMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQU8sT0FBWTs7Ozs7Z0JBQ3ZDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ25DLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2YscUJBQU0sU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBQTs7Z0JBQXpDLEtBQUssR0FBRyxTQUFpQztnQkFFL0MsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7S0FDbEMsQ0FBQyxDQUFDO0FBRUgsbUJBQW1CLFVBQWtCLEVBQUUsSUFBWTtJQUFuRCxpQkFnQkM7SUFmRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPLEVBQUUsTUFBTTs7O1lBQ2pDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDZCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsT0FBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNYLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDakIsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixLQUFLLEVBQUUsQ0FBQztnQkFDWixDQUFDO1lBQ0wsQ0FBQztZQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O1NBQ2xCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxxQkFBcUIsVUFBa0IsRUFBRSxLQUFhLEVBQUUsSUFBWTtJQUNoRSxJQUFNLElBQUksR0FBRyxZQUFZLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxNQUFNLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVELHNCQUFzQixVQUFrQixFQUFFLEtBQWEsRUFBRSxJQUFZO0lBQ2pFLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQyJ9