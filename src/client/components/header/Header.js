"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('./Header.css');
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.hashHeaderLinkClasses = function () {
            if (_this.state.isHashLinkActive) {
                return 'col-md-1 header-link active';
            }
            else {
                return 'col-md-1 header-link';
            }
        };
        _this.blockHeaderLinkClasses = function () {
            if (_this.state.isBlockLinkActive) {
                return 'col-md-1 header-link active';
            }
            else {
                return 'col-md-1 header-link';
            }
        };
        _this.blockchainHeaderLinkClasses = function () {
            if (_this.state.isBlockchainLinkActive) {
                return 'col-md-1 header-link active';
            }
            else {
                return 'col-md-1 header-link';
            }
        };
        _this.state = {
            isHashLinkActive: (props.location.pathname == '/'),
            isBlockLinkActive: (props.location.pathname == '/block'),
            isBlockchainLinkActive: (props.location.pathname == '/blockchain')
        };
        return _this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { className: 'container-fluid' },
            React.createElement("div", { className: 'row header' },
                React.createElement("div", { className: 'col-md-offset-1 col-md-5' },
                    React.createElement("h1", null, "Blockchain Demo")),
                React.createElement("div", { className: this.hashHeaderLinkClasses() },
                    React.createElement(react_router_dom_1.Link, { to: '/', className: 'hash-link' }, "Hash")),
                React.createElement("div", { className: this.blockHeaderLinkClasses() },
                    React.createElement(react_router_dom_1.Link, { to: '/block', className: 'block-link' }, "Block")),
                React.createElement("div", { className: this.blockchainHeaderLinkClasses() },
                    React.createElement(react_router_dom_1.Link, { to: '/blockchain', className: 'blockchain-link' }, "Blockchain")))));
    };
    return Header;
}(React.Component));
exports.Header = Header;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFeEIsNkJBQStCO0FBRS9CLHFEQUF3QztBQVV4QztJQUE0QixrQ0FBeUM7SUFFakUsZ0JBQW1CLEtBQWtCO1FBQXJDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBTWY7UUFFTywyQkFBcUIsR0FBRztZQUM1QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLDZCQUE2QixDQUFDO1lBQ3pDLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixNQUFNLENBQUMsc0JBQXNCLENBQUM7WUFDbEMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVNLDRCQUFzQixHQUFHO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsNkJBQTZCLENBQUM7WUFDekMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRU0saUNBQTJCLEdBQUc7WUFDbEMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1lBQ2xDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFoQ0UsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULGdCQUFnQixFQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO1lBQ3hELGlCQUFpQixFQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO1lBQzdELHNCQUFzQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDO1NBQ3JFLENBQUM7O0lBQ04sQ0FBQztJQTZCTSx1QkFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLENBQ0gsNkJBQUssU0FBUyxFQUFDLGlCQUFpQjtZQUM1Qiw2QkFBSyxTQUFTLEVBQUMsWUFBWTtnQkFDdkIsNkJBQUssU0FBUyxFQUFDLDBCQUEwQjtvQkFDckMsa0RBQXdCLENBQ3RCO2dCQUNOLDZCQUFLLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBQ3hDLG9CQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUMsV0FBVyxXQUFZLENBQzVDO2dCQUNOLDZCQUFLLFNBQVMsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7b0JBQ3pDLG9CQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsWUFBWSxZQUFhLENBQ25EO2dCQUNOLDZCQUFLLFNBQVMsRUFBRSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7b0JBQzlDLG9CQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLGlCQUFrQixDQUNsRSxDQUNKLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBMURELENBQTRCLEtBQUssQ0FBQyxTQUFTLEdBMEQxQztBQTFEWSx3QkFBTSJ9