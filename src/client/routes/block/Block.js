"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('./Block.css');
var React = require("react");
var Header_1 = require("../../components/header/Header");
var MiningLoader_1 = require("../../components/mining_loader/MiningLoader");
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
            var nonce, hash, hashIsValid, status;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ isMining: true });
                        return [4 /*yield*/, this.props.model.findNonce()];
                    case 1:
                        nonce = _a.sent();
                        return [4 /*yield*/, this.props.model.getHashValue()];
                    case 2:
                        hash = _a.sent();
                        return [4 /*yield*/, this.props.model.hashIsValid()];
                    case 3:
                        hashIsValid = _a.sent();
                        status = hashIsValid ? Block.STATUS_VALID : Block.STATUS_INVALID;
                        this.setState({ nonce: nonce, hashValue: hash, blockStatus: status, isMining: false });
                        return [2 /*return*/];
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbG9jay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXZCLDZCQUErQjtBQUkvQix5REFBd0Q7QUFDeEQsNEVBQTJFO0FBZTNFO0lBQTJCLGlDQUF1QztJQUk5RCxlQUFtQixLQUFpQjtRQUFwQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQVVmO1FBdURPLHdCQUFrQixHQUFHO1lBQ3pCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLENBQUMsb0JBQUMsMkJBQVksT0FBRSxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVNLDBCQUFvQixHQUFHLFVBQU8sS0FBa0M7Ozs7O3dCQUM5RCxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsQixxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQTVDLElBQUksR0FBRyxTQUFxQzt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUFsRCxXQUFXLEdBQUcsU0FBb0M7d0JBQ2xELE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7d0JBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMs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