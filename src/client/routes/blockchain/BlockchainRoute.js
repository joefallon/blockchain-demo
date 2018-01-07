"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var NonceFinder_1 = require("../../domain/NonceFinder");
require('./BlockchainRoute.css');
var React = require("react");
var Header_1 = require("../../components/header/Header");
var Block_1 = require("../../components/block/Block");
var BlockchainRoute = /** @class */ (function (_super) {
    tslib_1.__extends(BlockchainRoute, _super);
    function BlockchainRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAddBlockClick = function () {
            _this.setState(function (prevState) {
                var sequenceId = prevState.blocks.length + 1;
                var prevHash = '0000000000000000000000000000000000000000000000000000000000000000';
                if (prevState.blocks.length > 0) {
                    var lastIndex = prevState.blocks.length - 1;
                    var lastBlock = prevState.blocks[lastIndex];
                    prevHash = lastBlock.hash;
                }
                var nonceFinder = new NonceFinder_1.NonceFinder(Block_1.Block.DIFFICULTY, sequenceId, '', prevHash);
                var hash = nonceFinder.hash(0);
                var block = {
                    sequenceId: sequenceId,
                    data: '',
                    hash: hash,
                    nonce: 0,
                    prevHash: prevHash,
                    onDataInputChange: _this.handleDataInputChange,
                    onNonceUpdate: _this.handleNonceUpdate
                };
                prevState.blocks.push(block);
                return prevState;
            });
        };
        _this.handleDataInputChange = function (sequenceId, newData) {
            _this.setState(function (previousState) {
                previousState.blocks.map(function (block) {
                    if (block.sequenceId == sequenceId) {
                        block.data = newData;
                    }
                });
                previousState = _this.updateChain(previousState);
                return previousState;
            });
        };
        _this.handleNonceUpdate = function (sequenceId, newNonce) {
            _this.setState(function (previousState) {
                previousState.blocks.map(function (block) {
                    if (block.sequenceId == sequenceId) {
                        block.nonce = newNonce;
                    }
                });
                previousState = _this.updateChain(previousState);
                return previousState;
            });
        };
        _this.updateChain = function (state) {
            var blocks = state.blocks;
            if (blocks.length == 0) {
                return state;
            }
            var prevHash = '0000000000000000000000000000000000000000000000000000000000000000';
            var currHash = '';
            for (var i = 0; i < blocks.length; i++) {
                var seqId = blocks[i].sequenceId;
                var data = blocks[i].data;
                var nonce = blocks[i].nonce;
                var nonceFinder = new NonceFinder_1.NonceFinder(Block_1.Block.DIFFICULTY, seqId, data, prevHash);
                currHash = nonceFinder.hash(nonce);
                blocks[i].prevHash = prevHash;
                blocks[i].hash = currHash;
                prevHash = currHash;
            }
            return state;
        };
        _this.state = {
            blocks: []
        };
        document.title = 'Blockchain | Blockchain Demo';
        return _this;
    }
    BlockchainRoute.prototype.render = function () {
        var blocks = this.state.blocks.map(function (block) {
            return (React.createElement("div", { className: 'row', key: block.sequenceId },
                React.createElement("div", { className: 'col-md-8 col-md-offset-2' },
                    React.createElement(Block_1.Block, tslib_1.__assign({}, block)))));
        });
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, tslib_1.__assign({}, this.props)),
            React.createElement("div", { className: 'container blockchain-route' },
                blocks,
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-md-8 col-md-offset-2 text-right' },
                        React.createElement("div", { className: 'add-block' },
                            React.createElement("input", { type: "button", className: "btn btn-primary", value: "Add Block", name: "add-block-button", onClick: this.handleAddBlockClick })))))));
    };
    return BlockchainRoute;
}(React.Component));
exports.BlockchainRoute = BlockchainRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2tjaGFpblJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmxvY2tjaGFpblJvdXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBdUQ7QUFFdkQsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFakMsNkJBQStCO0FBRy9CLHlEQUF3RDtBQUN4RCxzREFBaUU7QUFRakU7SUFBcUMsMkNBQTJEO0lBRTVGLHlCQUFtQixLQUEyQjtRQUE5QyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUtmO1FBbUNNLHlCQUFtQixHQUFHO1lBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBQyxTQUErQjtnQkFDMUMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLFFBQVEsR0FBRyxrRUFBa0UsQ0FBQztnQkFFbEYsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUM5QyxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM5QyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsYUFBSyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRixJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVqQyxJQUFNLEtBQUssR0FBZTtvQkFDdEIsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLElBQUksRUFBRSxFQUFFO29CQUNSLElBQUksRUFBRSxJQUFJO29C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