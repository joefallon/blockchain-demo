"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var NonceFinder_1 = require("./NonceFinder");
var assert = require("assert");
describe('NonceFinder', function () {
    it('#findNonce finds the correct nonce value', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var nonceFinder, nonce;
        return tslib_1.__generator(this, function (_a) {
            nonceFinder = new NonceFinder_1.NonceFinder(1, 1, 'test', 'prev-hash');
            nonce = nonceFinder.findNonce();
            assert.equal(nonce, 6);
            return [2 /*return*/];
        });
    }); });
    it('#hash returns the correct hash value', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var nonceFinder, hash;
        return tslib_1.__generator(this, function (_a) {
            nonceFinder = new NonceFinder_1.NonceFinder(1, 1, 'test', 'prev-hash');
            hash = nonceFinder.hash(6);
            assert.equal(hash, '07edf74a583c6fc1860cdb323068f379c77efa61d1fcae428225b8d9b1bc1d7d');
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uY2VGaW5kZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vbmNlRmluZGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQWVHOzs7QUFmSCw2Q0FBNEM7QUFDNUMsK0JBQWlDO0FBRWpDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDcEIsRUFBRSxDQUFDLDBDQUEwQyxFQUFFOzs7WUFDckMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN6RCxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7U0FDMUIsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNDQUFzQyxFQUFFOzs7WUFDakMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN6RCxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxrRUFBa0UsQ0FBQyxDQUFDOzs7U0FDMUYsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==