import { Directions } from './FloatingMenu';
export interface ChildButtonProps {
    icon?: any;
    direction?: Directions;
    index?: number;
    size?: number;
    spacing?: number;
    isOpen?: boolean;
    onClick?: any;
    background?: string;
}
declare const ChildButton: ({ direction, index, size, spacing, isOpen, onClick, icon, ...rest }: ChildButtonProps) => JSX.Element;
export default ChildButton;
