"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('../../static/styles/vendor/bootstrap.custom.css');
require('./App.css');
var React = require("react");
var react_router_1 = require("react-router");
var BlockRoute_1 = require("./routes/block/BlockRoute");
var BlockchainRoute_1 = require("./routes/blockchain/BlockchainRoute");
var BlockModelFactory_1 = require("./models/BlockModelFactory");
var HashRoute_1 = require("./routes/hash/HashRoute");
var HashModelFactory_1 = require("./models/HashModelFactory");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderHashRoute = function (props) {
            props.model = HashModelFactory_1.HashModelFactory.create();
            return (React.createElement(HashRoute_1.HashRoute, tslib_1.__assign({}, props)));
        };
        _this.renderBlockRoute = function (props) {
            props.model = BlockModelFactory_1.BlockModelFactory.create();
            return (React.createElement(BlockRoute_1.BlockRoute, tslib_1.__assign({}, props)));
        };
        _this.renderBlockchainRoute = function (props) {
            return (React.createElement(BlockchainRoute_1.BlockchainRoute, tslib_1.__assign({}, props)));
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_router_1.Switch, null,
            React.createElement(react_router_1.Route, { exact: true, path: '/', render: function (props) { return _this.renderHashRoute(props); } }),
            React.createElement(react_router_1.Route, { exact: true, path: '/block', render: function (props) { return _this.renderBlockRoute(props); } }),
            React.createElement(react_router_1.Route, { exact: true, path: '/blockchain', render: function (props) { return _this.renderBlockchainRoute(props); } }),
            React.createElement(react_router_1.Route, { render: function () { return React.createElement("div", null, "404 Not found"); } })));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLENBQUMsaURBQWlELENBQUMsQ0FBQztBQUMzRCxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckIsNkJBQStCO0FBQy9CLDZDQUE2QztBQUU3Qyx3REFBd0U7QUFDeEUsdUVBQXNFO0FBQ3RFLGdFQUErRDtBQUMvRCxxREFBb0U7QUFDcEUsOERBQTZEO0FBRTdEO0lBQXlCLCtCQUFlO0lBQXhDO1FBQUEscUVBMkJDO1FBZFcscUJBQWUsR0FBRyxVQUFDLEtBQXFCO1lBQzVDLEtBQUssQ0FBQyxLQUFLLEdBQUcsbUNBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEMsTUFBTSxDQUFDLENBQUMsb0JBQUMscUJBQVMsdUJBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFFTSxzQkFBZ0IsR0FBRyxVQUFDLEtBQXNCO1lBQzlDLEtBQUssQ0FBQyxLQUFLLEdBQUcscUNBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsTUFBTSxDQUFDLENBQUMsb0JBQUMsdUJBQVUsdUJBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUM7UUFFTSwyQkFBcUIsR0FBRyxVQUFDLEtBQUs7WUFFbEMsTUFBTSxDQUFDLENBQUMsb0JBQUMsaUNBQWUsdUJBQUssS0FBSyxFQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7O0lBQ04sQ0FBQztJQXpCVSxvQkFBTSxHQUFiO1FBQUEsaUJBU0M7UUFSRyxNQUFNLENBQUMsQ0FDSCxvQkFBQyxxQkFBTTtZQUNILG9CQUFDLG9CQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxHQUFHLEVBQVcsTUFBTSxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsR0FBSTtZQUNsRixvQkFBQyxvQkFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFNLE1BQU0sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsR0FBSTtZQUNuRixvQkFBQyxvQkFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsR0FBSTtZQUN4RixvQkFBQyxvQkFBSyxJQUFDLE1BQU0sRUFBRSxjQUFNLE9BQUEsaURBQXdCLEVBQXhCLENBQXdCLEdBQUcsQ0FDM0MsQ0FDWixDQUFDO0lBQ04sQ0FBQztJQWdCTCxVQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUF5QixLQUFLLENBQUMsU0FBUyxHQTJCdkM7QUEzQlksa0JBQUcifQ==