import type { Apple } from './apple';
import type { Board } from './board';
import { Point } from './point';

export class Snake {
    private tail: Point[] = [];
    public size: number = 10;
    public rotateX = 0;
    public rotateY = 0;

    constructor(private board: Board, size: number = 20) {
        this.tail = [new Point(size, size)];
        this.rotateX = 0;
        this.rotateY = 1;
        this.size = size;
    }

    public move() {
        const rect = new Point();
        if (this.rotateX === 1) {
            rect.x = this.head.x + this.size;
            rect.y = this.head.y;
        } else if (this.rotateX === -1) {
            rect.x = this.head.x - this.size;
            rect.y = this.head.y;
        } else if (this.rotateY === 1) {
            rect.x = this.head.x;
            rect.y = this.head.y + this.size;
        } else if (this.rotateY === -1) {
            rect.x = this.head.x;
            rect.y = this.head.y - this.size;
        }

        this.tail.shift();
        this.tail.push(rect);
    }

    public eat(apple: Apple) {
        if (this.head.isEqual(apple.point)) {
            this.tail.push(apple.point);
            const score = this.tail.length - 1;
            return score;
        }

        return 0;
    }

    public isAppleInside(apple: Apple) {
        for (let i = 0; i < this.length; i++) {
            const point = this.tail[i];
            if (point.isEqual(apple.point)) {
                return true;
            }
        }
        return false;
    }

    public get head(): Point {
        return this.tail[this.tail.length - 1];
    }

    public get length(): number {
        return this.tail.length;
    }

    public get score(): number {
        return this.tail.length - 1;
    }

    public draw() {
        for (let i = 0; i < this.length; i++) {
            const point = this.tail[i];
            this.board.rect(point.x + 2.5, point.y + 2.5, this.size - 5, this.size - 5, 'white');
        }
    }
}
