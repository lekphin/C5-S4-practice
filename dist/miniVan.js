"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MiniVan = void 0;
var vehicle_1 = require("./vehicle");
var MiniVan = /** @class */ (function (_super) {
    __extends(MiniVan, _super);
    function MiniVan(plateID, weight, numberLuggage, numberCustomers) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.numberLuggage = numberLuggage;
        _this.numberCustomers = numberCustomers;
        return _this;
    }
    MiniVan.prototype.getSpeed = function () {
        var minSpeed = 130;
        minSpeed = minSpeed - ((this.numberCustomers * 10) + (this.numberLuggage * 5));
        return minSpeed;
    };
    return MiniVan;
}(vehicle_1.Vehicle));
exports.MiniVan = MiniVan;
