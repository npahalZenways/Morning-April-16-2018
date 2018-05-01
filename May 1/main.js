"use strict";
// Unions
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function padding(param) {
    if (typeof param == "number") {
        return param + "px";
    }
    else {
        return param;
    }
}
padding(10); // returns 10px
padding('20px'); // return 20px
// padding(true) // return true
// generics
function gen(param) {
    return param;
}
gen(45);
gen('');
// classes
var school = /** @class */ (function () {
    function school(schoolname) {
        this.schoolName = schoolname;
    }
    school.prototype.setschool = function () {
        // this.schoolName = schoolname;
        return this.schoolName;
    };
    return school;
}());
var mySchool;
function myGenericFunction(params) {
    console.log(params);
}
myGenericFunction({ name: '', marks: 9, getname: function () { } });
myGenericFunction(mySchool);
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, marks, schoolname) {
        var _this = _super.call(this, schoolname) || this;
        _this.getname = function () {
        };
        _this.name = name;
        _this.marks = marks;
        return _this;
    }
    student.prototype.print = function () {
        console.log('name');
    };
    return student;
}(school));
var student1 = new student('ntini', 123, 'abc school');
console.log(student1);
// student.print();
var m1;
(function (m1) {
    var abc = /** @class */ (function () {
        function abc() {
        }
        return abc;
    }());
    m1.abc = abc;
})(m1 = exports.m1 || (exports.m1 = {}));
var m2;
(function (m2) {
    var abc = /** @class */ (function () {
        function abc() {
        }
        return abc;
    }());
    m2.abc = abc;
})(m2 = exports.m2 || (exports.m2 = {}));
var abcobj = new m1.abc();
