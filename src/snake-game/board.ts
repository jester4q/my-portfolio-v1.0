import { Point } from './point';

export class Board {
    constructor(private context: CanvasRenderingContext2D) {}

    public getCenter() {
        return new Point(this.width / 2, this.height / 2);
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    public printGameOver() {
        this.context.font = '40px Arial';
        this.context.fillStyle = '#00FF42';
        this.context.fillText('Game Over. Press `R` to restart', this.width / 2 - 150, 300);
    }

    public printScore(score: number, highscore: number) {
        this.context.font = '24px Arial';
        this.context.fillStyle = '#00FF42';
        this.context.fillText('Score: ' + score, this.width - 200, 40);
        this.context.fillText('Highscore: ' + highscore, this.width - 200, 80);
    }

    public rect(x: number, y: number, width: number, height: number, color: string) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }

    public get width() {
        return this.context.canvas.width;
    }

    public get height() {
        return this.context.canvas.height;
    }
}
