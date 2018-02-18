"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ManagementComponent = /** @class */ (function () {
    function ManagementComponent() {
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
    }
    ManagementComponent.prototype.applyStyle = function () {
        var style = {
            "font-size.px": this.fontSize,
            "font-weight": this.isBold ? "bold" : "normal",
            "font-style": this.isItalic ? "italic" : "normal",
        };
        return style;
    };
    ManagementComponent = __decorate([
        core_1.Component({
            selector: "my-mgmt",
            template: "\n                <button style='color: red' [style.font-weight] = \"isBold ? 'bold' : 'normal'\">My Management</button>\n                <br /><br />\n                <button style='color: red' [style.font-size.px] = \"fontSize\">My Management</button>\n                <br /><br />\n                <button style='color: red' [ngStyle] = \"applyStyle()\">My Management</button>\n                "
        })
    ], ManagementComponent);
    return ManagementComponent;
}());
exports.ManagementComponent = ManagementComponent;
//# sourceMappingURL=management.component.js.map