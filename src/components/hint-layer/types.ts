export interface IHintLayer {
    onSkipButtonClick: () => void;
    shouldAppearOnScreen: boolean;
}

export enum MountState {
    enterActive = "enter-active",
    enterDone = "enter-done",
    exitActive = "exit-active",
    exitDone = "exit-done",
}
