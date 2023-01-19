import React from 'react';
import { SnakeGame } from '../../snake-game';
import './snake-game-board.scss';

export function SnakeGameBoard() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const gameRef = React.useRef<SnakeGame>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        console.log(canvas);
        gameRef.current && gameRef.current.stop();
        //@ts-ignore
        gameRef.current = null;
        if (canvas) {
            const displayHeight = canvas.clientHeight;
            const displayWidth = canvas.clientWidth;
            console.log('--------', displayWidth, displayHeight);
            canvas.style.width = displayWidth + 'px';
            canvas.style.height = displayHeight + 'px';
            canvas.width = displayWidth * 2;
            canvas.height = displayHeight * 2;
            //@ts-ignore
            gameRef.current = new SnakeGame(canvas);
            gameRef.current.start();
        }
        return () => {
            gameRef.current && gameRef.current.stop();
        };
    }, []);

    return (
        <article className="snake-game container">
            <h1>Snake Game</h1>

            <canvas className="board" ref={canvasRef}></canvas>
        </article>
    );
}
