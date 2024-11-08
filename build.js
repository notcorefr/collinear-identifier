"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var Point = /** @class */ (function () {
    function Point(name, x, y) {
        this.name = '';
        this.cordinates = { x: 0, y: 0 };
        this.name = name;
        this.cordinates.x = x;
        this.cordinates.y = y;
    }
    return Point;
}());
var d = function (a, b) {
    var distance;
    distance = Math.sqrt(Math.pow(b.cordinates.x - a.cordinates.x, 2) + Math.pow(b.cordinates.y - a.cordinates.y, 2));
    console.log("d(".concat(a.name, ",").concat(b.name, ") = ").concat(distance));
    return distance;
};
var areColinear = function (a, b, c) {
    // ab bc ac 
    var ab = d(a, b);
    var bc = d(b, c);
    var ac = d(a, c);
    if (ab > bc && ab > ac) {
        if (ab == bc + ac)
            return true;
    }
    else if (bc > ab && bc > ac) {
        if (bc == ab + ac)
            return true;
    }
    else if (ac > ab && ac > bc) {
        if (ac == ab + ac)
            return true;
    }
    return false;
};
var horizontalLine = function () {
    console.log('---------------');
};
horizontalLine();
console.log("To Check Whether The points are colinear or not, Enter the Co-ordinates for those 3 Points,\nsuppose these 3 points are A, B, C");
var points = [];
for (var i = 0; i < 3; i++) {
    var name_1 = String.fromCharCode(65 + i);
    horizontalLine();
    console.log("".concat(name_1, "(x,y)"));
    var x = parseInt(prompt('x: '));
    var y = parseInt(prompt('y: '));
    if (isNaN(x) || isNaN(y)) {
        console.error("You Must Provide Integers as co-ordinats!");
        process.exit(0);
    }
    console.log("".concat(name_1, "(").concat(x, ",").concat(y, ")"));
    points.push(new Point(name_1, x, y));
}
horizontalLine();
var _areColinear = areColinear(points[0], points[1], points[2]);
console.log(_areColinear);
horizontalLine();
console.log("Results\n".concat(points[0].name, "(").concat(points[0].cordinates.x, ",").concat(points[0].cordinates.y, "), ").concat(points[1].name, "(").concat(points[1].cordinates.x, ",").concat(points[1].cordinates.y, "), ").concat(points[2].name, "(").concat(points[2].cordinates.x, ",").concat(points[2].cordinates.y, ")\nare").concat(_areColinear ? ' ' : ' not ', "Co-Linear Points"));
