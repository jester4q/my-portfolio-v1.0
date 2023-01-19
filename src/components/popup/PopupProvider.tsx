import { createContext, MutableRefObject, ReactNode, useContext, useLayoutEffect, useState } from 'react';

import { createPortal } from 'react-dom';

export default function PopupProvider({ children, popupId }: { children: ReactNode; popupId: string }) {
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
        let element: HTMLElement | null = document.getElementById(popupId);
        let portalCreated = false;
        if (!element) {
            element = createWrapperAndAppendToBody(popupId);
            portalCreated = true;
        }

        setPortalElement(element);

        return () => {
            if (portalCreated && element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [popupId]);

    const createWrapperAndAppendToBody = (elementId: string) => {
        const element = document.createElement('div');
        element.setAttribute('id', elementId);
        document.body.appendChild(element);
        return element;
    };

    return portalElement && createPortal(children, portalElement);
}
