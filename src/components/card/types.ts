export interface ICard {
    isActive: boolean;
    setActive: () => void;
    reference: React.RefObject<HTMLDivElement>;
}
