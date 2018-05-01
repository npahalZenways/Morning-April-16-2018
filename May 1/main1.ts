// import { m1, m2 } from "./main";

// import * as main from "./main";

// var abcobj1 = new main.m1.abc();

// var bcdobj = new main.m2.abc();

// class decorator, method decorator, property decorator, parameter decorator

function setSkill(param) {
    return function(target){
        target.prototype.skill = param;
    }
}

@setSkill('keeping')
class player{
    skill;
}

var myplayer = new player();

console.log(myplayer.skill);