import type { Board } from './board';
import { Point } from './point';
import { Snake } from './snake';

export class Apple {
    public point: Point;
    public color: string;
    public size: number = 10;

    constructor(private board: Board, size: number = 20) {
        this.size = size;
        this.point = new Point(10, 10);
        this.color = 'blue';
    }

    public draw() {
        this.board.rect(this.point.x, this.point.y, this.size, this.size, this.color);
    }

    public rnd(snake: Snake) {
        let isTouching = false;
        do {
            isTouching = false;
            this.point = new Point(
                Math.floor(((Math.random() * this.board.width) / this.size) * this.size),
                Math.floor(((Math.random() * this.board.height) / this.size) * this.size),
            );
            isTouching = snake.isAppleInside(this);
        } while (isTouching);
    }
}
