const $ = require("jQuery");
import { Scroll } from './class.scroll'


$(document).ready(() => {
    new Scroll({
        elemId: "scroll0",
        text: [""],
        styleInit: ["background: transparent", "height: 100%"],
        styleInitInside: ["height: 1000px"]
    });

    const audioSkyrim = new Audio('../audios/skyrim.mp3');
    audioSkyrim.volume = 0.4;
    new Scroll({
        elemId: "scrollIntro",
        text: [""],
        //audio: audioSkyrim,
        height: 10000,
        styleInit: [
            "border: 0",
            "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
            "height: 400px",
        ],
        styleInitInside: [
            "background-image: url('https://i.gyazo.com/77c27a85a9138471e0891000f317b7b7.png')",
            "margin-block-start: -1em;",
            "font-family: FreeMono, monospace",
            "padding-left: 20px",
            "padding-right: 20px"
        ]
    });

    new Scroll({
        elemId: "scroll1",
        gifUrl: "https://i.gifer.com/8vGN.gif"
    });

    new Scroll({
        elemId: "scroll10",
        events: [{ type: "transform", speed: 2 }]
    });

    new Scroll({
        elemId: "scroll2",
        events: [
            { type: "margin-top", speed: 10 },
            { type: "margin-left", speed: 10 }
        ],
    });

    new Scroll({
        elemId: "scroll3",
        height: 80000,
        events: [
            { type: "width", speed: -2 },
            { type: "height", speed: -5 },
            { type: "margin-left", speed: 5 }
        ]
    });

    new Scroll({
        elemId: "scroll4",
        text: ["", ""],
        changeText: [0, 1],
    });

    new Scroll({
        elemId: "scroll5",
        text: ["Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>"],
        events: [
            { type: "line-height", speed: 5 }, 
            {type: "letter-spacing", speed:1}
        ],
        styleInit: ["line-height: 0px", "padding-top:20px"]
    });

    const door =
        String.raw`           ______        <br>` +
        String.raw`        ,-' ;  ! '-.      <br>` +
        String.raw`       / :  !  :  . \     <br>` +
        String.raw`      |_ ;   __:  ;  |    <br>` +
        String.raw`      )| .  :)(.  !  |    <br>` +
        String.raw`      |"    (##)  _  |    <br>` +
        String.raw`      |  :  ;''  (_) (    <br>` +
        String.raw`      |  :  :  .     |    <br>` +
        String.raw`      )_ !  ,  ;  ;  |    <br>` +
        String.raw`      || .  .  :  :  |    <br>` +
        String.raw`      |" .  |  :  .  |    <br>` +
        String.raw`      |____.-----.___|`

    const shrek =
        String.raw`                    ,-'     '._ <br>` +
        String.raw`                 ,'           '.        ,-. <br>` +
        String.raw`               ,'               \       ),.\ <br>` +
        String.raw`    ,.       /                  \     /(  \; <br>` +
        String.raw`   /'\\     ,o.        ,ooooo.   \  ,'  '-') <br>` +
        String.raw`   )) )'. d8P"Y8.    ,8P"""""Y8.  ''  .--"' <br>` +
        String.raw`   ('-'   'Y'  'Y8    dP       ''     / <br>` +
        String.raw`    '----.(   __ '    ,' ,---.       ( <br>` +
        String.raw`           ),--.'.   (  ;,---.        ) <br>` +
        String.raw`          / \O_,' )   \  \O_,'        | <br>` +
        String.raw`      ;  '-- ,'       '---'        | <br>` +
        String.raw`|    -'         '.           | <br>` +
        String.raw`_;    ,            )          : <br>` +
        String.raw`_.'|     '.:._   ,.::" '..       | <br>` +
        String.raw`--'   |   .'     """         '      |'. <br>` +
        String.raw`|  :;      :   :     _.       |''.''.-'--. <br>` +
        String.raw`|  ' .     :   :__.,'|/       |  \ <br>` +
        String.raw`'     \--.__.-'|_|_|-/        /   ) <br>` +
        String.raw`\     \_   '--^"__,'        ,    | <br>` +
        String.raw`-   - ;  '    '--^---'          ,'     | <br>` +
        String.raw`\  '                    /      / <br>` +
        String.raw`\   '    _ _          / <br>` +
        String.raw`\           '       / <br>` +
        String.raw`\           '    ,' <br>` +
        String.raw`'.       ,   _,' <br>` +
        String.raw`       '-.___.---' <br>`;


    let audioUrl = require('../audios/somebody.mp3');
    //@ts-ignore
    const audioShrek = new Audio(audioUrl.default);
    audioShrek.volume = 0.5;
    new Scroll({
        elemId: "extra1",
        text: ["Scroll Down<br><br>(if you haven't interacted with the page, click here to start audio)", door, shrek],
        changeText: [0, 1, 60],
        height: 3000,
        gifUrl: "https://i.imgur.com/BO1P1bi.gif",
        audio: audioShrek,
        audioTime: [{ start: 1, duration: 800 }, { start: 2000 }]
    });




    //RANDOM

    $("#gotoRandom").click(function() {
        $('#scroll0').find(".nodescroll0").animate({
            scrollTop: $("#random").offset().top-100
        }, 1000);
    });

    $("#generate").click(() => generateRandom());
    $("#numberEvents").on("input", ()=> generateRandom($("#numberEvents").val()))
    generateRandom();

    function generateRandom(numEvents?) {
        $("#scrollRandom").html("");
        const attr = $("#scrollRandom")[0].style;
        const list = [];
        for (var key in attr) {
            list.push(key);
        }

        const randomEvents = numEvents == undefined ? Math.floor(Math.random() * 4) + 4 : numEvents;
        $("#numberEvents").val(randomEvents)
        const attrList = getRandom(list, randomEvents);
        let string = '"events": [';
        attrList.forEach(attr => {
            const speed = Math.floor(Math.random() * 5) + 1;
            string += '\n\t\t{"type": "' + attr + '", "speed":' + speed + '},'
        })
        string = string.substring(0, string.length - 1);
        string += "\n\t]";

        $(".code").val(`
new Scroll({
    "elemId": "scrollRandom",
    "text":["<br><br><br>Klaatu barada nikto<br> Klaatu barada nikto<br> Klaatu barada nikto<br> Klaatu barada nikto<br> Klaatu barada nikto"],
    `+ string + `
});`)

        let code = $('.code').val().split("new Scroll({")[1].split("})")[0];
        new Scroll(JSON.parse("{" + code + "}"));

        $('.code').on("input", (e) => {
            $("#scrollRandom").html("");
            let code = $('.code').val().split("new Scroll({")[1].split("})")[0].replace(/ /g, '').replace(/\r?\n|\r/g, '');
            new Scroll(JSON.parse("{" + code + "}"));
        });

        $(document).delegate('.code', 'keydown', function (e) {
            var keyCode = e.keyCode || e.which;

            if (keyCode == 9) {
                e.preventDefault();
                var start = this.selectionStart;
                var end = this.selectionEnd;

                // set textarea value to: text before caret + tab + text after caret
                $(this).val($(this).val().substring(0, start)
                    + "\t"
                    + $(this).val().substring(end));

                // put caret at right position again
                this.selectionStart =
                    this.selectionEnd = start + 1;
            }
        });
    }
});

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}