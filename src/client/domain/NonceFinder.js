"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_sha256 = require("js-sha256");
var sha256 = js_sha256.sha256;
var NonceFinder = /** @class */ (function () {
    function NonceFinder(difficulty, sequenceId, data, prevHash) {
        if (sequenceId === void 0) { sequenceId = 0; }
        if (data === void 0) { data = ''; }
        if (prevHash === void 0) { prevHash = ''; }
        this._difficulty = difficulty;
        this._sequenceId = sequenceId;
        this._data = data;
        this._prevHash = prevHash;
    }
    NonceFinder.prototype.findNonce = function () {
        var nonce = 0;
        while (!this.isHashMatch(nonce)) {
            ++nonce;
        }
        return nonce;
    };
    NonceFinder.prototype.hash = function (nonce) {
        var dataStructure = {
            nonce: nonce,
            sequence_id: this._sequenceId,
            data: this._data,
            prev_hash: this._prevHash
        };
        var serializedData = JSON.stringify(dataStructure);
        var hash = sha256(serializedData);
        return hash;
    };
    NonceFinder.prototype.isHashMatch = function (nonce) {
        var hash = this.hash(nonce);
        var diff = this._difficulty;
        var substr = hash.substring(0, diff);
        var matchString = '';
        for (var i = 0; i < diff; i++) {
            matchString = matchString.concat('0');
        }
        return (substr == matchString);
    };
    return NonceFinder;
}());
exports.NonceFinder = NonceFinder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uY2VGaW5kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOb25jZUZpbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF3QztBQUN4QyxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBRWhDO0lBTUkscUJBQW1CLFVBQWtCLEVBQUUsVUFBWSxFQUFFLElBQU8sRUFBRSxRQUFXO1FBQWxDLDJCQUFBLEVBQUEsY0FBWTtRQUFFLHFCQUFBLEVBQUEsU0FBTztRQUFFLHlCQUFBLEVBQUEsYUFBVztRQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFTLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFLLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRU0sK0JBQVMsR0FBaEI7UUFDSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxPQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzdCLEVBQUUsS0FBSyxDQUFDO1FBQ1osQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLDBCQUFJLEdBQVgsVUFBWSxLQUFhO1FBQ3JCLElBQU0sYUFBYSxHQUFHO1lBQ2xCLEtBQUssRUFBUSxLQUFLO1lBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixJQUFJLEVBQVMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsU0FBUyxFQUFJLElBQUksQ0FBQyxTQUFTO1NBQzlCLENBQUM7UUFFRixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxpQ0FBVyxHQUFuQixVQUFvQixLQUFhO1FBQzdCLElBQU0sSUFBSSxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBTSxJQUFJLEdBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFckIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUFqRFksa0NBQVcifQ==