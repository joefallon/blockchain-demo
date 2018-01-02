"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('../../static/styles/vendor/bootstrap.custom.css');
require('./App.css');
var React = require("react");
var react_router_1 = require("react-router");
var Block_1 = require("./routes/block/Block");
var Blockchain_1 = require("./routes/blockchain/Blockchain");
var BlockModelFactory_1 = require("./models/BlockModelFactory");
var Hash_1 = require("./routes/hash/Hash");
var HashModelFactory_1 = require("./models/HashModelFactory");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderHashRoute = function (props) {
            props.model = HashModelFactory_1.HashModelFactory.create();
            return (React.createElement(Hash_1.Hash, tslib_1.__assign({}, props)));
        };
        _this.renderBlockRoute = function (props) {
            props.model = BlockModelFactory_1.BlockModelFactory.create();
            return (React.createElement(Block_1.Block, tslib_1.__assign({}, props)));
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_router_1.Switch, null,
            React.createElement(react_router_1.Route, { exact: true, path: '/', render: function (props) { return _this.renderHashRoute(props); } }),
            React.createElement(react_router_1.Route, { exact: true, path: '/block', render: function (props) { return _this.renderBlockRoute(props); } }),
            React.createElement(react_router_1.Route, { exact: true, path: '/blockchain', render: function (props) { return React.createElement(Blockchain_1.Blockchain, tslib_1.__assign({}, props)); } }),
            React.createElement(react_router_1.Route, { render: function () { return React.createElement("div", null, "404 Not found"); } })));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLENBQUMsaURBQWlELENBQUMsQ0FBQztBQUMzRCxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsNkJBQStCO0FBQy9CLDZDQUE2QztBQUU3Qyw4Q0FBeUQ7QUFDekQsNkRBQTREO0FBQzVELGdFQUErRDtBQUMvRCwyQ0FBcUQ7QUFDckQsOERBQTZEO0FBRTdEO0lBQXlCLCtCQUFlO0lBQXhDO1FBQUEscUVBc0JDO1FBVFcscUJBQWUsR0FBRyxVQUFDLEtBQWdCO1lBQ3ZDLEtBQUssQ0FBQyxLQUFLLEdBQUcsbUNBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEMsTUFBTSxDQUFDLENBQUMsb0JBQUMsV0FBSSx1QkFBSyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztRQUVNLHNCQUFnQixHQUFHLFVBQUMsS0FBaUI7WUFDekMsS0FBSyxDQUFDLEtBQUssR0FBRyxxQ0FBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsQ0FBQyxvQkFBQyxhQUFLLHVCQUFLLEtBQUssRUFBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDOztJQUNOLENBQUM7SUFwQlUsb0JBQU0sR0FBYjtRQUFBLGlCQVNDO1FBUkcsTUFBTSxDQUFDLENBQ0gsb0JBQUMscUJBQU07WUFDSCxvQkFBQyxvQkFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFXLE1BQU0sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLEdBQUk7WUFDbEYsb0JBQUMsb0JBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLFFBQVEsRUFBTSxNQUFNLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLEdBQUk7WUFDbkYsb0JBQUMsb0JBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxvQkFBQyx1QkFBVSx1QkFBSyxLQUFLLEVBQUcsRUFBeEIsQ0FBd0IsR0FBSTtZQUMvRSxvQkFBQyxvQkFBSyxJQUFDLE1BQU0sRUFBRSxjQUFNLE9BQUEsaURBQXdCLEVBQXhCLENBQXdCLEdBQUcsQ0FDM0MsQ0FDWixDQUFDO0lBQ04sQ0FBQztJQVdMLFVBQUM7QUFBRCxDQUFDLEFBdEJELENBQXlCLEtBQUssQ0FBQyxTQUFTLEdBc0J2QztBQXRCWSxrQkFBRyJ9