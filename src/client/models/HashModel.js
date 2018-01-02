"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_sha256 = require("js-sha256");
var sha256 = js_sha256.sha256;
var HashModel = /** @class */ (function () {
    function HashModel() {
    }
    // noinspection JSMethodCanBeStatic
    HashModel.prototype.hashData = function (data) {
        var hash = sha256(data);
        return hash;
    };
    return HashModel;
}());
exports.HashModel = HashModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaE1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGFzaE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdDO0FBQ3hDLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFFaEM7SUFFSTtJQUVBLENBQUM7SUFFRCxtQ0FBbUM7SUFDNUIsNEJBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksOEJBQVMifQ==