export class Event {
    public type: string;
    public speed: number;
    public valueType: string;
    public list: Array<string>;

    constructor(type: string, speed: number, valueType: string, list?: Array<string>) {
        this.type = type;
        this.speed = speed != undefined ? speed : 5;
        this.valueType = valueType != undefined ? valueType : "px";
        this.list = list;
    }
}