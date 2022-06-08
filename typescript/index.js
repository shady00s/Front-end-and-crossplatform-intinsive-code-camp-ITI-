// 1. Using TypeScript to solve the following:
// a. Implement Rectangle custom type:
// a. Constructor that width and height.
// b. CalcCircumference() function that returns the circumference of the rectangle.
// c. WhoAmI() Static function that prints text (“I am rectangle”).
// b. Implement Square custom type, that inherits from rectangle, and change the following:
// a. Make the constructor of square takes one parameter only.
// b. In the square constructor, make width and height of the parent equal.
// i. You’ll need to call the super() constructor in the square constructor to access the parent object properties.
// c. Override circumference () to return circumference of the Square.
// d. Override WhoAmI() function to print text (“I am square”).
// c. Create objects from rectangle and square and test them, and make sure the square inherited rectangle members.
// d. Try to make modules
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
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.heights = height;
        this.width = width;
    }
    Rectangle.prototype.CalcCircumference = function () {
        alert("Circumference of rectangle " + 2 * (this.width + this.heights));
    };
    Rectangle.prototype.WhoAmI = function () {
        alert("I am rectangle");
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        var _this = _super.call(this, width, width) || this;
        _this.width = width;
        _this.height = width;
        return _this;
    }
    Square.prototype.CalcCircumference = function () {
        alert("Circumference of square " + this.width * this.height);
    };
    Square.prototype.WhoAmI = function () { alert("I am square"); };
    ;
    return Square;
}(Rectangle));
var s = new Square(12);
s.CalcCircumference();
s.WhoAmI();
// Try the following Typescript features:
// a. Types annotation, union types
// b. Function with typed arguments and return type.
// c. Interfaces
// d. Generics
// e. Enums
// union 
var test1;
//enum
var test;
(function (test) {
    test[test["first"] = 0] = "first";
    test[test["sec"] = 1] = "sec";
    test[test["third"] = 2] = "third";
})(test || (test = {}));
//Types annotation,
var x = 21;
// Function with typed arguments and return type.
function returnString(a) {
    return a;
}
// d. Generics
function genericFunc(a) {
    var result = [];
    result.push(a);
    return result;
}
