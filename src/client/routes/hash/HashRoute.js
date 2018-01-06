"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('./HashRoute.css');
var React = require("react");
var Header_1 = require("../../components/header/Header");
var HashRoute = /** @class */ (function (_super) {
    tslib_1.__extends(HashRoute, _super);
    function HashRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.focusTextarea = function () {
            _this.textarea.focus();
        };
        _this.handleDataChange = function (e) {
            var data = e.target['value'];
            var hash = _this.props.model.hashData(data);
            _this.setState({ hashValue: hash, data: data });
        };
        _this.state = {
            data: '',
            hashValue: _this.props.model.hashData('')
        };
        return _this;
    }
    HashRoute.prototype.componentDidMount = function () {
        document.title = 'Hash | Blockchain Demo';
        this.focusTextarea();
    };
    HashRoute.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, tslib_1.__assign({}, this.props)),
            React.createElement("div", { className: 'container hash-route' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-md-8 col-md-offset-2' },
                        React.createElement("div", { className: 'card' },
                            React.createElement("div", { className: 'card-header' },
                                React.createElement("h3", null, "sha256 Hash")),
                            React.createElement("div", { className: 'card-main' },
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Data"),
                                    React.createElement("textarea", { className: 'form-control data-input', ref: function (input) { _this.textarea = input; }, onChange: this.handleDataChange, value: this.state.data })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Hash"),
                                    React.createElement("input", { type: "text", className: 'form-control hash-value', value: this.state.hashValue, disabled: true })))))))));
    };
    return HashRoute;
}(React.Component));
exports.HashRoute = HashRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaFJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGFzaFJvdXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUzQiw2QkFBK0I7QUFLL0IseURBQXdEO0FBV3hEO0lBQStCLHFDQUErQztJQUcxRSxtQkFBbUIsS0FBSztRQUF4QixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUtmO1FBT00sbUJBQWEsR0FBRztZQUNuQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQW9DTSxzQkFBZ0IsR0FBRyxVQUFDLENBQThCO1lBQ3RELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQztRQXJERSxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFPLEVBQUU7WUFDYixTQUFTLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUMzQyxDQUFDOztJQUNOLENBQUM7SUFFTSxxQ0FBaUIsR0FBeEI7UUFDSSxRQUFRLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBTU0sMEJBQU0sR0FBYjtRQUFBLGlCQWdDQztRQS9CRyxNQUFNLENBQUMsQ0FDSDtZQUNJLG9CQUFDLGVBQU0sdUJBQUssSUFBSSxDQUFDLEtBQUssRUFBSTtZQUUxQiw2QkFBSyxTQUFTLEVBQUMsc0JBQXNCO2dCQUNqQyw2QkFBSyxTQUFTLEVBQUMsS0FBSztvQkFDaEIsNkJBQUssU0FBUyxFQUFDLDBCQUEwQjt3QkFDckMsNkJBQUssU0FBUyxFQUFDLE1BQU07NEJBQ2pCLDZCQUFLLFNBQVMsRUFBQyxhQUFhO2dDQUN4Qiw4Q0FBb0IsQ0FDbEI7NEJBQ04sNkJBQUssU0FBUyxFQUFDLFdBQVc7Z0NBQ3RCLDZCQUFLLFNBQVMsRUFBQyxZQUFZO29DQUN2QiwwQ0FBbUI7b0NBQ25CLGtDQUFVLFNBQVMsRUFBQyx5QkFBeUIsRUFDbkMsR0FBRyxFQUFFLFVBQUMsS0FBSyxJQUFPLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FDakM7Z0NBQ04sNkJBQUssU0FBUyxFQUFDLFlBQVk7b0NBQ3ZCLDBDQUFtQjtvQ0FDbkIsK0JBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMseUJBQXlCLEVBQy9DLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLFNBQUUsQ0FDNUMsQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQU9MLGdCQUFDO0FBQUQsQ0FBQyxBQTNERCxDQUErQixLQUFLLENBQUMsU0FBUyxHQTJEN0M7QUEzRFksOEJBQVMifQ==