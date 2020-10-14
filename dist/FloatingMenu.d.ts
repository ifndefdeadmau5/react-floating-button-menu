export declare const DIRECTIONS: {
    up: string;
    down: string;
    left: string;
    right: string;
};
export declare enum Directions {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}
export interface FloatingMenuProps {
    children: JSX.Element[] | JSX.Element | string;
    spacing?: number;
    slideSpeed?: number;
    direction?: Directions;
    isOpen: boolean;
}
declare const FloatingMenu: ({ slideSpeed, direction, isOpen, spacing, children, ...rest }: FloatingMenuProps) => JSX.Element;
export default FloatingMenu;
