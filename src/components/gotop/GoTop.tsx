import { useEffect, useRef } from 'react';
import './gotop.scss';

export default function GoTop() {
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!buttonRef.current) {
            return;
        }
        const container = buttonRef.current;
        const button = container.querySelector('.gotop__arrow');
        const windowOffset = window.innerHeight;

        window.addEventListener(
            'scroll',
            t_throttle(function () {
                if (window.pageYOffset > windowOffset) {
                    container.style.display = 'block';
                } else {
                    t890__fadeOut(container);
                }
            }, 200),
        );
        button!.addEventListener('click', function () {
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (isSafari) {
                t890__animateScrollPolyfill(0);
            } else {
                t890__scrollToTop();
            }
        });
    });

    return (
        <div className="gotop" ref={buttonRef}>
            <div className="gotop__arrow"></div>
        </div>
    );
}

function t890__fadeOut(el: HTMLDivElement) {
    if (el.style.display === 'none') return;
    let opacity = 1;
    const timer = setInterval(function () {
        el.style.opacity = opacity.toString();
        opacity -= 0.1;
        if (opacity <= 0.1) {
            clearInterval(timer);
            el.style.display = 'none';
            el.style.opacity = '';
        }
    }, 20);
}
function t890__scrollToTop() {
    //if (!!document.documentMode) {
    //    window.scrollTo(0, 0);
    //} else {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
    });
    //}
}
function t890__animateScrollPolyfill(target: number) {
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
    );
    const bottomViewportPoint = documentHeight - document.documentElement.clientHeight;
    if (target > bottomViewportPoint) target = bottomViewportPoint;
    if (target === window.pageYOffset) return !1;
    const currentPosition = window.pageYOffset;
    const step = (target - currentPosition) / 30;
    let difference = window.pageYOffset;
    const timerID = setInterval(function () {
        difference += step;
        window.scrollTo(0, difference);
        document.body.setAttribute('data-scrollable', 'true');
        if ((target - currentPosition < 0 && window.pageYOffset <= target) || (target - currentPosition > 0 && window.pageYOffset >= target)) {
            clearInterval(timerID);
            document.body.removeAttribute('data-scrollable');
        }
    }, 10);
}

function t_throttle(fn: Function, threshhold: number, scope?: Function) {
    let last: number;
    let deferTimer: NodeJS.Timeout;
    threshhold || (threshhold = 250);
    return function (...args: any[]) {
        // @ts-ignore
        const context: Function = scope || this;
        const now = +new Date();
        //const args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}
