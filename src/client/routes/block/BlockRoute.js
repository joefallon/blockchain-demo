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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJsb2NrUm91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTVCLDZCQUErQjtBQUsvQix5REFBd0Q7QUFDeEQsNEVBQTJFO0FBZTNFO0lBQWdDLHNDQUFpRDtJQUk3RSxvQkFBbUIsS0FBc0I7UUFBekMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FVZjtRQXVETyx3QkFBa0IsR0FBRztZQUN6QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxDQUFDLG9CQUFDLDJCQUFZLE9BQUUsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFTSwwQkFBb0IsR0FBRyxVQUFPLEtBQWtDOzs7Ozt3QkFDOUQsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUixxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLENBQUMsRUFBQTs7d0JBQXpGLEtBQUEsOEJBQWlCLFNBQXdFLEtBQUEsRUFBeEYsSUFBSSxRQUFBLEVBQUUsTUFBTSxRQUFBO3dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDOzs7O2FBQ3JFLENBQUM7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