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
            var data = ev.target['value'];
            var prevHash = _this.props.prevHash;
            var nonce = _this.props.nonce;
            var nonceFinder = new NonceFinder_1.NonceFinder(Block.DIFFICULTY, sequenceId, data, prevHash);
            var newHash = nonceFinder.hash(nonce);
            // const status = this.getStatus();
            // this.setState({status: status });
            _this.props.onDataInputChange(sequenceId, ev.target['value'], newHash);
        };
        _this.handleMineButtonClick = function () {
            // find new nonce
            // calculate new hash
            // inform parent of new nonce and new hash
            var worker = _this._worker;
            var msg = {
                sequenceId: _this.props.sequenceId,
                data: _this.props.data,
                difficulty: Block.DIFFICULTY,
                offset: 0,
                workerId: 1,
                prevHash: _this.props.prevHash
            };
            var nonceFinder = new NonceFinder_1.NonceFinder(Block.DIFFICULTY, _this.props.sequenceId, _this.props.data, _this.props.prevHash);
            worker.onmessage = function (message) {
                console.log('message received from worker1...');
                console.log(message);
                var nonce = JSON.parse(message.data);
                var hash = nonceFinder.hash(nonce);
                // const status = this.getStatus();
                // this.setState({status: status });
                _this.props.onNonceUpdate(_this.props.sequenceId, nonce, hash);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbG9jay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQStCO0FBRS9CLHdEQUF1RDtBQUV2RCxvRkFBdUY7QUFldkY7SUFBMkIsaUNBQXVDO0lBSzlELGVBQW1CLEtBQWlCO1FBQXBDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFFTyxlQUFTLEdBQUc7WUFDaEIsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3hGLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pDLENBQUMsQ0FBQztRQTRETSxzQkFBZ0IsR0FBRyxVQUFDLEVBQStCO1lBQ3ZELElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3pDLElBQU0sSUFBSSxHQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsSUFBTSxRQUFRLEdBQUssS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDdkMsSUFBTSxLQUFLLEdBQVEsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFcEMsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRixJQUFNLE9BQU8sR0FBTyxXQUFXLENBQUMsSUFBSSxDQUFD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