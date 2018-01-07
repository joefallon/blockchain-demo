"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var enzyme_1 = require("enzyme");
var React = require("react");
var react_router_1 = require("react-router");
var BlockchainRoute_1 = require("./BlockchainRoute");
describe('BlockchainRoute', function () {
    afterEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            document.title = '';
            return [2 /*return*/];
        });
    }); });
    function renderRoute(props) {
        return (React.createElement(BlockchainRoute_1.BlockchainRoute, tslib_1.__assign({}, props)));
    }
    it('initializes correctly', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var wrapper, blockComponent;
        return tslib_1.__generator(this, function (_a) {
            wrapper = enzyme_1.mount(React.createElement(react_router_1.MemoryRouter, { initialEntries: ['/'], initialIndex: 0 },
                React.createElement(react_router_1.Route, { render: function (props) { return renderRoute(props); } })));
            assert.equal(document.title, 'Blockchain | Blockchain Demo');
            blockComponent = wrapper.find('.block-component');
            assert.equal(blockComponent.length, 0);
            return [2 /*return*/];
        });
    }); });
    it('pressing the Add Block button adds a block', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var wrapper, button, blockComponent;
        return tslib_1.__generator(this, function (_a) {
            wrapper = enzyme_1.mount(React.createElement(react_router_1.MemoryRouter, { initialEntries: ['/'], initialIndex: 0 },
                React.createElement(react_router_1.Route, { render: function (props) { return renderRoute(props); } })));
            button = wrapper.find('input[name="add-block-button"]');
            button.simulate('click');
            blockComponent = wrapper.find('.block-component');
            assert.equal(blockComponent.length, 1);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tjaGFpblJvdXRlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbG9ja2NoYWluUm91dGUudGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQTBDRzs7O0FBMUNILCtCQUFpQztBQUNqQyxpQ0FBK0I7QUFDL0IsNkJBQStCO0FBQy9CLDZDQUFtRDtBQUVuRCxxREFBMEU7QUFFMUUsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBQ3hCLFNBQVMsQ0FBQzs7WUFDTixRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7O1NBQ3ZCLENBQUMsQ0FBQztJQUVILHFCQUFxQixLQUEyQjtRQUM1QyxNQUFNLENBQUMsQ0FBQyxvQkFBQyxpQ0FBZSx1QkFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxFQUFFLENBQUMsdUJBQXVCLEVBQUU7OztZQUNsQixPQUFPLEdBQUcsY0FBSyxDQUNqQixvQkFBQywyQkFBWSxJQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDO2dCQUNoRCxvQkFBQyxvQkFBSyxJQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsR0FBRyxDQUNwQyxDQUNsQixDQUFDO1lBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLDhCQUE4QixDQUFDLENBQUM7WUFFdkQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztTQUMxQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUU7OztZQUN2QyxPQUFPLEdBQUcsY0FBSyxDQUNqQixvQkFBQywyQkFBWSxJQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDO2dCQUNoRCxvQkFBQyxvQkFBSyxJQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsR0FBRyxDQUNwQyxDQUNsQixDQUFDO1lBRUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5CLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7U0FDMUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==