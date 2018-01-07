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
        _this.handleDataInputChange = function (sequenceId, newData, newHash) {
            _this.setState(function (previousState) {
                var found = false;
                var currSeq = sequenceId;
                var prevHash = '';
                previousState.blocks.map(function (block) {
                    if (block.sequenceId == sequenceId && !found) {
                        block.data = newData;
                        block.hash = newHash;
                        found = true;
                        currSeq += 1;
                        prevHash = newHash;
                    }
                    if (found && block.sequenceId == currSeq) {
                        block.prevHash = prevHash;
                        var nonceFinder = new NonceFinder_1.NonceFinder(Block_1.Block.DIFFICULTY, block.sequenceId, block.data, block.prevHash);
                        block.hash = nonceFinder.hash(block.nonce);
                        prevHash = block.hash;
                        currSeq += 1;
                    }
                });
                return previousState;
            });
        };
        _this.handleNonceUpdate = function (sequenceId, newNonce, newHash) {
            _this.setState(function (previousState) {
                previousState.blocks.map(function (block) {
                    if (block.sequenceId == sequenceId) {
                        block.nonce = newNonce;
                        block.hash = newHash;
                    }
                    if (block.sequenceId == sequenceId + 1) {
                        block.prevHash = newHash;
                        var nonceFinder = new NonceFinder_1.NonceFinder(Block_1.Block.DIFFICULTY, block.sequenceId, block.data, block.prevHash);
                        block.hash = nonceFinder.hash(block.nonce);
                    }
                });
                return previousState;
            });
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