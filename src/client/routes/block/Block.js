"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('./Block.css');
var React = require("react");
var Header_1 = require("../../components/header/Header");
var MiningLoader_1 = require("../../components/mining_loader/MiningLoader");
// import Worker = require('worker-loader!../../domain/Fibonacci.worker');
// import * as workerPath from "file-loader?name=[name].js!./Fibonacci.worker";
// console.log(workerPath);
// const worker = new Worker(workerPath);
// import workerFarm = require('worker-farm');
// const workers = workerFarm(require.resolve('../../domain/Fibonacci'));
// const workerpool = require('workerpool');
// const pool = workerpool.pool();
var Parallel = require("paralleljs");
var fibonacci = require("../../domain/Fibonacci");
var Block = /** @class */ (function (_super) {
    tslib_1.__extends(Block, _super);
    function Block(props) {
        var _this = _super.call(this, props) || this;
        _this.renderMiningLoader = function () {
            if (_this.state.isMining) {
                return (React.createElement(MiningLoader_1.MiningLoader, null));
            }
            else {
                return null;
            }
        };
        _this.handleTextareaChange = function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var data, hash, hashIsValid, status;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = event.target['value'];
                        this.props.model.setData(data);
                        return [4 /*yield*/, this.props.model.getHashValue()];
                    case 1:
                        hash = _a.sent();
                        return [4 /*yield*/, this.props.model.hashIsValid()];
                    case 2:
                        hashIsValid = _a.sent();
                        status = hashIsValid ? Block.STATUS_VALID : Block.STATUS_INVALID;
                        this.setState({ data: data, hashValue: hash, blockStatus: status });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleMineClick = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var _self, p;
            return tslib_1.__generator(this, function (_a) {
                this.setState({ isMining: true });
                _self = this;
                p = new Parallel([10]);
                p.spawn(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var n, result;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                n = data[0];
                                return [4 /*yield*/, fibonacci(n)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, [result]];
                        }
                    });
                }); }).then(function (data) {
                    var result = data[0].toString();
                    _self.setState({
                        isMining: false, nonce: 0, hashValue: result, blockStatus: Block.STATUS_VALID
                    });
                });
                return [2 /*return*/];
            });
        }); };
        _this.state = {
            blockStatus: Block.STATUS_INVALID,
            isMining: false,
            nonce: _this.props.model.getNonce(),
            sequenceId: _this.props.model.getSequenceId(),
            data: '',
            hashValue: ''
        };
        _this.props.model.setData('');
        return _this;
    }
    Block.prototype.componentWillMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.model.getHashValue()];
                    case 1:
                        hash = _a.sent();
                        this.setState({ hashValue: hash });
                        return [2 /*return*/];
                }
            });
        });
    };
    Block.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, tslib_1.__assign({}, this.props)),
            React.createElement("div", { className: 'container block-route' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-md-8 col-md-offset-2' },
                        React.createElement("div", { className: 'card' },
                            React.createElement("div", { className: 'card-header' },
                                React.createElement("h3", null, "Block")),
                            React.createElement("div", { className: 'card-main' },
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Sequence ID"),
                                    React.createElement("input", { type: "text", className: 'form-control sequence-id', value: this.state.sequenceId, disabled: true })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Nonce"),
                                    React.createElement("input", { type: "text", className: 'form-control nonce', value: this.state.nonce, disabled: true })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Data"),
                                    React.createElement("textarea", { className: 'form-control data-input', value: this.state.data, onChange: this.handleTextareaChange })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Hash"),
                                    React.createElement("input", { type: "text", className: 'form-control hash-value', value: this.state.hashValue, disabled: true }))),
                            React.createElement("div", { className: 'card-actions text-center' },
                                React.createElement("div", { className: 'status-label' },
                                    "Status: ",
                                    React.createElement("span", { className: 'status-value' }, this.state.blockStatus)),
                                React.createElement("input", { type: "button", className: "btn btn-primary", value: "Mine", onClick: this.handleMineClick }),
                                this.renderMiningLoader())))))));
    };
    Block.STATUS_VALID = 'VALID';
    Block.STATUS_INVALID = 'INVALID';
    return Block;
}(React.Component));
exports.Block = Block;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbG9jay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXZCLDZCQUErQjtBQUkvQix5REFBd0Q7QUFDeEQsNEVBQTJFO0FBRTNFLDBFQUEwRTtBQUMxRSwrRUFBK0U7QUFDL0UsMkJBQTJCO0FBQzNCLHlDQUF5QztBQUd6Qyw4Q0FBOEM7QUFDOUMseUVBQXlFO0FBQ3pFLDRDQUE0QztBQUM1QyxrQ0FBa0M7QUFFbEMscUNBQXdDO0FBR3hDLGtEQUFxRDtBQWdCckQ7SUFBMkIsaUNBQXVDO0lBSTlELGVBQW1CLEtBQWlCO1FBQXBDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBVWY7UUF1RE8sd0JBQWtCLEdBQUc7WUFDekIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUMsQ0FBQyxvQkFBQywyQkFBWSxPQUFFLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRU0sMEJBQW9CLEdBQUcsVUFBTyxLQUFrQzs7Ozs7d0JBQzlELElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFBOzt3QkFBNUMsSUFBSSxHQUFHLFNBQXFDO3dCQUM5QixxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQWxELFdBQVcsR0FBRyxTQUFvQzt3QkFDbEQsTUFBTSxH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