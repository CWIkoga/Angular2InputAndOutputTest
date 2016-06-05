"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppChildComponent = (function () {
    function AppChildComponent() {
        this.checkingMsg = new core_1.EventEmitter();
    }
    AppChildComponent.prototype.checking = function (msgText) {
        this.checkingMsg.next(msgText);
    };
    __decorate([
        core_1.Input('child-name')
    ], AppChildComponent.prototype, "childName", void 0);
    __decorate([
        core_1.Input()
    ], AppChildComponent.prototype, "msg", void 0);
    __decorate([
        core_1.Output('checking')
    ], AppChildComponent.prototype, "checkingMsg", void 0);
    AppChildComponent = __decorate([
        core_1.Component({
            selector: 'my-app-child',
            templateUrl: 'app/app.child.html',
            events: ['checkingMsg']
        })
    ], AppChildComponent);
    return AppChildComponent;
}());
exports.AppChildComponent = AppChildComponent;
//# sourceMappingURL=app.child.js.map