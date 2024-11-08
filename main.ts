const prompt = require('prompt-sync')();

class Point {
    readonly name: string = '';
    readonly cordinates: { x: number, y: number } = { x: 0, y: 0 };


    constructor(name: string, x: number, y: number) {
        this.name = name;
        this.cordinates.x = x;
        this.cordinates.y = y;
    }

}

let d = (a: Point, b: Point): number => {
    let distance: number;
    distance = Math.sqrt(Math.pow(b.cordinates.x - a.cordinates.x, 2) + Math.pow(b.cordinates.y - a.cordinates.y, 2))
    console.log(`d(${a.name},${b.name}) = ${distance}`);
    return distance;
}

let areCollinear = (a: Point, b: Point, c: Point): boolean => {
    // ab bc ac 
    let ab = d(a, b);
    let bc = d(b, c);
    let ac = d(a, c);

    if (ab > bc && ab > ac) {
        if (ab == bc + ac) return true;
    } else if (bc > ab && bc > ac) {
        if (bc == ab + ac) return true;
    } else if (ac > ab && ac > bc) {
        if (ac == ab + ac) return true;
    }

    return false;
}

let horizontalLine = (): void => {
    console.log('---------------')
}


horizontalLine();
console.log("To check whether the points are collinear, enter the coordinates for three points.");
console.log("Suppose these 3 points are A, B, and C.");


let points: Point[] = [];

for (let i = 0; i < 3; i++) {
    let name = String.fromCharCode(65 + i);
    horizontalLine();
    console.log(`${name}(x,y)`);
    let x = parseInt(prompt('x: '));
    let y = parseInt(prompt('y: '));
    if (isNaN(x) || isNaN(y)) {
        console.error("You Must Provide Integers as co-ordinats!");
        process.exit(0);
    }

    console.log(`${name}(${x},${y})`);

    points.push(new Point(name, x, y));

}


horizontalLine();

const _areCollinear = areCollinear(points[0], points[1], points[2]);
console.log(_areCollinear)

horizontalLine();

console.log(`Results\n${points[0].name}(${points[0].cordinates.x},${points[0].cordinates.y}), ${points[1].name}(${points[1].cordinates.x},${points[1].cordinates.y}), ${points[2].name}(${points[2].cordinates.x},${points[2].cordinates.y})\nare${_areCollinear ? ' ' : ' not '}Collinear Points`)


export { }