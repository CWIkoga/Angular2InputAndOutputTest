"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var app_child_1 = require('./app.child');
var AppParentComponent = (function () {
    function AppParentComponent() {
        this.msgs = MSGS;
    }
    AppParentComponent.prototype.onSelect = function (msg) { this.selectedMsg = msg; };
    AppParentComponent.prototype.onChecking = function (event) {
        this.childReply = '「' + event + '」のメッセージが確認されました。';
    };
    AppParentComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.parent.html',
            styleUrls: ['app/app.parent.css'],
            directives: [app_child_1.AppChildComponent]
        })
    ], AppParentComponent);
    return AppParentComponent;
}());
exports.AppParentComponent = AppParentComponent;
var MSGS = [
    { id: 1, text: '飯食べたか' },
    { id: 2, text: '風呂入ったか' },
    { id: 3, text: '元気でやってるか' },
    { id: 4, text: '風邪ひくなよ' },
];
//# sourceMappingURL=app.parent.js.map