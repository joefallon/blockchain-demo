"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var NonceFinder_1 = require("./NonceFinder");
var worker = self;
var nonceFinder = null;
worker.onmessage = function (ev) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var msg, nonce;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                msg = JSON.parse(ev.data);
                if (msg == "STOP") {
                    nonceFinder.stop();
                    return [2 /*return*/];
                }
                console.log('in worker' + msg['workerId'] + '...');
                nonceFinder = new NonceFinder_1.NonceFinder(msg['difficulty'], msg['sequenceId'], msg['data']);
                return [4 /*yield*/, nonceFinder.findNonce(msg['offset'])];
            case 1:
                nonce = _a.sent();
                console.log('nonce found in worker' + msg['workerId'] + '...');
                worker.postMessage(JSON.stringify(nonce));
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uY2VGaW5kZXIud29ya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTm9uY2VGaW5kZXIud29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFzQkU7OztBQXRCRiw2Q0FBNEM7QUFFNUMsSUFBTSxNQUFNLEdBQVcsSUFBVyxDQUFDO0FBRW5DLElBQUksV0FBVyxHQUFnQixJQUFJLENBQUM7QUFFcEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFPLEVBQWdCOzs7OztnQkFDaEMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVoQyxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDZixXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ25CLE1BQU0sZ0JBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRW5ELFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbkUscUJBQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQTs7Z0JBQWxELEtBQUssR0FBRyxTQUEwQztnQkFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRS9ELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O0tBQzdDLENBQUMifQ==