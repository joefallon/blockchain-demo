"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var enzyme_1 = require("enzyme");
var React = require("react");
var react_router_1 = require("react-router");
var BlockRoute_1 = require("./BlockRoute");
var BlockModel_1 = require("../../models/BlockModel");
describe('BlockRoute', function () {
    afterEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            document.title = '';
            return [2 /*return*/];
        });
    }); });
    function renderHash(props) {
        props.model = new BlockModel_1.BlockModel();
        return (React.createElement(BlockRoute_1.BlockRoute, tslib_1.__assign({}, props)));
    }
    it('initializes correctly', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var wrapper, seqIdInput, nonceInput, textarea, hashInput, hashStatus;
        return tslib_1.__generator(this, function (_a) {
            wrapper = enzyme_1.mount(React.createElement(react_router_1.MemoryRouter, { initialEntries: ['/'], initialIndex: 0 },
                React.createElement(react_router_1.Route, { render: function (props) { return renderHash(props); } })));
            assert.equal(document.title, 'Block | Blockchain Demo');
            seqIdInput = wrapper.find('input[name="sequence-id"]');
            assert.equal(seqIdInput.prop('value'), 1);
            nonceInput = wrapper.find('input[name="nonce"]');
            assert.equal(nonceInput.prop('value'), 0);
            textarea = wrapper.find('textarea[name="data-input"]');
            assert.equal(textarea.prop('value'), '');
            hashInput = wrapper.find('input[name="hash-value"]');
            assert.equal(hashInput.prop('value'), '');
            hashStatus = wrapper.find('.status-value');
            assert.equal(hashStatus.text(), 'INVALID');
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tSb3V0ZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmxvY2tSb3V0ZS50ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBMkNHOzs7QUEzQ0gsK0JBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQiw2QkFBK0I7QUFDL0IsNkNBQW1EO0FBRW5ELDJDQUEyRDtBQUMzRCxzREFBcUQ7QUFFckQsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUNuQixTQUFTLENBQUM7O1lBQ04sUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7OztTQUN2QixDQUFDLENBQUM7SUFFSCxvQkFBb0IsS0FBc0I7UUFDdEMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsQ0FBQyxvQkFBQyx1QkFBVSx1QkFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxFQUFFLENBQUMsdUJBQXVCLEVBQUU7OztZQUNsQixPQUFPLEdBQUcsY0FBSyxDQUNqQixvQkFBQywyQkFBWSxJQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDO2dCQUNoRCxvQkFBQyxvQkFBSyxJQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsR0FBRyxDQUNuQyxDQUNsQixDQUFDO1lBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLHlCQUF5QixDQUFDLENBQUM7WUFFbEQsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFcEMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFcEMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFbkMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUMzRCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFcEMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7OztTQUM5QyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyJ9