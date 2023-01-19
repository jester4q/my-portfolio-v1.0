export type PopupConfig = {
    title: string;
    showHeader: boolean;
    showFooter: boolean;
    positionX: PopupPosition;
    positionY: PopupPosition;
    padding: string;
    showOverlay: boolean;
};

export enum PopupPosition {
    center = 'center',
    right = 'right',
    left = 'left',
}
