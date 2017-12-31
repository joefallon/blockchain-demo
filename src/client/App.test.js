"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var React = require("react");
var enzyme_1 = require("enzyme");
var App_1 = require("./App");
describe('App', function () {
    it('correctly sets the page title', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var app;
        return tslib_1.__generator(this, function (_a) {
            app = enzyme_1.mount(React.createElement(App_1.App, null));
            assert.equal(document.title, 'Blockchain Demo');
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcHAudGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQVdHOzs7QUFYSCwrQkFBaUM7QUFDakMsNkJBQStCO0FBQy9CLGlDQUErQjtBQUUvQiw2QkFBNEI7QUFFNUIsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNaLEVBQUUsQ0FBQywrQkFBK0IsRUFBRTs7O1lBQzFCLEdBQUcsR0FBRyxjQUFLLENBQUMsb0JBQUMsU0FBRyxPQUFFLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7O1NBQ25ELENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=