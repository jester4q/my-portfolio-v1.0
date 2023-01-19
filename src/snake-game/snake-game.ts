import { Apple } from './apple';
import { Board } from './board';
import { Snake } from './snake';

let ids = 0;

export class SnakeGame {
    private id = ++ids;
    private fps: number = 15;
    private gameOver: boolean = false;
    private highscore: number = 0;
    private board: Board;
    private snake: Snake;
    private apple: Apple;
    private interval: any;
    private listeners: Function[] = [];

    constructor(private canvas: HTMLCanvasElement) {
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('Failed creation of canvas 2D context');
        }
        this.board = new Board(context);
        this.snake = new Snake(this.board);
        this.apple = new Apple(this.board);
        this.apple.rnd(this.snake);
    }

    public start() {
        console.log('start game ------------------------------- ' + this.id);
        const listener = (event: KeyboardEvent) => this.onEvent(event);
        window.addEventListener('keydown', listener);
        this.listeners.push(() => window.removeEventListener('keydown', listener));
        this.gameLoop();
    }

    public stop() {
        console.log('stop game ------------------------------- ' + this.id, this.interval);
        for (let x = 0; x < this.listeners.length; x++) {
            this.listeners[x]();
        }
        this.listeners = [];
    }

    private gameLoop() {
        const interval = setInterval(() => {
            this.show();
        }, 1000 / this.fps);
        this.listeners.push(() => {
            clearInterval(interval);
        });
    }

    private show() {
        this.update();
        this.draw();
    }

    private update() {
        this.board.clear();
        if (!this.gameOver) {
            this.snake.move();
            const score = this.snake.eat(this.apple);
            if (score) {
                this.highscore = Math.max(this.highscore, score);
                this.apple = new Apple(this.board);
                this.apple.rnd(this.snake);
            }
            this.checkHitWall();
        }
    }

    private checkHitWall() {
        const head = this.snake.head;
        console.log(head, this.canvas.width, this.canvas.height);
        if (head.x == -this.snake.size || head.y == -this.snake.size || head.x >= this.canvas.width || head.y >= this.canvas.height) {
            this.gameOver = true;
            this.snake = new Snake(this.board);
        }
    }

    private draw() {
        this.board.rect(0, 0, this.canvas.width, this.canvas.height, 'black');
        //this.board.rect(0, 0, this.canvas.width, this.canvas.height, 'transparent');
        this.snake.draw();
        if (this.gameOver) {
            this.board.printGameOver();
        }
        this.board.printScore(this.snake.score, this.highscore);
        if (!this.gameOver) {
            this.apple.draw();
        }
    }

    public onEvent(event: KeyboardEvent) {
        if (!this.gameOver) {
            setTimeout(() => {
                if (event.keyCode == 37 && this.snake.rotateX !== 1) {
                    this.snake.rotateX = -1;
                    this.snake.rotateY = 0;
                }
                if (event.keyCode == 38 && this.snake.rotateY !== 1) {
                    this.snake.rotateX = 0;
                    this.snake.rotateY = -1;
                }
                if (event.keyCode == 39 && this.snake.rotateX !== -1) {
                    this.snake.rotateX = 1;
                    this.snake.rotateY = 0;
                }
                if (event.keyCode == 40 && this.snake.rotateY !== -1) {
                    this.snake.rotateX = 0;
                    this.snake.rotateY = 1;
                }
            }, 1);
        }

        if (event.keyCode == 82) {
            this.restart();
        }
    }

    private restart() {
        this.gameOver = false;
    }
}
