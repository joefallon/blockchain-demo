"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require('./BlockRoute.css');
var React = require("react");
var Header_1 = require("../../components/header/Header");
var MiningLoader_1 = require("../../components/mining_loader/MiningLoader");
var BlockRoute = /** @class */ (function (_super) {
    tslib_1.__extends(BlockRoute, _super);
    function BlockRoute(props) {
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
            var data, _a, hash, status;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = event.target['value'];
                        this.props.model.setData(data);
                        return [4 /*yield*/, Promise.all([this.props.model.getHashValue(), this.getStatus()])];
                    case 1:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), hash = _a[0], status = _a[1];
                        this.setState({ data: data, hashValue: hash, blockStatus: status });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleMineClick = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var nonce, _a, hash, status;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setState({ isMining: true });
                        return [4 /*yield*/, this.props.model.findNonce()];
                    case 1:
                        nonce = _b.sent();
                        return [4 /*yield*/, Promise.all([this.props.model.getHashValue(), this.getStatus()])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), hash = _a[0], status = _a[1];
                        this.setState({ nonce: nonce, hashValue: hash, blockStatus: status, isMining: false });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            blockStatus: BlockRoute.STATUS_INVALID,
            isMining: false,
            nonce: _this.props.model.getNonce(),
            sequenceId: _this.props.model.getSequenceId(),
            data: '',
            hashValue: ''
        };
        _this.props.model.setData('');
        document.title = 'Block | Blockchain Demo';
        return _this;
    }
    BlockRoute.prototype.componentWillMount = function () {
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
    BlockRoute.prototype.render = function () {
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
                                    React.createElement("input", { type: "text", className: 'form-control sequence-id', name: "sequence-id", value: this.state.sequenceId, disabled: true })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Nonce"),
                                    React.createElement("input", { type: "text", className: 'form-control nonce', name: "nonce", value: this.state.nonce, disabled: true })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Data"),
                                    React.createElement("textarea", { className: 'form-control data-input', name: "data-input", value: this.state.data, onChange: this.handleTextareaChange })),
                                React.createElement("div", { className: 'form-group' },
                                    React.createElement("label", null, "Hash"),
                                    React.createElement("input", { type: "text", className: 'form-control hash-value', name: "hash-value", value: this.state.hashValue, disabled: true }))),
                            React.createElement("div", { className: 'card-actions text-center' },
                                React.createElement("div", { className: 'status-label' },
                                    "Status: ",
                                    React.createElement("span", { className: 'status-value' }, this.state.blockStatus)),
                                React.createElement("input", { type: "button", className: "btn btn-primary", value: "Mine", onClick: this.handleMineClick }),
                                this.renderMiningLoader())))))));
    };
    BlockRoute.prototype.getStatus = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hashIsValid, status;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.model.hashIsValid()];
                    case 1:
                        hashIsValid = _a.sent();
                        status = hashIsValid ? BlockRoute.STATUS_VALID : BlockRoute.STATUS_INVALID;
                        return [2 /*return*/, status];
                }
            });
        });
    };
    BlockRoute.STATUS_VALID = 'VALID';
    BlockRoute.STATUS_INVALID = 'INVALID';
    return BlockRoute;
}(React.Component));
exports.BlockRoute = BlockRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJsb2NrUm91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTVCLDZCQUErQjtBQUsvQix5REFBd0Q7QUFDeEQsNEVBQTJFO0FBZTNFO0lBQWdDLHNDQUFpRDtJQUk3RSxvQkFBbUIsS0FBc0I7UUFBekMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FXZjtRQTJETyx3QkFBa0IsR0FBRztZQUN6QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxDQUFDLG9CQUFDLDJCQUFZLE9BQUUsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFTSwwQkFBb0IsR0FBRyxVQUFPLEtBQWtDOzs7Ozt3QkFDOUQsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUixxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLENBQUMsRUFBQTs7d0JBQXpGLEtBQUEsOEJBQWlCLFNBQXdFLEtBQUEsRUFBeEYsSUFBSSxRQUFBLEVBQUUsTUFBTSxRQUFBO3dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDOzs7O2FBQ3JFLENBQUM7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