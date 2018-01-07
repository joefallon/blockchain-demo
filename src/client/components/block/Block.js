"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var NonceFinder_1 = require("../../domain/NonceFinder");
var NonceFinderWorker = require("worker-loader!../../domain/NonceFinder.worker.ts");
var Block = /** @class */ (function (_super) {
    tslib_1.__extends(Block, _super);
    function Block(props) {
        var _this = _super.call(this, props) || this;
        _this.getStatus = function () {
            var nonceFinder = new NonceFinder_1.NonceFinder(Block.DIFFICULTY, _this.props.sequenceId, _this.props.data, _this.props.prevHash);
            var isMatch = nonceFinder.isHashMatch(_this.props.nonce);
            return isMatch ? "VALID" : "INVALID";
        };
        _this.handleDataChange = function (ev) {
            var sequenceId = _this.props.sequenceId;
            _this.props.onDataInputChange(sequenceId, ev.target['value']);
        };
        _this.handleMineButtonClick = function () {
            var worker = _this._worker;
            var msg = {
                sequenceId: _this.props.sequenceId,
                data: _this.props.data,
                difficulty: Block.DIFFICULTY,
                offset: 0,
                workerId: 1,
                prevHash: _this.props.prevHash
            };
            worker.onmessage = function (message) {
                console.log('message received from worker1...');
                console.log(message);
                var nonce = JSON.parse(message.data);
                _this.props.onNonceUpdate(_this.props.sequenceId, nonce);
            };
            console.log('sending msg to worker1...');
            console.log(msg);
            worker.postMessage(JSON.stringify(msg));
        };
        _this.state = {};
        _this._worker = new NonceFinderWorker();
        return _this;
    }
    Block.prototype.render = function () {
        return (React.createElement("div", { className: 'card block-component' },
            React.createElement("div", { className: 'card-header' },
                React.createElement("h3", null,
                    "Block ",
                    this.props.sequenceId)),
            React.createElement("div", { className: 'card-main' },
                React.createElement("div", { className: 'form-group' },
                    React.createElement("label", null, "Sequence ID"),
                    React.createElement("input", { type: 'text', className: 'form-control sequence-id', name: "sequence-id", value: this.props.sequenceId, disabled: true })),
                React.createElement("div", { className: 'form-group' },
                    React.createElement("label", null, "Nonce"),
                    React.createElement("input", { type: 'text', className: 'form-control nonce', name: "nonce", value: this.props.nonce, disabled: true })),
                React.createElement("div", { className: 'form-group' },
                    React.createElement("label", null, "Data"),
                    React.createElement("textarea", { className: 'form-control data-input', name: "data-input", value: this.props.data, onChange: this.handleDataChange })),
                React.createElement("div", { className: 'form-group' },
                    React.createElement("label", null, "Previous Hash"),
                    React.createElement("input", { type: "text", className: 'form-control prevhash-value', name: "prevhash-value", value: this.props.prevHash, disabled: true })),
                React.createElement("div", { className: 'form-group' },
                    React.createElement("label", null, "Hash"),
                    React.createElement("input", { type: "text", className: 'form-control hash-value', name: "hash-value", value: this.props.hash, disabled: true }))),
            React.createElement("div", { className: 'card-actions text-center' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-md-8' },
                        React.createElement("div", { className: 'status-label' },
                            "Status: ",
                            React.createElement("span", { className: 'status-value' }, this.getStatus()))),
                    React.createElement("div", { className: 'col-md-2' },
                        React.createElement("input", { type: "button", className: "btn btn-primary", name: "mine-button", value: "Mine", onClick: this.handleMineButtonClick })),
                    React.createElement("div", { className: 'col-md-2' }, "Right")))));
    };
    Block.DIFFICULTY = 4;
    return Block;
}(React.Component));
exports.Block = Block;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbG9jay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQStCO0FBRS9CLHdEQUF1RDtBQUV2RCxvRkFBdUY7QUFldkY7SUFBMkIsaUNBQXVDO0lBSzlELGVBQW1CLEtBQWlCO1FBQXBDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFFTyxlQUFTLEdBQUc7WUFDaEIsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3hGLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pDLENBQUMsQ0FBQztRQTRETSxzQkFBZ0IsR0FBRyxVQUFDLEVBQStCO1lBQ3ZELElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUM7UUFFTSwyQkFBcUIsR0FBRztZQUM1QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO1lBRTVCLElBQU0sR0FBRyxHQUFHO2dCQUNSLFVBQVUsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7Z0JBQ2pDLElBQUksRUFBUSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQzNCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtnQkFDNUIsTUFBTSxFQUFNLENBQUM7Z0JBQ2IsUUFBUSxFQUFJLENBQUM7Z0JBQ2IsUUFBUSxFQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTthQUNsQyxDQUFDO1lBRUYsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFDLE9BQXFCO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUM7WUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUM7UUFuR0UsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUVaLENBQUM7UUFDRixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQzs7SUFDM0MsQ0FBQztJQVVNLHNCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsQ0FDSCw2QkFBSyxTQUFTLEVBQUMsc0JBQXNCO1lBQ2pDLDZCQUFLLFNBQVMsRUFBQyxhQUFhO2dCQUN4Qjs7b0JBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQU0sQ0FDcEM7WUFDTiw2QkFBSyxTQUFTLEVBQUMsV0FBVztnQkFDdEIsNkJBQUssU0FBUyxFQUFDLFlBQVk7b0JBQ3ZCLGlEQUEwQjtvQkFDMUIsK0JBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsMEJBQTBCLEVBQ2hELElBQUksRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsU0FBRSxDQUNoRTtnQkFDTiw2QkFBSyxTQUFTLEVBQUMsWUFBWTtvQkFDdkIsMkNBQW9CO29CQUNwQiwrQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxvQkFBb0IsRUFDMUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxTQUFFLENBQ3JEO2dCQUNOLDZCQUFLLFNBQVMsRUFBQyxZQUFZO29CQUN2QiwwQ0FBbUI7b0JBQ25CLGtDQUFVLFNBQVMsRUFBQyx5QkFBeUIsRUFDbkMsSUFBSSxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3hDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FDMUM7Z0JBQ04sNkJBQUssU0FBUyxFQUFDLFlBQVk7b0JBQ3ZCLG1EQUE0QjtvQkFDNUIsK0JBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsNkJBQTZCLEVBQ25ELElBQUksRUFBQyxnQkFBZ0IsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxTQUFFLENBQ2pFO2dCQUNOLDZCQUFLLFNBQVMsRUFBQyxZQUFZO29CQUN2QiwwQ0FBbUI7b0JBQ25CLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLHlCQUF5QixFQUMvQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLFNBQUUsQ0FDekQsQ0FDSjtZQUVOLDZCQUFLLFNBQVMsRUFBQywwQkFBMEI7Z0JBQ3JDLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUNoQiw2QkFBSyxTQUFTLEVBQUMsVUFBVTt3QkFDckIsNkJBQUssU0FBUyxFQUFDLGNBQWM7OzRCQUNqQiw4QkFBTSxTQUFTLEVBQUMsY0FBYyxJQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBUSxDQUM5RCxDQUNKO29CQUNOLDZCQUFLLFNBQVMsRUFBQyxVQUFVO3dCQUNyQiwrQkFBTyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFDekMsSUFBSSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQzNDO29CQUNOLDZCQUFLLFNBQVMsRUFBQyxVQUFVLFlBRW5CLENBQ0osQ0FDSixDQUVKLENBRVQsQ0FBQztJQUNOLENBQUM7SUE1RXNCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO0lBMEcxQyxZQUFDO0NBQUEsQUEzR0QsQ0FBMkIsS0FBSyxDQUFDLFNBQVMsR0EyR3pDO0FBM0dZLHNCQUFLIn0=