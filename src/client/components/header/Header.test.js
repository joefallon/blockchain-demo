"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var React = require("react");
var react_router_1 = require("react-router");
var enzyme_1 = require("enzyme");
var Header_1 = require("./Header");
describe('Header', function () {
    it('correctly highlights hash nav-link', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var wrapper, hashLink, blockLink, blockchainLink;
        return tslib_1.__generator(this, function (_a) {
            wrapper = enzyme_1.mount(React.createElement(react_router_1.MemoryRouter, { initialEntries: ['/'], initialIndex: 0 },
                React.createElement(react_router_1.Route, { render: function (props) { return React.createElement(Header_1.Header, tslib_1.__assign({}, props)); } })));
            hashLink = wrapper.find('.hash-link');
            assert.equal(hashLink.parent().at(0).hasClass('active'), true);
            blockLink = wrapper.find('.block-link');
            assert.equal(blockLink.parent().at(0).hasClass('active'), false);
            blockchainLink = wrapper.find('.blockchain-link');
            assert.equal(blockchainLink.parent().at(0).hasClass('active'), false);
            return [2 /*return*/];
        });
    }); });
    it('correctly highlights block nav-link', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var wrapper, hashLink, blockLink, blockchainLink;
        return tslib_1.__generator(this, function (_a) {
            wrapper = enzyme_1.mount(React.createElement(react_router_1.MemoryRouter, { initialEntries: ['/block'], initialIndex: 0 },
                React.createElement(react_router_1.Route, { render: function (props) { return React.createElement(Header_1.Header, tslib_1.__assign({}, props)); } })));
            hashLink = wrapper.find('.hash-link');
            assert.equal(hashLink.parent().at(0).hasClass('active'), false);
            blockLink = wrapper.find('.block-link');
            assert.equal(blockLink.parent().at(0).hasClass('active'), true);
            blockchainLink = wrapper.find('.blockchain-link');
            assert.equal(blockchainLink.parent().at(0).hasClass('active'), false);
            return [2 /*return*/];
        });
    }); });
    it('correctly highlights blockchain nav-link', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var wrapper, hashLink, blockLink, blockchainLink;
        return tslib_1.__generator(this, function (_a) {
            wrapper = enzyme_1.mount(React.createElement(react_router_1.MemoryRouter, { initialEntries: ['/blockchain'], initialIndex: 0 },
                React.createElement(react_router_1.Route, { render: function (props) { return React.createElement(Header_1.Header, tslib_1.__assign({}, props)); } })));
            hashLink = wrapper.find('.hash-link');
            assert.equal(hashLink.parent().at(0).hasClass('active'), false);
            blockLink = wrapper.find('.block-link');
            assert.equal(blockLink.parent().at(0).hasClass('active'), false);
            blockchainLink = wrapper.find('.blockchain-link');
            assert.equal(blockchainLink.parent().at(0).hasClass('active'), true);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIZWFkZXIudGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQTJERzs7O0FBM0RILCtCQUFpQztBQUNqQyw2QkFBK0I7QUFDL0IsNkNBQW1EO0FBQ25ELGlDQUErQjtBQUUvQixtQ0FBa0M7QUFFbEMsUUFBUSxDQUFDLFFBQVEsRUFBRTtJQUNmLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRTs7O1lBQy9CLE9BQU8sR0FBRyxjQUFLLENBQ2pCLG9CQUFDLDJCQUFZLElBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUM7Z0JBQ2hELG9CQUFDLG9CQUFLLElBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsb0JBQUMsZUFBTSx1QkFBSyxLQUFLLEVBQUksRUFBckIsQ0FBcUIsR0FBSSxDQUN4QyxDQUNsQixDQUFDO1lBRUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV6RCxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTNELGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FB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