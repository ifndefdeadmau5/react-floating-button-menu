export interface MainButtonProps {
    iconActive: any;
    iconResting: any;
    isOpen?: boolean;
    background: string;
    onClick: any;
    size: number;
}
declare const MainButton: ({ iconResting, iconActive, isOpen, ...rest }: MainButtonProps) => JSX.Element;
export default MainButton;
