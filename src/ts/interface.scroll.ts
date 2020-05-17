import { IAudioTime } from "./interface.audioTime";

export interface IScroll {
    elemId: string;
    text?: Array<string>;
    changeText?: Array<number>;
    events?: Array<any>;
    styleInit: Array<string>;
    height?: number;
    audio?: HTMLAudioElement;
    audioTime?: Array<IAudioTime>;
    l?: string;
    t?: string;
    w?: string;
    h?: string;
    gifUrl: string;
}