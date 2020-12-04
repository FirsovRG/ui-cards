export interface ICard {
    isActive: boolean;
    setActive: () => void;
    isFocused: boolean;
    setFocused: () => void;
    reference: React.RefObject<HTMLDivElement>;
}
