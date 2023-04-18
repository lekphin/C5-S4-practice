"use strict";
exports.__esModule = true;
exports.VehicleConvoy = void 0;
var VehicleConvoy = /** @class */ (function () {
    function VehicleConvoy() {
        this.vehicle = [];
    }
    VehicleConvoy.prototype.addVehicle = function (vehicle) {
        this.vehicle.push(vehicle);
    };
    VehicleConvoy.prototype.getMaxSpeed = function () {
        var maxSpeed = this.vehicle[0].getSpeed();
        for (var _i = 0, _a = this.vehicle; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            if (vehicle.getSpeed() < maxSpeed) {
                maxSpeed = vehicle.getSpeed();
            }
        }
        return maxSpeed;
    };
    return VehicleConvoy;
}());
exports.VehicleConvoy = VehicleConvoy;
