"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var NonceFinder_1 = require("./NonceFinder");
var worker = self;
worker.onmessage = function (ev) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var msg, nonceFinder, nonce;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                msg = JSON.parse(ev.data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uY2VGaW5kZXI0Lndvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vbmNlRmluZGVyNC53b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQW1CRTs7O0FBbkJGLDZDQUE0QztBQUU1QyxJQUFNLE1BQU0sR0FBVyxJQUFXLENBQUM7QUFFbkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFPLEVBQWdCOzs7OztnQkFDaEMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBTzdDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDekUscUJBQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQTs7Z0JBQWxELEtBQUssR0FBRyxTQUEwQztnQkFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRS9ELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O0tBQzdDLENBQUMifQ==