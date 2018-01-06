"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var enzyme_1 = require("enzyme");
var React = require("react");
var react_router_1 = require("react-router");
var HashRoute_1 = require("./HashRoute");
var HashModel_1 = require("../../models/HashModel");
describe('HashRoute', function () {
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
        return (React.createElement(HashRoute_1.HashRoute, tslib_1.__assign({}, props)));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaFJvdXRlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIYXNoUm91dGUudGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQTJCRzs7O0FBM0JILCtCQUFpQztBQUNqQyxpQ0FBK0I7QUFDL0IsNkJBQStCO0FBQy9CLDZDQUFtRDtBQUVuRCx5Q0FBd0Q7QUFDeEQsb0RBQW1EO0FBRW5ELFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDbEIsU0FBUyxDQUFDOztZQUNOLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOzs7U0FDdkIsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFOzs7WUFDbEIsT0FBTyxHQUFHLGNBQUssQ0FDakIsb0JBQUMsMkJBQVksSUFBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQztnQkFDaEQsb0JBQUMsb0JBQUssSUFBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLEdBQUcsQ0FDbkMsQ0FDbEIsQ0FBQztZQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxDQUFDOzs7U0FDMUQsQ0FBQyxDQUFDO0lBRUgsb0JBQW9CLEtBQXFCO1FBQ3JDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsb0JBQUMscUJBQVMsdUJBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==