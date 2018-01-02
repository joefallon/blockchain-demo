"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BlockModel_1 = require("./BlockModel");
var assert = require("assert");
describe('BlockModel', function () {
    it('correctly initializes', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var model, expectedHash;
        return tslib_1.__generator(this, function (_a) {
            model = new BlockModel_1.BlockModel();
            expectedHash = '4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5';
            assert.equal(model.getHashValue(), expectedHash);
            assert.equal(model.getNonce(), 0);
            assert.equal(model.getSequenceId(), 1);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tNb2RlbC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmxvY2tNb2RlbC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFZRzs7O0FBWkgsMkNBQTBDO0FBQzFDLCtCQUFpQztBQUVqQyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ25CLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTs7O1lBQ2xCLEtBQUssR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztZQUN6QixZQUFZLEdBQUcsa0VBQWtFLENBQUM7WUFFeEYsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztTQUMxQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9