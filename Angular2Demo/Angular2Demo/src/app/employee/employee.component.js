"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.columnSpan = 2;
        this.firstName = "Himanshu";
        this.lastName = "Chetal";
        this.gender = "Male";
        this.age = "37";
        this.classesToApply = "colorClass italicClass";
        this.applyBoldClass = true;
        this.applyItalicClass = false;
        this.showDetails = true;
    }
    EmployeeComponent.prototype.applyClass = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    };
    EmployeeComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: "my-employee",
            //template: `<button class='colorClass' [class]='classesToApply'>My Button</button>
            //            <br /><br />
            //            <button [class.boldClass]='applyBoldClass'>My Button</button>
            //            <br /><br />
            //            <button class='colorClass' [ngClass]='applyClass()'>My Button</button>
            //            `
            templateUrl: "app/employee/employee.component.html",
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map