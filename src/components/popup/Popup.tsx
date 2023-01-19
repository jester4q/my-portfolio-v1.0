import { useCallback, useEffect, useRef, useState, CSSProperties } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { match } from '../../utils/match';
import PopupProvider from './PopupProvider';
import { PopupConfig, PopupPosition } from './types';

import './popup.scss';

enum DialogStateEnum {
    Open,
    Closed,
}

let currentId = 0;

function nextId() {
    return ++currentId;
}

export function useId() {
    const [id, setId] = useState(() => nextId());

    useEffect(() => {
        if (id === null) setId(nextId());
    }, [id]);

    return id != null ? '' + id : undefined;
}

function useLatestValue<T>(value: T) {
    const cache = useRef(value);
    useEffect(() => {
        cache.current = value;
    }, [value]);
    return cache;
}

function useEvent<F extends (...args: any[]) => any, P extends any[] = Parameters<F>, R = ReturnType<F>>(cb: (...args: P) => R) {
    const cache = useLatestValue(cb);
    return useCallback((...args: P) => cache.current(...args), [cache]);
}

export default function Popup(
    props: {
        id?: string;
        open: boolean;
        config: PopupConfig;
        onClose(): void;
        onSubmit?(): void;
    } & React.ComponentProps<any>,
) {
    const internalId = useId();
    const { id = `popup-${internalId}`, open, onClose, onSubmit = () => onClose(), config, children, ...theirProps } = props;

    const internalPopupRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(internalPopupRef, () => onClose());

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') onClose();
    }, []);

    useEffect(() => {
        if (open) {
            document.addEventListener('keydown', handleKeyPress);
            // remove the event listener
            return () => {
                document.removeEventListener('keydown', handleKeyPress);
            };
        }
    }, [handleKeyPress, open]);

    const style: CSSProperties = {
        backgroundColor: config.showOverlay ? 'rgba(23, 23, 23, 0.8)' : 'rgba(0, 0, 0, 0)',
        justifyContent: match(config.positionX || PopupPosition.center, {
            [PopupPosition.left]: 'left',
            [PopupPosition.right]: 'right',
            [PopupPosition.center]: 'center',
        }),
        alignItems: match(config.positionY || PopupPosition.center, {
            [PopupPosition.left]: 'flex-start',
            [PopupPosition.right]: 'flex-end',
            [PopupPosition.center]: 'center',
        }),
    };

    return (
        <>
            {open && (
                <PopupProvider popupId={id}>
                    <div className="popup__overlay" style={style}>
                        <article className="popup__container" ref={internalPopupRef}>
                            {config.showHeader && (
                                <header className="popup__header">
                                    <h1>{config.title}</h1>
                                    <button className="popup__close" onClick={() => onClose()}></button>
                                </header>
                            )}
                            <div className="popup__content">{children} </div>
                            {config.showFooter && (
                                <footer className="popup__footer">
                                    <button className="popup__cancel" onClick={onClose}>
                                        Cancel
                                    </button>
                                    <button className="popup__submit" onClick={onSubmit}>
                                        Submit
                                    </button>
                                </footer>
                            )}
                        </article>
                    </div>
                </PopupProvider>
            )}
        </>
    );
}
