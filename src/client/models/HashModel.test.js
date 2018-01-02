"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var HashModel_1 = require("./HashModel");
describe('HashModel', function () {
    it('#hashData correctly hashes data', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var model, hash1;
        return tslib_1.__generator(this, function (_a) {
            model = new HashModel_1.HashModel();
            hash1 = model.hashData('');
            assert.equal(hash1, 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaE1vZGVsLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIYXNoTW9kZWwudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBVUc7OztBQVZILCtCQUFpQztBQUVqQyx5Q0FBd0M7QUFFeEMsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUNsQixFQUFFLENBQUMsaUNBQWlDLEVBQUU7OztZQUM1QixLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7WUFDeEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsa0VBQWtFLENBQUMsQ0FBQzs7O1NBQzNGLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=