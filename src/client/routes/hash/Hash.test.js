"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var enzyme_1 = require("enzyme");
var React = require("react");
var react_router_1 = require("react-router");
var Hash_1 = require("./Hash");
var HashModel_1 = require("../../models/HashModel");
describe('Hash', function () {
    afterEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            document.title = '';
            return [2 /*return*/];
        });
    }); });
    it('initializes correctly', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var wrapper;
        return tslib_1.__generator(this, function (_a) {
            wrapper = enzyme_1.mount(React.createElement(react_router_1.MemoryRouter, { initialEntries: ['/'], initialIndex: 0 },
                React.createElement(react_router_1.Route, { render: function (props) { return renderHash(props); } })));
            assert.equal(document.title, 'Hash | Blockchain Demo');
            return [2 /*return*/];
        });
    }); });
    function renderHash(props) {
        props.model = new HashModel_1.HashModel();
        return (React.createElement(Hash_1.Hash, tslib_1.__assign({}, props)));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGFzaC50ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBMkJHOzs7QUEzQkgsK0JBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQiw2QkFBK0I7QUFDL0IsNkNBQW1EO0FBRW5ELCtCQUF5QztBQUN6QyxvREFBbUQ7QUFFbkQsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUNiLFNBQVMsQ0FBQzs7WUFDTixRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7O1NBQ3ZCLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTs7O1lBQ2xCLE9BQU8sR0FBRyxjQUFLLENBQ2pCLG9CQUFDLDJCQUFZLElBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUM7Z0JBQ2hELG9CQUFDLG9CQUFLLElBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixHQUFHLENBQ25DLENBQ2xCLENBQUM7WUFFRixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzs7O1NBQzFELENBQUMsQ0FBQztJQUVILG9CQUFvQixLQUFnQjtRQUNoQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLG9CQUFDLFdBQUksdUJBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==