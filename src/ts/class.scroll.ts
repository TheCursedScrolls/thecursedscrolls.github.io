const $ = require("jQuery");
import { IScroll } from './interface.scroll';
import { Event } from './class.event';
import { IAudioTime } from './interface.audioTime'

export class Scroll {
    private lastScrollTop: number;
    private nScroll: number;
    private node;
    private box;
    private events: Array<Event>;
    private changeText: Array<number>;
    private height: number;
    private audio: HTMLAudioElement;
    private audioTime: Array<IAudioTime>;

    constructor(scrollData) {
        const scroll: IScroll = scrollData;
        this.lastScrollTop = 0;
        this.nScroll = 0;
        this.changeText = scroll.changeText;

        this.node = $(document.createElement("div"));
        this.node.addClass("main");
        this.events = [];

        this.box = $(document.createElement("div"));
        this.box.addClass("box");
        if(scrollData.styleInitInside != undefined)
            scrollData.styleInitInside.forEach( attr => this.box[0].style.cssText += attr+"!important")
        this.height = scroll.height != undefined ? scroll.height : 2000;
        this.box.css("height", this.height + "px");

        this.events = [];

        if (scroll.text != undefined) {
            const topTextSpan = $(document.createElement("span"));
            topTextSpan.html(scroll.text[0]);
            this.box.append(topTextSpan);

            if (scroll.text.length > 1) {
                const event: Event = new Event("ascii", 2, null, scroll.text);
                this.events.push(event);
            }
        }

        if (scroll.events != undefined) {
            scroll.events.forEach(event => this.events.push(new Event(event.type, event.speed, event.valueType)));
        }
        this.loadEvents();
        this.node.append(this.box);

        const content = $("#" + scroll.elemId).html();

        if (content != "") {
            $("#" + scroll.elemId).html("");
            this.box.append(content);
            $("html").css("overflow", "hidden");
        }
        $("#" + scroll.elemId).append(this.node);

        this.audio = scroll.audio;
        this.pos(scroll.l, scroll.t);
        this.size(scroll.w, scroll.h);

        if (scroll.gifUrl != undefined) {
            this.node.addClass("scrollImage");
            this.createStyle('.scrollImage_' + scroll.elemId + '::-webkit-scrollbar-thumb{background-image: url("' + scroll.gifUrl + '")}');
            this.node.addClass('scrollImage_' + scroll.elemId);
        }

        if (scroll.styleInit != undefined) {
            scroll.styleInit.forEach(prop => {
                this.createStyle('.node' + scroll.elemId + "{" + prop + "}");
            })
            this.node.addClass('node' + scroll.elemId);
        }

        this.audioTime = scroll.audioTime;
    }

    private loadEvents() {
        this.node.unbind("scroll");
        this.node.scroll(() => {
            //Init scroll event
            const st = this.node.scrollTop();
            const down = st > this.lastScrollTop ? 1 : -1;
            this.lastScrollTop = st;
            this.nScroll++;

            if (this.audio != undefined) {
                if (this.audioTime == undefined) {
                    this.audio.play();
                } else {
                    const audioTime = this.audioTime.find(audioTime => audioTime.start < st);
                    if (audioTime != null) {
                        audioTime.start = Math.min();
                        this.audio.play();
                        if (audioTime.duration != undefined)
                            setTimeout(() => this.audio.pause(), audioTime.duration);
                    }
                }
            }
            this.events.forEach(event => {
                //Si es evento ascii
                if (event.type == "ascii") {
                    for (let i = 0; i < event.list.length; i++) {
                        const scroll = this.changeText[i];
                        if ((st / this.height) * 100 > scroll) {
                            this.addAscii(event.list[i], st);
                        }
                    };
                }
                else if (event.type == "transform") {
                    const deg = this.getCurrentRotation(this.node[0]);
                    this.node.css("transform", "rotate("+(deg+event.speed*down)+"deg)")
                }
                else if (event.type == "background") {
                    const speed = event.speed;
                    let color = this.node.css("background-color");
                    color = color.split("rgb(")[1];
                    color = color.split(")")[0];
                    color = color.split(",");
                    const r = +color[0] + Math.floor(Math.random() * speed) * Math.floor(Math.random() * 2) == 0 ? -1 : 1;
                    const g = +color[1] + Math.floor(Math.random() * speed) * Math.floor(Math.random() * 2) == 0 ? -1 : 1;
                    const b = +color[2] + Math.floor(Math.random() * speed) * Math.floor(Math.random() * 2) == 0 ? -1 : 1;

                    const newColor = "rgba(" + r + "," + g + "," + b + ")";
                    //this.node.css("background-color", newColor);

                }
                else {
                    this.connectAttr(down, event.type, event.speed, event.valueType, st);
                }

            });
        });
    }

    private connectAttr(down: number, attr: string, speed: number, valueType: string, st: number) {
        const value = this.node.css(attr).split(valueType)[0];
        if (!isNaN(+value + down * speed))
            this.node.css(attr, (+value + down * speed) + valueType);
        else
            this.node.css(attr, 0 + valueType);
    }

    private addAscii(ascii: string, st: number) {
        this.box.html("");
        this.node.html("");

        const top = 50 + st;
        const left = 0;

        const text = '<div style="margin-top:' + top + 'px; margin-left:' + left + 'px; font-family: monospace; white-space: pre;">' + ascii + "</div>"
        this.node.append(text)
        this.node.append(this.box);

    }

    private pos(l: string, t: string) {
        this.node.css("left", l);
        this.node.css("top", t);
    }

    private size(w: string, h: string) {
        this.node.css("height", h);
        this.node.css("width", w);
    }

    private createStyle(style: string) {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'data:text/css,' + escape(style);  // IE needs this escaped
        head.appendChild(link);
    }

    private getCurrentRotation(el) {
        var st = window.getComputedStyle(el, null);
        var tm = st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform") ||
            "none";
        if (tm != "none") {
            var values = tm.split('(')[1].split(')')[0].split(',');
            //@ts-ignore
            var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
        }
        return 0;
    }
}