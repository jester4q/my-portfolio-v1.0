export class Point {
    constructor(public x: number = 0, public y: number = 0) {}

    public isEqual(p: Point) {
        return p.x === this.x && p.y === this.y;
    }
}
