"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(plateID, weight) {
        this.plateID = plateID;
        this.weight = weight;
    }
    Vehicle.getSpeed = function () {
        throw new Error("Method not implemented.");
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
