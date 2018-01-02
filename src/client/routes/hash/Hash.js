"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('./Hash.css');
var React = require("react");
var Header_1 = require("../../components/header/Header");
var Hash = /** @class */ (function (_super) {
    tslib_1.__extends(Hash, _super);
    function Hash(props) {
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
    Hash.prototype.componentDidMount = function () {
        document.title = 'Hash | Blockchain Demo';
        this.focusTextarea();
    };
    Hash.prototype.render = function () {
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
    return Hash;
}(React.Component));
exports.Hash = Hash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV0Qiw2QkFBK0I7QUFJL0IseURBQXdEO0FBV3hEO0lBQTBCLGdDQUFxQztJQUczRCxjQUFtQixLQUFLO1FBQXhCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFPTSxtQkFBYSxHQUFHO1lBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBb0NNLHNCQUFnQixHQUFHLFVBQUMsQ0FBOEI7WUFDdEQsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDO1FBckRFLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQU8sRUFBRTtZQUNiLFNBQVMsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQzNDLENBQUM7O0lBQ04sQ0FBQztJQUVNLGdDQUFpQixHQUF4QjtRQUNJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFNTSxxQkFBTSxHQUFiO1FBQUEsaUJBZ0NDO1FBL0JHLE1BQU0sQ0FBQyxDQUNIO1lBQ0ksb0JBQUMsZUFBTSx1QkFBSyxJQUFJLENBQUMsS0FBSyxFQUFJO1lBRTFCLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7Z0JBQ2pDLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUNoQiw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCO3dCQUNyQyw2QkFBSyxTQUFTLEVBQUMsTUFBTTs0QkFDakIsNkJBQUssU0FBUyxFQUFDLGFBQWE7Z0NBQ3hCLDhDQUFvQixDQUNsQjs0QkFDTiw2QkFBSyxTQUFTLEVBQUMsV0FBVztnQ0FDdEIsNkJBQUssU0FBUyxFQUFDLFlBQVk7b0NBQ3ZCLDBDQUFtQjtvQ0FDbkIsa0NBQVUsU0FBUyxFQUFDLHlCQUF5QixFQUNuQyxHQUFHLEVBQUUsVUFBQyxLQUFLLElBQU8sS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQzFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUNqQztnQ0FDTiw2QkFBSyxTQUFTLEVBQUMsWUFBWTtvQ0FDdkIsMENBQW1CO29DQUNuQiwrQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyx5QkFBeUIsRUFDL0MsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsU0FBRSxDQUM1QyxDQUNKLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNULENBQUM7SUFDTixDQUFDO0lBT0wsV0FBQztBQUFELENBQUMsQUEzREQsQ0FBMEIsS0FBSyxDQUFDLFNBQVMsR0EyRHhDO0FBM0RZLG9CQUFJIn0=