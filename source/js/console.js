var now1 = new Date();

function createtime1() {
    var grt = new Date("02/05/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到⚡Ly0nx's Tech⚡`,
        `Shhhhhh...`,
        `
                                        
    ███            ████               
     ██    ██  ██ ██  ██ █████  ██  ██ 
     ██    ██  ██ ██ ███ ██  ██  ████  
     ██    ██  ██ ███ ██ ██  ██   ██   
     ██     █████ ██  ██ ██  ██  ████  
     █████    ██   ████  ██  ██ ██  ██ 
            ████                                                                    
                                              
`,
        "本站已秘密运作",
        dnum,
        "天了",
        "©2023 By Ly0nx",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「非正常人类」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WARNING %c I'm Calling 911...", "color:white; background-color:#FF0000", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c  Powered by Ly0nx %c 你正在访问⚡Ly0nx's Tech⚡",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c Detected %c 监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c Executing %c 监控行为中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };