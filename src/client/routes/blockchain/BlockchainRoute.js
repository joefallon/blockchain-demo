"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('./BlockchainRoute.css');
var React = require("react");
var Header_1 = require("../../components/header/Header");
var BlockchainRoute = /** @class */ (function (_super) {
    tslib_1.__extends(BlockchainRoute, _super);
    function BlockchainRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    BlockchainRoute.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, tslib_1.__assign({}, this.props)),
            React.createElement("div", { className: 'container blockchain-route' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-md-8 col-md-offset-2' },
                        React.createElement("div", { className: 'card' },
                            React.createElement("div", { className: 'card-header' },
                                React.createElement("h3", null, "Block 1")),
                            React.createElement("div", { className: 'card-main' },
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Sequence ID"),
                                    React.createElement("input", { type: 'text', className: 'form-control sequence-id', disabled: true })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Nonce"),
                                    React.createElement("input", { type: 'text', className: 'form-control nonce', disabled: true })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Data"),
                                    React.createElement("textarea", { className: 'form-control data-input' })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Previous Hash"),
                                    React.createElement("input", { type: "text", className: 'form-control prevhash-value', disabled: true })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Hash"),
                                    React.createElement("input", { type: "text", className: 'form-control hash-value', disabled: true }))),
                            React.createElement("div", { className: 'card-actions text-center' },
                                React.createElement("div", { className: 'row' },
                                    React.createElement("div", { className: 'col-md-8' },
                                        React.createElement("div", { className: 'status-label' },
                                            "Status: ",
                                            React.createElement("span", { className: 'status-value' }, "INVALID"))),
                                    React.createElement("div", { className: 'col-md-2' },
                                        React.createElement("input", { type: "button", className: "btn btn-primary", value: "Mine" })),
                                    React.createElement("div", { className: 'col-md-2' }, "Right")))))),
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-md-8 col-md-offset-2' },
                        React.createElement("div", { className: 'card' },
                            React.createElement("div", { className: 'card-header' },
                                React.createElement("h3", null, "Block 2")),
                            React.createElement("div", { className: 'card-main' },
                                React.createElement("div", { className: 'form-group' })),
                            React.createElement("div", { className: 'card-actions' })))),
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-md-8 col-md-offset-2 text-right' },
                        React.createElement("div", { className: 'add-block' },
                            React.createElement("input", { type: "button", className: "btn btn-primary", value: "Add Block" })))))));
    };
    return BlockchainRoute;
}(React.Component));
exports.BlockchainRoute = BlockchainRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tjaGFpblJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmxvY2tjaGFpblJvdXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUVqQyw2QkFBK0I7QUFHL0IseURBQXdEO0FBTXhEO0lBQXFDLDJDQUEyRDtJQUU1Rix5QkFBbUIsS0FBMkI7UUFBOUMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FFZjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztJQUNwQixDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxDQUNIO1lBQ0ksb0JBQUMsZUFBTSx1QkFBSyxJQUFJLENBQUMsS0FBSyxFQUFJO1lBRTFCLDZCQUFLLFNBQVMsRUFBQyw0QkFBNEI7Z0JBQ3ZDLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUNoQiw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCO3dCQUNyQyw2QkFBSyxTQUFTLEVBQUMsTUFBTTs0QkFDakIsNkJBQUssU0FBUyxFQUFDLGFBQWE7Z0NBQ3hCLDBDQUFnQixDQUNkOzRCQUNOLDZCQUFLLFNBQVMsRUFBQyxXQUFXO2dDQUN0Qiw2QkFBSyxTQUFTLEVBQUMsWUFBWTtvQ0FDdkIsaURBQTBCO29DQUMxQiwrQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQywwQkFBMEIsRUFBQyxRQUFRLFNBQUUsQ0FDaEU7Z0NBQ04sNkJBQUssU0FBUyxFQUFDLFlBQVk7b0NBQ3ZCLDJDQUFvQjtvQ0FDcEIsK0JBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsb0JBQW9CLEVBQUMsUUFBUSxTQUFFLENBQzFEO2dDQUNOLDZCQUFLLFNBQVMsRUFBQyxZQUFZO29DQUN2QiwwQ0FBbUI7b0NBQ25CLGtDQUFVLFNBQVMsRUFBQyx5QkFBeUIsR0FBRSxDQUM3QztnQ0FDTiw2QkFBSyxTQUFTLEVBQUMsWUFBWTtvQ0FDdkIsbURBQTRCO29DQUM1QiwrQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyw2QkFBNkIsRUFBQyxRQUFRLFNBQUUsQ0FDbkU7Z0NBQ04sNkJBQUssU0FBUyxFQUFDLFlBQVk7b0NBQ3ZCLDBDQUFtQjtvQ0FDbkIsK0JBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMseUJBQXlCLEVBQUMsUUFBUSxTQUFFLENBQy9ELENBQ0o7NEJBQ04sNkJBQUssU0FBUyxFQUFDLDBCQUEwQjtnQ0FDckMsNkJBQUssU0FBUyxFQUFDLEtBQUs7b0NBQ2hCLDZCQUFLLFNBQVMsRUFBQyxVQUFVO3dDQUNyQiw2QkFBSyxTQUFTLEVBQUMsY0FBYzs7NENBQ2pCLDhCQUFNLFNBQVMsRUFBQyxjQUFjLGNBQWUsQ0FDbkQsQ0FDSjtvQ0FDTiw2QkFBSyxTQUFTLEVBQUMsVUFBVTt3Q0FDckIsK0JBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsS0FBSyxFQUFDLE1BQU0sR0FBRSxDQUM3RDtvQ0FDTiw2QkFBSyxTQUFTLEVBQUMsVUFBVSxZQUVuQixDQUNKLENBQ0osQ0FDSixDQUNKLENBQ0o7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBQ2hCLDZCQUFLLFNBQVMsRUFBQywwQkFBMEI7d0JBQ3JDLDZCQUFLLFNBQVMsRUFBQyxNQUFNOzRCQUNqQiw2QkFBSyxTQUFTLEVBQUMsYUFBYTtnQ0FDeEIsMENBQWdCLENBQ2Q7NEJBQ04sNkJBQUssU0FBUyxFQUFDLFdBQVc7Z0NBQ3RCLDZCQUFLLFNBQVMsRUFBQyxZQUFZLEdBRXJCLENBQ0o7NEJBQ04sNkJBQUssU0FBUyxFQUFDLGNBQWMsR0FFdkIsQ0FDSixDQUNKLENBQ0o7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBQ2hCLDZCQUFLLFNBQVMsRUFBQyxxQ0FBcUM7d0JBQ2hELDZCQUFLLFNBQVMsRUFBQyxXQUFXOzRCQUN0QiwrQkFBTyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUMsV0FBVyxHQUFFLENBQ2xFLENBQ0osQ0FDSixDQUVKLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQTFGRCxDQUFxQyxLQUFLLENBQUMsU0FBUyxHQTBGbkQ7QUExRlksMENBQWUifQ==