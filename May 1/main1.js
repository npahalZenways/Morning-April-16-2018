// import { m1, m2 } from "./main";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import * as main from "./main";
// var abcobj1 = new main.m1.abc();
// var bcdobj = new main.m2.abc();
// class decorator, method decorator, property decorator, parameter decorator
function setSkill(param) {
    return function (target) {
        target.prototype.skill = param;
    };
}
var player = /** @class */ (function () {
    function player() {
    }
    player = __decorate([
        setSkill('keeping')
    ], player);
    return player;
}());
var myplayer = new player();
console.log(myplayer.skill);
