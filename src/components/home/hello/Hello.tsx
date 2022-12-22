import React, { useEffect } from 'react';
import './hello.scss';

export default function Hello() {
    const helloBlockRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const helloElement = helloBlockRef.current;
        if (helloElement) {
            const animateBlocks = helloElement.getElementsByClassName('hello__animate');
            for (let i = 0; i < animateBlocks.length; i++) {
                animateBlocks[i].classList.add('hello__animated');
            }
        }
    }, []);
    return (
        <section className="hello container" ref={helloBlockRef}>
            <div className="hello__animate hello__row1">
                <h1 className="">Let's implement</h1>
            </div>
            <div className="hello__animate hello__row2">
                <h1 className="">you project</h1>
            </div>
            <div className="hello__animate hello__row3">
                <h1 className="">together</h1>
            </div>
            <div className="hello__ican">
                <ul>
                    <li>Web development</li>
                    <li>Bots, plugins and scripts</li>
                    <li>Optimization and bug fixing</li>
                </ul>
            </div>
        </section>
    );
}
