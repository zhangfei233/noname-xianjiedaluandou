import { lib, game, ui, get, ai, _status } from "../../noname.js";
export const type = "extension";
export default function(){
	return {name:"仙界大乱斗",content:function(){
if(lib.config.mode=="brawl"){
if(!lib.storage.scene) lib.storage.scene={};

lib.storage.scene["秒人测试1v7"]={
    name: "秒人测试1v7",
    intro: "先手，1v7（有击杀奖励），胜利条件为第一回合内击杀全部敌人。",
    players: [
        {"name":"random","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true,
    turns: [1,"lose"],
};

lib.storage.scene["秒人测试1v7Plus"]={
    name: "秒人测试1v7Plus",
    intro: "先手，1v7（无击杀奖励），胜利条件为第一回合内击杀全部敌人。",
    players: [
        {"name":"random","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true,
    turns: [1,"lose"],
};

lib.storage.scene["秒人测试1v14"]={
    name: "秒人测试1v14",
    intro: "先手，1v14（有击杀奖励），胜利条件为第一回合内击杀全部敌人。",
    players: [
        {"name":"random","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},

        {"name":"random","name2":"random","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true,
    turns: [1,"lose"],
};

lib.storage.scene["秒人测试1v14Plus"]={
    name: "秒人测试1v14Plus",
    intro: "先手，1v14（无击杀奖励），胜利条件为第一回合内击杀全部敌人。",
    players: [
        {"name":"random","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},

        {"name":"random","name2":"random","identity":"nei","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true,
    turns: [1,"lose"],
};

lib.storage.scene["能力测试1v7"]={
    name: "能力测试1v7",
    intro: "先手，1v7（有击杀奖励），能力测试场景。",
    players: [
        {"name":"random","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true
};

lib.storage.scene["能力测试1v7Plus"]={
    name: "能力测试1v7Plus",
    intro: "先手，1v7（无击杀奖励），能力测试场景。",
    players: [
        {"name":"random","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true
};

lib.storage.scene["能力测试1v14"]={
    name: "能力测试1v14",
    intro: "先手，1v14（有击杀奖励），能力测试场景。",
    players: [
        {"name":"random","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},

        {"name":"random","name2":"random","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true
};

lib.storage.scene["能力测试1v14Plus"]={
    name: "能力测试1v14Plus",
    intro: "先手，1v14（无击杀奖励），能力测试场景。",
    players: [
        {"name":"random","name2":"none","identity":"zhu","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]},

        {"name":"random","name2":"random","identity":"nei","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true
};

lib.storage.scene["抗压测试1v7"]={
    name: "抗压测试1v7",
    intro: "1v7（有击杀奖励），抗压测试场景（主将位于 8 号位）。",
    players: [
        {"name":"random","name2":"none","identity":"fan","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}, // 1号敌人
        {"name":"random","name2":"none","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"fan","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},

        {"name":"random","name2":"none","identity":"zhong","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]} // 主将改为 zhong
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true
};

lib.storage.scene["抗压测试1v7Plus"]={
    name: "抗压测试1v7Plus",
    intro: "1v7（无击杀奖励），抗压测试场景（主将位于 8 号位）。",
    players: [
        {"name":"random","name2":"none","identity":"nei","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}, // 1号敌人
        {"name":"random","name2":"none","identity":"nei","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"none","identity":"nei","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},

        {"name":"random","name2":"none","identity":"zhong","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]}
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true
};

lib.storage.scene["抗压测试1v14"]={
    name: "抗压测试1v14",
    intro: "1v14（有击杀奖励），抗压测试场景（主将位于 8 号位）。",
    players: [
        {"name":"random","name2":"random","identity":"fan","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}, // 1号敌人
        {"name":"random","name2":"random","identity":"fan","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"fan","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},

        {"name":"random","name2":"none","identity":"zhong","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]} // 主将 zhong
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true
};

lib.storage.scene["抗压测试1v14Plus"]={
    name: "抗压测试1v14Plus",
    intro: "1v14（无击杀奖励），抗压测试场景（主将位于 8 号位）。",
    players: [
        {"name":"random","name2":"random","identity":"nei","position":1,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]}, // 1号敌人
        {"name":"random","name2":"random","identity":"nei","position":2,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":3,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":4,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":5,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":6,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},
        {"name":"random","name2":"random","identity":"nei","position":7,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":false,"handcards":[],"equips":[],"judges":[]},

        {"name":"random","name2":"none","identity":"zhong","position":8,"hp":null,"maxHp":null,"linked":false,"turnedover":false,"playercontrol":true,"handcards":[],"equips":[],"judges":[]} // 主将 zhong
    ],
    cardPileTop: [],
    cardPileBottom: [],
    discardPile: [],
    gameDraw: true
};

_status.extensionscene=true;
if(!_status.extensionmade) _status.extensionmade=[];
[
 "秒人测试1v7","秒人测试1v7Plus","秒人测试1v14","秒人测试1v14Plus",
 "能力测试1v7","能力测试1v7Plus","能力测试1v14","能力测试1v14Plus",
 "抗压测试1v7","抗压测试1v7Plus","抗压测试1v14","抗压测试1v14Plus"
].forEach(function(n){ _status.extensionmade.push(n); });

}},package:{
    character: {
        character: {
            "武四郎": ["male","qun","5/7",["dcjincui","dcqingshi","dczhizhe","dcxiongmu","dczhangcai","dcruxian","dcwuyou","dcyixian","dcchaozhen","dclianjie","dcjiangxian"],["des:武诸葛亮+武陆逊+武关羽+武皇甫嵩","ext:仙界大乱斗/武四郎.jpg","die:ext:仙界大乱斗/audio/die/武四郎.mp3"]],
            "四血模板": ["male","wu",4,["择摸"],["des:4血摸X模板将","ext:仙界大乱斗/四血模板.jpg","die:ext:仙界大乱斗/audio/die/四血模板.mp3"]],
            "界曹宪": ["female","wei",3,["dclingxi","dczhifou","先知"],["des:先发育一轮的曹宪你怕不怕","ext:仙界大乱斗/界曹宪.jpg","die:ext:仙界大乱斗/audio/die/界曹宪.mp3"]],
            "界曹纯": ["male","wei",4,["装甲"],["des:完全体新杀曹纯","ext:仙界大乱斗/界曹纯.jpg","die:ext:仙界大乱斗/audio/die/界曹纯.mp3"]],
            "合黄盖": ["male","wu",4,["kurou","zhaxiang"],["des:黄盖界黄盖","ext:仙界大乱斗/合黄盖.jpg","die:ext:仙界大乱斗/audio/die/合黄盖.mp3"]],
            "仙帅·吕玲绮": ["female","shen",5,["仙帅","zhuangpo","zhenlue","玲舞","绮靡","jlsgsy_xiuluo","渐专"],["des:仙界元帅吕玲绮","ext:仙界大乱斗/仙帅·吕玲绮.jpg","die:ext:仙界大乱斗/audio/die/仙帅·吕玲绮.mp3"]],
            "仙帝·曹金玉": ["female","shen","9/9",["xiandi仙帝"],["des:仙界之王金玉大帝","ext:仙界大乱斗/仙帝·曹金玉.jpg","die:ext:仙界大乱斗/audio/die/仙帝·曹金玉.mp3"]],
            "酒仙·庞凤衣": ["female","shen","3/3",["骰酒","酒绝","酒仙"],["des:来到仙界后，凡人之酒被替换为玉液琼浆，酗酒的庞凤衣因此练成酒仙。"]],
        },
        translate: {
            "武四郎": "武四郎",
            "四血模板": "四血模板",
            "界曹宪": "界曹宪",
            "界曹纯": "界曹纯",
            "合黄盖": "合黄盖",
            "仙帅·吕玲绮": "仙帅·吕玲绮",
            "仙帝·曹金玉": "仙帝·曹金玉",
            "仙界大乱斗": "仙界大乱斗",
            "酒仙·庞凤衣": "酒仙·庞凤衣",
        },
    },
    card: {
        card: {
        },
        translate: {
        },
        list: [],
    },
    skill: {
        skill: {
            "择摸": {
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                filter: function(event,player){
                    return game.hasPlayer(current=>current!=player)&&(event.name!='phase'||game.phaseNumber==0);
                },
                marktext: "牌",
                mark: true,
                intro: {
                    markcount(storage,player){
                        return player.countMark('mubanmopai');
                    },
                    content(storage,player){
                        return '摸牌数增加'+(player.countMark('mubanmopai'));
                    },
                },
                async content(event,trigger,player){
                    let x_num=0;
                        while(x_num<20){
                    x_num++;
                    if (! (await player.chooseBool('是否令摸牌数+1？ 当前为+'+player.countMark('mubanmopai'))).result.bool) return;
                    player.addMark('mubanmopai',1,false);      
                    }
                },
                group: ["择摸_draw"],
                subSkill: {
                    draw: {
                        audio: "ext:缝合怪:2",
                        audioname: ["sp_lvmeng"],
                        trigger: {
                            player: "phaseDrawBegin2",
                        },
                        frequent: true,
                        filter(event,player){
                            return !event.numFixed;
                        },
                        async content(event,trigger,player){
                            trigger.num+=player.countMark('mubanmopai');
                        },
                        ai: {
                            threaten: 1.3,
                        },
                        "_priority": 0,
                        sub: true,
                        sourceSkill: "择摸",
                    },
                },
                "_priority": 0,
            },
            "先知": {
                trigger: {
                    global: "phaseBefore",
                    player: "enterGame",
                },
                filter: function(event,player){
                    return player.maxHp>0&&(event.name!='phase'||game.phaseNumber==0);;
                },
                direct: true,
                content: function*(event,map){
                    var player=map.player,num=player.maxHp*2;
                    player.draw(6);
                    var result=yield player.chooseCard(get.prompt('dclingxi'),'将至多'+get.cnNumber(num)+'张牌称为“翼”置于武将牌上','he',[1,num]).set('suits',(()=>{
                        let suits=[];
                        player.getExpansions('dclingxi').forEach(i=>{
                            suits.add(get.suit(i,false));
                        });
                        return suits;
                    })()).set('triggerName',event.triggername);
                    if(result.bool){
                        player.logSkill('dclingxi');
                        player.addToExpansion(result.cards,player,'give').gaintag.add('dclingxi');
                    }
                },
                marktext: "翼",
                intro: {
                    content: "expansion",
                    markcount: "expansion",
                },
                onremove: function(player,skill){
                    var cards=player.getExpansions(skill);
                    if(cards.length) player.loseToDiscardpile(cards);
                },
                group: "dclingxi_effect",
                "_priority": 0,
            },
            "装甲": {
                group: ["xinshanjia_count"],
                locked: false,
                mod: {
                    aiValue: function(player,card,num){
                        if((player.storage.xinshanjia||0)<3&&get.type(card)=='equip'&&!get.cardtag(card,'gifts')){
                            return num/player.hp;
                        }
                    },
                },
                audio: "shanjia",
                trigger: {
                    player: "phaseUseBegin",
                },
                intro: {
                    content: "本局游戏内已失去过#张装备牌",
                },
                frequent: true,
                sync: function(player){
                    var history=player.actionHistory;
                    var num=0;
                    for(var i=0;i<history.length;i++){
                        for(var j=0;j<history[i].lose.length;j++){
                            if(history[i].lose[j].parent.name=='useCard') continue;
                            num+=history[i].lose[j].cards2.filter(function(card){
                                return get.type(card,false)=='equip';
                            }).length;
                        }
                    }
                    player.storage.xinshanjia=num;
                    if(num>0) player.markSkill('xinshanjia');
                },
                content: function (){
                    'step 0'
                    player.draw(3);
                    'step 1'
                    lib.skill.xinshanjia.sync(player);
                    var num=0;
                    'step 2'
                         player.addTempSkill('xinshanjia_sha','phaseUseAfter');
                         player.addTempSkill('xinshanjia_nodis','phaseUseAfter');
                         player.chooseUseTarget({name:'sha'},'是否视为使用一张【杀】？',false);
                    
                },
                ai: {
                    threaten: 3,
                    noe: true,
                    reverseOrder: true,
                    skillTagFilter: function(player){
                        if(player.storage.xinshanjia>2) return false;
                    },
                    effect: {
                        target: function(card,player,target){
                            if(player.storage.xinshanjia<3&&get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
                        },
                    },
                },
                subSkill: {
                    count: {
                        forced: true,
                        silent: true,
                        popup: false,
                        trigger: {
                            player: "loseEnd",
                        },
                        filter: function(event,player){
                            return event.cards2&&event.cards2.length>0;
                        },
                        content: function (){
                            lib.skill.xinshanjia.sync(player);
                        },
                        sub: true,
                        "_priority": 1,
                        sourceSkill: "装甲",
                    },
                    sha: {
                        mark: true,
                        charlotte: true,
                        intro: {
                            content: "使用【杀】的次数上限+1",
                        },
                        mod: {
                            cardUsable: function(card,player,num){
                                if(card.name=='sha') return num+1;
                            },
                        },
                        sub: true,
                        "_priority": 0,
                        sourceSkill: "装甲",
                    },
                    nodis: {
                        mark: true,
                        charlotte: true,
                        intro: {
                            content: "使用牌无距离限制",
                        },
                        mod: {
                            targetInRange: ()=>true,
                        },
                        sub: true,
                        "_priority": 0,
                        sourceSkill: "装甲",
                    },
                },
                "_priority": 0,
            },
            "玲舞": {
                audio: "ext:缝合怪:2",
                trigger: {
                    player: "damageEnd",
                    source: "damageSource",
                },
                forced: true,
                locked: false,
                content: function(){
                    player.draw(3*(trigger.num)).gaintag=['玲舞'];
                    player.when({source:'damageBegin2'})
                        .then(()=>{
                            var cards=player.getCards('h',card=>card.hasGaintag('玲舞')&&lib.filter.cardDiscardable(card,player,'玲舞'));
                            if(cards.length) player.discard(cards);
                        })
                },
                ai: {
                    maixie: true,
                },
                "_priority": 0,
            },
            "绮靡": {
                audio: "ext:缝合怪:2",
                trigger: {
                    source: "damageBegin1",
                },
                filter: function(event,player){
                    return player.countDiscardableCards(player,'he')>0&&player!=event.player;
                },
                check: function(event,player){
                    return get.attitude(player,event.player)<0&&player.countCards('he',card=>lib.filter.cardDiscardable(card,player,'dcyiyong')&&get.value(card,player)<7)>0;
                },
                logTarget: "player",
                content: function(){
                    'step 0'
                    event.list=[player];
                    event.cards0=[];event.cards1=[];
                    if(trigger.player.countDiscardableCards(trigger.player,'he')>0){
                        event.list.push(trigger.player);
                    }
                    if(!event.isMine()&&!event.isOnline()) game.delayx();
                    player.chooseCardOL(event.list,'he',true,[1,Infinity],'绮靡：弃置任意张牌',(card,player,target)=>{
                        return lib.filter.cardDiscardable(card,player,'dcyiyong');
                    }).set('ai',card=>{
                        var evt=_status.event.getParent(2);
                        var source=evt.player,player=_status.event.player,target=evt.list[1];
                        if(!target) return get.unuseful(card);
                        if(player==source){
                            var total=0,need=0;
                            target.countCards('he',card=>{
                                if(lib.filter.cardDiscardable(card,target,'dcyiyong')&&get.value(card)<5) need+=get.number(card);
                            });
                            for(var i of ui.selected.cards) total+=get.number(i);
                            if(total>=need+5) return 0;
                            var val=6;
                            if(target.hp<=2&&!target.hasSkillTag('filterDamage',null,{
                                player:player,
                                card:evt.getTrigger().card,
                            })) val+=2+get.number(card)/5;
                            if(target.countCards('he',card=>get.value(card)<5)>=3) val-=3+get.number(card)/5;
                            return val-get.value(card);
                        }
                        if(ui.selected.cards.length>1&&ui.selected.cards.length+2>=source.countCards('he')) return 0;
                        if(player.hp<=2&&!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:evt.getTrigger().card,
                        })) return 10-get.value(card);
                        return 5-get.value(card);
                    });
                    'step 1'
                    var lose_list=[],cards=[];
                    for(var i=0; i<result.length; i++){
                        var current=event.list[i],cards2=result[i].cards;
                        cards.push(cards2);
                        event['cards'+i]=cards2;
                        event.cards=cards;
                        lose_list.push([current,cards2]);
                    }
                    game.loseAsync({lose_list:lose_list}).setContent('discardMultiple');
                    'step 2'
                    var getn=function(cards){
                        return cards.map(i=>get.number(i,false)).reduce((p,c)=>p+c,0)
                    }
                    var num0=getn(event.cards0),num1=getn(event.cards1);
                    if(num0<=num1){
                        player.draw((event.cards1.length)*2);
                    }
                    if(num0>=num1){
                        trigger.num+=event.cards0.length;
                    }
                },
                "_priority": 0,
            },
            "渐专": {
                audio: "ext:缝合怪:2",
                trigger: {
                    target: "useCardToTargeted",
                },
                filter(event, player) {
                    return event.player != player && event.player.isIn();
                },
                direct: true,
                async content(event, trigger, player) {
                    let target = trigger.player;
                    let num = 0;
                        game.countPlayer2(current => {
                            num += current.getHistory("useCard").filter(evt => ["basic", "trick"].includes(get.type2(evt.card)) && evt.targets?.includes(player)).length;
                        });
                    let res = await player.chooseToDiscard(1,false,'渐专', '<div class="text center">弃置一张手牌，令对方弃置'+num.toString()+'张牌').forResult();
                    if (res.bool){
                         await target.chooseToDiscard(num, true, "he");                             }
                                           
                },
                "_priority": 0,
            },
            "xiandi仙帝": {
                persevereSkill: true,
                trigger: {
                    player: "phaseZhunbeiBegin",
                },
                mark: true,
                charlotte: true,
                intro: {
                    content(storage, player) {
                        let lines = ["<span class=thundertext>技能升级状况</span>"];
                        if (player.hasSkill("xiandi仙裁") && player.storage.xiandi_xiancai) {
                            lines.push("<span class=firetext>〖仙裁〗</span>"+"可使用次数：" + player.storage.xiandi_xiancai.time + "，选择区域：" + player.storage.xiandi_xiancai.region  + (player.storage.xiandi_xiancai.turn ? "，可以翻面目标" : ""));
                        }
                        if (player.hasSkill("xiandi仙体") && player.storage.xianti_record) {
                            lines.push("<span class=greentext>〖仙体〗</span>"+"已免疫：延时锦囊" + (player.storage.xianti_record.normalSha ? "/普通杀":"")+(player.storage.xianti_record.attrSha? "/属性杀":"") + (player.storage.xianti_record.normalTrick?"/普通锦囊":"")+"。已积攒仙气："+player.storage.extra_xianqi);
                        }
                        if (player.hasSkill("xiandi仙法") && player.storage.xianfa3) {
                            lines.push("<span class=yellowtext>〖仙法〗</span>"+"距离：" + player.storage.xianfa3[0] + "，观看数量：" + player.storage.xianfa3[1] + (player.countMark("xiandi仙法") >= 1 ? "，可执行额外回合" : ""));
                        }
                        if (player.hasSkill("xiandi仙露") && player.storage.xianlu_limit) {
                            lines.push("<span class=bluetext>〖仙露〗</span>"+"可使用次数：" + player.storage.xianlu_limit.time + "，基本牌数值+" + player.storage.xianlu_limit.jiben + "，锦囊牌伤害+" + player.storage.xianlu_limit.jinnang + (player.countMark("xiandi仙露") >= 1 ? "，可视为使用锦囊牌" : ""));
                        }
                        if (player.hasSkill("xiandi仙姿") && player.storage.xianzi_sha) {
                            lines.push("<span class=greentext>〖仙姿〗</span>"+"使用【杀】可选择："+player.storage.xianzi_sha+"项");
                        }
                        if (player.hasSkill("xiandi仙罚")) {
                            lines.push("<span class=firetext>〖仙罚〗</span>"+"可使用次数：" + (1+player.countMark("xiandi仙罚")));
                        }

                        return lines.join("<br>");
                    },
                },
                async content(event, trigger, player) {

                    let xianqi = Math.floor(Math.random() * 5)+1;
                    game.log(player, "获得" + xianqi, "点仙气");
                    if(player.storage.extra_xianqi!=null)
                    {
                        xianqi += player.storage.extra_xianqi;
                        player.storage.extra_xianqi=0;
                    }
                    
                    for(let i=0;i<xianqi;i++)
                    {
                        let list = [];
                        if (player.hasSkill("xiandi仙裁") && player.storage.xiandi_xiancai) list.push("升级〖仙裁〗");
                        if (player.countMark("xiandi仙体") < 3 && player.hasSkill("xiandi仙体")) list.push("升级〖仙体〗");
                        if (player.hasSkill("xiandi仙法") && player.storage.xianfa3 && !(player.countMark("xiandi仙法") >= 1 && player.storage.xianfa3[0]>=10 && player.storage.xianfa3[1]>=36)) list.push("升级〖仙法〗");
                        if (player.hasSkill("xiandi仙露") && player.storage.xianlu_limit) list.push("升级〖仙露〗");
                        if (player.hasSkill("xiandi仙姿") && player.storage.xianzi_sha && player.storage.xianzi_sha<3) list.push("升级〖仙姿〗");
                        if (player.hasSkill("xiandi仙罚")) list.push("升级〖仙罚〗");
                        list.push("摸一张牌");
                        if (list.length) {
                            var result = await player.chooseControl(list).set("prompt", "仙帝：升级技能或摸牌。 剩余仙气："+(xianqi-i)).forResult();
                        }
                        let choice = result.control;
                        if (choice != "摸一张牌") {
                            let skill = null;
                            if (choice == "升级〖仙罚〗") { 
                                player.addMark("xiandi仙罚", 1, false);
                                skill="xiandi仙罚";
                            }
                            else if (choice == "升级〖仙体〗") { 
                                player.addMark("xiandi仙体", 1, false);
                                skill="xiandi仙体";
                                let remain = [];
                                let typetranslation={
                                    normalSha: "普通杀",
                                    attrSha: "属性杀",
                                    normalTrick: "普通锦囊"
                                };
                                if (player.storage.xianti_record)
                                {
                                    Object.keys(player.storage.xianti_record).forEach(t=>{
                                        if(!player.storage.xianti_record[t]) remain.push(typetranslation[t]);
                                    });
                                }
                                if (remain.length)
                                {
                                    let tmp_result = await player.chooseControl(remain).set("prompt", "仙体：选择一种牌对你无效").forResult();
                                    switch (tmp_result.control){
                                        case "普通杀":
                                            player.storage.xianti_record.normalSha=true;
                                            break;
                                        case "属性杀":
                                            player.storage.xianti_record.attrSha=true;
                                            break;
                                        case "普通锦囊":
                                            player.storage.xianti_record.normalTrick=true;
                                            break;
                                    }
                                }
                            }
                            else if (choice == "升级〖仙法〗") {
                                if(!player.storage.xianfa3) continue;
                                skill="xiandi仙法";
                                let tmp_list = []
                                if (player.storage.xianfa3[0]<10) tmp_list.push("距离+2");
                                if (player.storage.xianfa3[1]<36) tmp_list.push("观看数量+6");
                                if (player.countMark("xiandi仙法") < 1) tmp_list.push("可令受伤角色执行额外回合");
                                let tmp_result = await player.chooseControl(tmp_list).set("prompt", "仙法：选择一项升级").forResult();
                                switch (tmp_result && tmp_result.control){
                                        case "距离+2":
                                            player.storage.xianfa3[0]+=2;
                                            break;
                                        case "观看数量+6":
                                            player.storage.xianfa3[1]+=6;
                                            break;
                                        case "可令受伤角色执行额外回合":
                                            player.addMark("xiandi仙法", 1, false);
                                            break;
                                    }
                            }
                            else if (choice == "升级〖仙露〗") {
                                skill="xiandi仙露";
                                let tmp_list = ["使用次数+1","基本牌数值+1","锦囊牌伤害+1"]
                                if (player.countMark("xiandi仙露") < 1) tmp_list.push("可视为使用锦囊牌");
                                let tmp_result = await player.chooseControl(tmp_list).set("prompt", "仙法：选择一项升级").forResult();
                                switch (tmp_result.control){
                                        case "使用次数+1":
                                            player.storage.xianlu_limit.time+=1;
                                            break;
                                        case "基本牌数值+1":
                                            player.storage.xianlu_limit.jiben+=1;
                                            break;
                                        case "锦囊牌伤害+1":
                                            player.storage.xianlu_limit.jinnang+=1;
                                            break;
                                        case "可视为使用锦囊牌":
                                            player.addMark("xiandi仙露", 1, false);
                                            break;
                                    }
                            }
                            else if (choice == "升级〖仙姿〗") {
                                skill="xiandi仙姿";
                                player.storage.xianzi_sha += 1;
                            }
                            else if (choice == "升级〖仙裁〗") {
                                skill="xiandi仙裁";
                                let tmp_list = ["使用次数+1"]
                                if (player.storage.xiandi_xiancai.region < 3) tmp_list.push("选择区域+1");
                                if (player.storage.xiandi_xiancai.turn == false) tmp_list.push("追加翻面");
                                if (tmp_list.length == 1) {
                                    player.storage.xiandi_xiancai.time += 1;
                                }
                                else {
                                    let tmp_result = await player.chooseControl(tmp_list).set("prompt", "仙裁：选择一项升级").forResult();
                                    if (tmp_result.control == "使用次数+1") player.storage.xiandi_xiancai.time += 1;
                                    else if (tmp_result.control == "选择区域+1") player.storage.xiandi_xiancai.region += 1;
                                    else if (tmp_result.control == "追加翻面") player.storage.xiandi_xiancai.turn = true;
                                }
                                
                            }
                            game.log(player, "升级了技能", "#g【" + get.translation(skill) + "】");
                        }
                        else await player.draw();
                    }
                },
                group: ["xiandi仙帝_begin"],
                subSkill: {
                    begin: {
                        trigger: {
                            player: "enterGame",
                            global: "phaseBefore",
                        },
                        filter(event) {
                            return (event.name != "phase" || game.phaseNumber == 0);
                        },
                        forced: true,
                        async content(event, trigger, player){
                            player.addSkill("xiandi仙裁");
                            player.addSkill("xiandi仙体");
                            player.addSkill("xiandi仙法");
                            player.addSkill("xiandi仙露");
                            player.addSkill("xiandi仙姿");
                            player.addSkill("xiandi仙罚");
                        },
                        sub: true,
                        sourceSkill: "xiandi仙帝",
                        "_priority": 0,
                    },
                },
                "_priority": 0,
            },
            "xiandi仙罚": {
                persevereSkill: true,
                enable: "phaseUse",
                usable(skill,player) {
                    return 1 + player.countMark("xiandi仙罚");
                },
                filterCard: true,
                filterTarget(card, player, target){ // 此效果意为需要选择目标，返回值为数组，传参为event.targets。
                    return true;
                },
                selectTarget: 1,
                position: "he",
                selectCard: [1,Infinity],
                async content(event, trigger, player) {
                    await player.discard(event.cards);
                    let list=["造成伤害","令其失去体力"];
                    var result = await player.chooseControl(list).set("prompt","选择一项").forResult();
                    let choice = result.control;
                    if (choice=="造成伤害") await event.targets[0].damage(event.cards.length, player);
                    else await event.targets[0].loseHp(event.cards.length);
                    
                },
                "_priority": 0,
            },
            "xiandi仙体": {
                init(player) {
                    if (!player.storage.xianti_record) {
                    player.storage.xianti_record = {
                        normalSha: false,   // 普通杀
                        attrSha: false,     // 属性杀（火/雷/冰/毒等）
                        delayTrick: true,  // 延时锦囊
                        normalTrick: false, // 普通锦囊
                        };
                    }
                    if (!player.storage.extra_xianqi) player.storage.extra_xianqi=0;
                },
                persevereSkill: true,
                enable: "phaseUse",
                usable: 1,
                filterCard: true,
                filterTarget(card, player, target){ 
                    return true;
                },
                selectTarget: 1,
                selectCard: [1,Infinity],
                position: "he",
                async content(event, trigger, player){
                    let num = event.cards.length;
                    await player.loseHp(num);
                    let list=["增加点"+num+"体力上限","回复"+num+"点体力"];
                    var result = await player.chooseControl(list).set("prompt","选择一项").forResult();
                    let choice = result.control;
                    if (choice==list[0]) await event.targets[0].gainMaxHp(num);
                    else await event.targets[0].recover(event.cards.length);
                },
                onremove(player) {
                    delete player.storage.xianti_record;
                    delete player.storage.extra_xianqi;
                },
                mod: {
                    maxHandcardBase(player, num) {
                        return player.maxHp;
                    },
                },
                group: ["xiandi仙体_turn","xiandi仙体_skip","xiandi仙体_draw","xiandi仙体_invalid","xiandi仙体_limit"],
                subSkill: {
                    turn: {
                        trigger: {
                            player: "turnOverBefore",
                        },
                        filter(event, player) {
                            return !player.isTurnedOver();
                        },
                        forced: true,
                        content(event, trigger, player) {
                            trigger.cancel();
                        },
                        sub: true,
                        sourceSkill: "xiandi仙体",
                        "_priority": 0,
                    },
                    skip: {
                        trigger: {
                            player: ["phaseZhunbeiSkipped","phaseZhunbeiCancelled","phaseJudgeSkipped","phaseJudgeCancelled","phaseDrawSkipped","phaseDrawCancelled","phaseUseSkipped","phaseUseCancelled","phaseDiscardSkipped","phaseDiscardCancelled","phaseJieshuSkipped","phaseJieshuCancelled"],
                        },
                        forced: true,
                        content() {
                            game.log(player, "恢复了", trigger.name);
                            player[trigger.name]();
                        },
                        sub: true,
                        sourceSkill: "xiandi仙体",
                        "_priority": 0,
                    },
                    draw: {
                        trigger: {
                            player: "phaseDrawBegin2",
                        },
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        content(event,trigger,player) {
                            trigger.num+=player.maxHp;
                        },
                        sub: true,
                        sourceSkill: "xiandi仙体",
                        "_priority": 0,
                    },
                    limit: {
                        trigger: {
                            player: "damageBegin4",
                        },
                        priority: -11,
                        forced: true,
                        filter: function (event) {
                            return event.num > 1;
                        },
                        content: function () {
                            trigger.num = 1;
                        },
                        sub: true,
                        sourceSkill: "xiandi仙体",
                        "_priority": -1100,
                    },
                    invalid: {
                        trigger: {
                            target: "useCardToTargeted",
                            player: "addJudgeBefore",
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.name == "addJudge") return true;
                            if (event.player === player || event.target !== player) return false;
                            const card = event.card;
                            const rec = player.storage.xianti_record || {};
                            const rawName = (get.name ? get.name(card, event.player, "raw") : card.name);
                            if (rawName === "sha") {
                            const nature = get.nature && get.nature(card);
                            return nature ? !!rec.attrSha : !!rec.normalSha;
                            }
                            if (get.type(card) === "trick") {
                            const subtype = (get.subtype && get.subtype(card)) || (lib.card[card.name] && lib.card[card.name].subtype);
                            return (subtype === "delay" || subtype === "delayed") ? !!rec.delayTrick : !!rec.normalTrick;
                            } //延时锦囊写的不对，另写了一个代替
                            return false;
                        },
                        content(event, trigger, player) {
                            if (trigger.name == "addJudge") {
                                trigger.cancel();
                                var owner = get.owner(trigger.card);
                                if (owner && owner.getCards("hej").includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
                                else game.cardsDiscard(trigger.card);
                                game.log(trigger.card, "进入了弃牌堆");
                            }
                            else trigger.excluded.add(player);
                            if (player.storage.extra_xianqi != null) player.storage.extra_xianqi+=1;
                            game.log(trigger.card, "对", player, "无效，",player,"获得1点仙气");
                        },
                        sub: true,
                        sourceSkill: "xiandi仙体",
                        "_priority": 0,
                    },
                    nojudge: {
                        sub: true,
                        sourceSkill: "xiandi仙体",
                        "_priority": 0,
                    },
                },
                "_priority": 0,
            },
            "xiandi仙法": {
                persevereSkill: true,
                trigger: {
                    global: "damageEnd",
                },
                filter(event, player) {
                    var list = player.storage.xianfa3;
                    return event.player.isIn() && get.distance(player, event.player) <= list[0];
                },
                logTarget: "player",
                content(event,trigger,player) {
                    "step 0";
                    event.list = player.storage.xianfa3;
                    var cards = get.cards(event.list[1]);
                    event.cards = cards;
                    game.cardsGotoOrdering(cards);
                    var next = player.chooseToMove_new(true, "仙法");
                    next.set("list", [
                        ["牌堆顶的牌", cards],
                        [["交给" + get.translation(trigger.player) + '<div class="text center">任意张' + "</div>"], ['交给自己<div class="text center">至多' + get.cnNumber(Math.floor(event.list[1]/2)) + "张</div>"]],
                    ]);
                    next.set("filterMove", function (from, to, moved) {
                        if (to == 2) return moved[2].length < Math.floor(event.list[1]/2);
                        return true;
                    });
                    next.set("filterOk", function (moved) {
                        return moved[2].length <= Math.floor(event.list[1]/2);
                    });
                    "step 1";
                    if (result.bool) {
                        var moved = result.moved;
                        cards.removeArray(moved[1]);
                        cards.removeArray(moved[2]);
                        while (cards.length) {
                            ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
                        }
                        var list = [[trigger.player, moved[1]]];
                        if (moved[2].length) list.push([player, moved[2]]);
                        game.loseAsync({
                            gain_list: list,
                            giver: player,
                            animate: "draw",
                        }).setContent("gaincardMultiple");
                    }
                    "step 2";
                    if(player.countMark("xiandi仙法") >= 1) player.chooseBool("是否令受伤角色于此回合结束后执行一个额外回合？");
                    "step 3";
                    if(player.countMark("xiandi仙法") >= 1 && result.bool){
                        game.log(trigger.player+"即将执行一个额外回合");
                        //trigger.player.markSkillCharacter("xiandi仙法", event.player, "仙法", "进行一个额外回合");
                        trigger.player.insertPhase();
                    }
                },
                init(player, skill) {
                    if (!player.storage.xianfa3) player.storage.xianfa3 = [2, 6];
                    const list = player.storage.xianfa3;
                    player.addTip(skill, get.translation(skill) + " " + list.slice().join(" "));
                },
                onremove: (player, skill) => {
                    player.removeTip(skill);
                    delete player.storage.xianfa3;
                },
                "_priority": 0,
            },
            "xiandi仙露": {
                init(player, skill) {
                    if (!player.storage.xianlu_limit) player.storage.xianlu_limit = {time:1, jiben:1,jinnang:1};
                },
                persevereSkill: true,
                enable: ["chooseToUse","chooseToRespond"],
                usable(skill,player) {
                    return player.storage.xianlu_limit? player.storage.xianlu_limit.time : 1;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var name of lib.inpile) {
                            if (get.type(name) == "basic" || (player.countMark("xiandi仙露")>=1 && get.type(name) == "trick")) {
                                list.push([get.translation(get.type(name)), "", name]);
                                if (name == "sha") {
                                    for (var j of lib.inpile_nature) list.push(["基本", "", "sha", j]);
                                }
                            }
                        }
                        return ui.create.dialog("仙露", [list, "vcard"]);
                    },
                    filter(button, player) {
                        return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
                    },
                    backup(links, player) {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            viewAs: {
                                name: links[0][2],
                                isCard: true,
                            },
                            popname: true,
                            precontent() {
                                player.logSkill("xiandi仙露");
                            },
                        };
                    },
                    check(button) {
                        var player = _status.event.player;
                        var card = { name: button.link[2], nature: button.link[3] };
                        if (player.countCards("hes", cardx => cardx.name == card.name)) return 0;
                        return _status.event.getParent().type == "phase" ? player.getUseValue(card) : 1;
                    },
                    prompt(links, player) {
                        return "视为使用" + get.translation(links[0][2]) ;
                    },
                },
                group: ["xiandi仙露_basic","xiandi仙露_trick","xiandi仙露_range"],
                subSkill: {
                    basic: {
                        trigger: {
                            player: "useCard1",
                        },
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return (
                                get.type2(event.card, false) === "basic");
                        },
                        async content(event, trigger, player) {
                            let num =player.storage.xianlu_limit.jiben;
                            if (!num) num=1;
                            trigger.baseDamage+= num;
                            game.log(player, "使用的", trigger.card, "牌面数值+",num);
                        },
                        sub: true,
                        sourceSkill: "xiandi仙露",
                        "_priority": 0,
                    },
                    trick: {
                        trigger: {
                            player: "useCard1",
                        },
                        filter(event, player) {
                            return (get.type(event.card) == "trick"); 
                        },
                        async content(event, trigger, player) {
                            event.card=trigger.card;
                            if(get.tag(event.card, "damage"))
                            {
                                let num = player.storage.xianlu_limit.jinnang;
                                if (!num) num=1;
                                let list=["令其不可响应","令其伤害+"+num];
                                let result = await player.chooseControl(list).set("prompt","选择一项").forResult();
                                let choice = result.control;
                                if (choice == list[1]) trigger.baseDamage+=player.storage.xianlu_limit.jinnang;
                                else trigger.directHit.addArray(game.players);
                            }
                            else trigger.directHit.addArray(game.players);
                        },
                        sub: true,
                        sourceSkill: "xiandi仙露",
                        "_priority": 0,
                    },
                    range: {
                        forced: true,
                        mod: {
                            targetInRange: function () {
                                return true;
                            },
                        },
                        sub: true,
                        sourceSkill: "xiandi仙露",
                        "_priority": 0,
                    },
                },
                "_priority": 0,
            },
            "xiandi仙姿": {
                persevereSkill: true,
                trigger: {
                    player: "useCard2",
                },
                forced: true,
                init(player) {
                    player.storage.xianzi_sha = 1;
                },
                filter(trigger, player) {
                    return (
                        trigger.targets &&
                        trigger.targets.length == 1 &&
                        (get.name(trigger.card) == "sha")
                    );
                },
                filterx(event, player) { //界吴懿奔袭
                    var info = get.info(event.card);
                    if (info.allowMultiple == false) return false;
                    if (event.targets && !info.multitarget) {
                        if (
                            game.hasPlayer(function (current) {
                                return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                            })
                        ) {
                            return true;
                        }
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    const list = [[
                        [0, "多选择任意个目标"],
                        [1, "无视防具且不可响应"],
                        [2, "不计入次数"],],"tdnodes"];
                    var ask = await player.chooseButton(["仙姿：请选择至多"+player.storage.xianzi_sha+"项", list]).set("forced", true).set("selectButton", [0, player.storage.xianzi_sha]).set("filterButton", function (button) {
                        if (button.link == 0) {
                            return _status.event.bool1;
                        }
                        return true;
                    }).set("bool1", lib.skill["xiandi仙姿"].filterx(trigger, player)).forResult();//改的界吴懿的奔袭
                    const chosen = (ask && ask.links) || [];
                    if (!chosen.length) return;
                    let extraTargets = [];
                    let wantDirect = false; // 选了“不可响应+无视防具”
                    let wantNoCount = false; // 选了“不计入次数”
                    for (const link of chosen) 
                    {
                        game.log(player, "选择了", "#g〖仙姿〗", "的", "#y选项" + get.cnNumber(link + 1, true));

                        if (link === 0) {
                            const pick = await player.chooseTarget("请选择任意额外目标", [1, Infinity], function (card, player, target) {
                            const me = _status.event.player;
                            if (_status.event.targets.includes(target)) return false;
                            return lib.filter.targetEnabled2(_status.event.card, me, target);
                            })
                            .set("targets", trigger.targets.slice()) // 原目标列表
                            .set("card", trigger.card)
                            .set("ai", t => get.effect(t, _status.event.card, _status.event.player, _status.event.player))
                            .forResult();

                            if (pick && pick.targets && pick.targets.length) extraTargets = extraTargets.concat(pick.targets);
                        }

                        if (link === 1) wantDirect = true;
                        if (link === 2) wantNoCount = true;
                    }
                    if (extraTargets.length) 
                    {
                        player.line(extraTargets);
                        trigger.targets.addArray(extraTargets);
                    }

                    // 对“所有当前目标”（含新增）应用“无视防具 + 直击”
                    if (wantDirect) {
                    trigger.targets.forEach(target => {
                        target.addTempSkill("qinggang2");                 // 无视防具
                        (target.storage.qinggang2 || (target.storage.qinggang2 = new Set())).add(trigger.card);
                        if (!trigger.directHit) trigger.directHit = new Set();
                        trigger.directHit.add(target);                    // 直击（不可出闪）
                    });
                    if (!trigger.customArgs) trigger.customArgs = {};
                    if (!trigger.customArgs.default) trigger.customArgs.default = {};
                    trigger.customArgs.default.directHit2 = true;       // 补充直击标记给部分判定路径
                    }
                    if (wantNoCount && trigger.addCount !== false) {
                        trigger.addCount = false;
                        const stat = trigger.player.getStat();
                        if (stat && stat.card) {
                            if (typeof stat.card.sha === "number") {
                            stat.card.sha = Math.max(0, stat.card.sha - 1);
                            }
                        }
                    }
                },
                group: ["xiandi仙姿_shan","xiandi仙姿_tao"],
                subSkill: {
                    shan: {
                        trigger: {
                            player: ["useCardAfter","respondAfter","damageEnd"],
                        },
                        prompt: "仙姿：是否发动〖仙裁〗？",
                        filter(event, player) {
                            if (!player.hasSkill("xiandi仙裁") || player == _status.currentPhase) return false;
                            if (event.name =="damage"){
                                let index = player.getHistory("damage").indexOf(event); 
                                return index>=3; //本回合第4+次受伤
                            }
                            else return event.card.name == "shan" || event.card.name == "wuxie";
                            
                        },
                        logTarget() {
                            return _status.currentPhase;
                        },
                        async content(event,trigger,player) {
                            
                            // const next = game.createEvent("invoke_xiancai");
                            // next.player = player;
                            let pick = await player.chooseTarget("请选择〖仙裁〗的目标", 1, function (player, target) { return target !== player; }).forResult();
                            // next.setContent(lib.skill["xiandi仙裁"].content);
                            if( !pick || !pick.targets || !pick.targets.length) return;
                            await player.useSkill("xiandi仙裁", pick.targets);
                        },
                        sub: true,
                        sourceSkill: "xiandi仙姿",
                        "_priority": 0,
                    },
                    tao: {
                        trigger: {
                            player: "useCardAfter",
                        },
                        filter(event, player) {
                            if (event.player !== player) return false;
                            const name = (get.name ? get.name(event.card, player, "raw") : event.card.name);
                            return name === "tao";
                        },
                        prompt: "仙姿：是否从未登场的五名武将中选择一个获得其任意个技能？",
                        async content(event, trigger, player) { //改的新杀赵襄扶汉
                            let pool;
                            if (_status.characterlist) {
                            pool = _status.characterlist.slice();
                            } else if (_status.connectMode) {
                            pool = get.charactersOL();
                            } else {
                            pool = get.gainableCharacters();
                            }
                            for (const p of game.players.concat(game.dead)) {
                            pool.remove(p.name);
                            pool.remove(p.name1);
                            pool.remove(p.name2);
                            }
                            if (!pool.length) return;
                            const cand = pool.randomGets(Math.min(5, pool.length));

                            //先选1个武将
                            const pickChar = await player
                            .chooseButton(["扶汉（改）：请选择一个角色", [cand, "character"]])
                            .set("forced", true)
                            .forResult();
                            const chosenName = pickChar && pickChar.links && pickChar.links[0];
                            if (!chosenName) return;

                            //拉取该武将的可学技能（排除类型）并选任意个
                            const allSkills = (lib.character[chosenName] && lib.character[chosenName][3]) || [];
                            const legalSkills = allSkills.filter(sk => {
                            const info = get.info(sk);
                            return info && !info.zhuSkill && !info.limited && !info.juexingji &&
                                    !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                            });
                            if (legalSkills.length) 
                            {
                                const btns = [ [ legalSkills.map(s => [s, get.translation(s)]), "tdnodes" ] ];
                                const pickSkills = await player
                                    .chooseButton(["从该角色获得任意个技能", ...btns])
                                    .set("selectButton", [0, legalSkills.length]) // 任意个 = 0..N
                                    .set("forced", true)
                                    .forResult();
                                const gains = (pickSkills && pickSkills.links) || [];
                                if (gains.length) player.addSkills(gains);
                            }
                        },
                        sub: true,
                        sourceSkill: "xiandi仙姿",
                        "_priority": 0,
                    },
                },
                "_priority": 0,
            },
            "xiandi仙裁": {
                init(player, skill) {
                    player.storage.xiandi_xiancai={time:1,region:1,turn:false}; 
                },
                enable: "phaseUse",
                usable(skill,player) {
                    return player.storage.xiandi_xiancai? player.storage.xiandi_xiancai.time : 1;
                },
                filterTarget(card, player, target) {
                    return target !== player;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const j = await player.judge();
                    const jcard = (j && j.result && j.result.card) || (j && j.card) || j; 
                    if (!jcard) return;
                    const jname = (get.name ? get.name(jcard, player, "raw") : jcard.name); // 最终牌名
                    const jtype = get.type(jcard);   // basic / trick / equip
                    const jsub  = (get.subtype && get.subtype(jcard)) || (lib.card[jcard.name] && lib.card[jcard.name].subtype) || "";

                    // —— 2) 选区域并获得该区域的所有牌 —— //
                    const regions = [];
                    if (target.countCards("h")) regions.push(["h", "手牌区"]);
                    if (target.countCards("e")) regions.push(["e", "装备区"]);
                    if (target.countCards("j")) regions.push(["j", "判定区"]);

                    if (!regions.length) {
                        game.log(target, "没有可获得的区域牌");
                    } else 
                    {
                        let pickRegion = null;
                        if (regions.length === 1) {
                            // 只有一个可选区域：直接选
                            pickRegion = regions[0][0];
                        } else {
                            const askReg = await player
                            .chooseButton(
                                ["选择至多"+player.storage.xiandi_xiancai.region+"个区域，获得该区域内的所有牌", [regions.map(x => [x[0], x[1]]), "tdnodes"]]
                            )
                            .set("forced", true)
                            .set("selectButton", [1, Math.min(player.storage.xiandi_xiancai.region, regions.length)])
                            .forResult();
                            pickRegion = (askReg && askReg.links) || [];
                        }
                        if (pickRegion.length) {
                            let toGain = [];
                            for (const z of pickRegion) {
                                const cards = target.getCards(z);
                                if (cards && cards.length) toGain = toGain.concat(cards);
                            }
                            if (toGain.length) await player.gain(toGain, "gain2", target);
                        }
                    }
                    const isTrickLike = (jtype === "trick") || (jsub === "delay" || jsub === "delayed") || (lib.card[jcard.name].type == "delay");
                    if (jtype === "basic") {
                    // 【基本牌】：禁同名（使用/打出）——可叠加多个牌名
                    target.addSkill("xiandi仙裁_banname");
                    const store = target.storage["xiandi仙裁_banname"];
                    if (!store.includes(jname)) store.push(jname);
                    target.markSkill("xiandi仙裁_banname");
                    game.log(target, "本局不能使用或打出", "#y【" + get.translation(jname) + "】");

                    } else if (isTrickLike) {
                    const display = (get.translation && get.translation(jname)) || jname;
                    game.log(display);
                    const need = String(display).replace(/\s+/g, "").length; // “牌名字数”
                    const all = target.getSkills(null, false);
                    const mains = all.filter(s => {
                        const info = get.info(s);
                        if (!info) return false;
                        if (info.sub) return false;
                        if (info.hiddenSkill || info.charlotte) return false;
                        return true;
                    });
                    let removed = 0;
                    if (mains.length) {
                        const picks = mains.randomGets(Math.min(need, mains.length));
                        for (const sk of picks) {
                        target.removeSkill(sk);
                        game.log(target, "失去了技能", "#g【" + get.translation(sk) + "】");
                        removed++;
                        }
                    }
                    const remain = need - removed;
                    if (remain > 0 && target.isAlive()) {
                        await target.damage(remain, player); 
                    }

                    } else if (jtype === "equip") {
                        const mapEquip = { equip1:1, equip2:2, equip3:3, equip4:4, equip5:5 };
                        const slot = mapEquip[jsub] || null;
                        if (slot) {
                            target.disableEquip(slot); // 废除对应的装备栏
                            game.log(target, "废除了", "#y装备栏" + slot);
                        }
                        target.addSkill("xiandi仙裁_farplus");
                        const key = player.playerid || player.playerid2 || player.seat; 
                        const store = target.storage["xiandi仙裁_farplus"];
                        store[key] = (store[key] || 0) + 1;
                        target.markSkill("xiandi仙裁_farplus");
                        game.log(target, "计算与", player, "的距离时", "#y+1");

                        if (player.storage.xiandi_xiancai.turn) {
                            const turnAsk = await player.chooseBool("是否令其翻面？").forResult();
                            if (turnAsk.bool && target.isAlive()) await target.turnOver();
                        }
                    }
                },
                subSkill: {
                    banname: {
                        init(player){
                            player.storage["xiandi仙裁_banname"] = [];
                        },
                        mark: true,
                        charlotte: true,
                        forced: true,
                        intro: {
                            content(storage, player) {
                            if (!storage|| !storage.length) return "（无）";
                            return "本局不能使用或打出：" + storage.map(n => "【" + get.translation(n) + "】").join("、");
                            },
                        },
                        mod: {
                            cardEnabled2(card, player) { // 使用
                            const name = (get.name ? get.name(card, player, "raw") : card.name);
                            const ban = player.storage.xiandi_xiancai_banname || [];
                            if (ban.includes(name)) return false;
                            },
                            cardRespondable(card, player) { // 打出
                            const name = (get.name ? get.name(card, player, "raw") : card.name);
                            const ban = player.storage.xiandi_xiancai_banname || [];
                            if (ban.includes(name)) return false;
                            },
                        },
                        sub: true,
                        sourceSkill: "xiandi仙裁",
                        "_priority": 0,
                    },
                    farplus: {
                        init(player){
                            player.storage["xiandi仙裁_farplus"] = {};
                        },
                        mark: true,
                        charlotte: true,
                        forced: true,
                        intro: {
                            content(storage, player) {
                            if (!storage) return "（无）";
                            const lines = [];
                            for (const id in storage) {
                                const num = storage[id];
                                const who = game.players.find(p => (p.playerid || p.playerid2 || p.seat) == id);
                                lines.push((who ? get.translation(who) : ("目标#" + id)) + "：距离+" + num);
                            }
                            return lines.join("<br>");
                            },
                        },
                        mod: {
                            globalFrom(from, to, distance) {
                            if (!from || !to) return;
                            const map = from.storage.xiandi_xiancai_farplus;
                            if (!map) return;
                            const key = to.playerid || to.playerid2 || to.seat;
                            const add = map[key] || 0;
                            if (add > 0) return distance + add;
                            },
                        },
                        sub: true,
                        sourceSkill: "xiandi仙裁",
                        "_priority": 0,
                    },
                },
                "_priority": 0,
            },
            "仙帅": {
                derivation: ["llqshenwei","wushuang"],
                trigger: {
                    global: "phaseBegin",
                    player: "damageEnd",
                },
                forced: true,
                juexingji: true,
                skillAnimation: true,
                animationColor: "gray",
                filter: function(event,player){
                    return player.hp<4||player.countCards('h')<4;
                },
                content: function(){
                    'step 0'
                    player.awakenSkill('仙帅');
                    player.gainMaxHp(4);
                    'step 1'
                    if(player.maxHp>player.hp) player.recover(player.maxHp-player.hp);
                    'step 2'
                    player.drawTo(player.maxHp);
                    player.addSkills(['llqshenwei','wushuang']);
                },
                "_priority": 0,
            },
            "酒绝": {
                mod: {
                    cardUsable: function (card, player, num) {
                        if (card.name == "jiu") return Infinity;
                    },
                },
                enable: "chooseToUse",
                filterCard: function (card) {
                    return true;
                },
                viewAs: {
                    name: "jiu",
                },
                position: "hs",
                viewAsFilter: function (player) {
                    return player.hasCard(card => true, "hs");
                },
                prompt: "将一张手牌当【酒】使用",
                "_priority": 0,
                group:["酒绝_fengyin","酒绝_recount"],
                subSkill: {
                    fengyin:{
                        init(player, skill) {
                            player.storage["酒绝"] = {spade:0, club:0, heart:0, diamond:0};
                        },
                        trigger: {
                            player: ["useCard", "respond"],
                        },
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            if (!get.suit(event.card) || event.card.name != "jiu") return false;
                            if(!lib.suit.includes(get.suit(event.card))) return false;
                            if (player.storage["酒绝"][get.suit(event.card)] < 2) player.storage["酒绝"][get.suit(event.card)]++;
                            return player.storage["酒绝"][get.suit(event.card)] == 2;
                        },
                        content() {
                            var suit = get.suit(trigger.card);
                            game.log(player, "的〖酒绝〗触发，令其他角色本回合内不能使用或打出", "#y" + get.translation(suit) + "的牌");
                            var targets = game.filterPlayer(current => current != player);
                            for (var target of targets) {
                                target.addTempSkill("酒绝_ban");
                                target.markAuto("酒绝_ban", [suit]);
                            }
                        },
                        onremove(player, skill) {
                            delete player.storage["酒绝"];
                        },
                    },
                    ban: {
                        onremove: true,
                        charlotte: true,
                        mod: {
                            cardEnabled(card, player) {
                                if (player.getStorage("酒绝_ban").includes(get.suit(card))) return false;
                            },
                            cardRespondable(card, player) {
                                if (player.getStorage("酒绝_ban").includes(get.suit(card))) return false;
                            },
                            cardSavable(card, player) {
                                if (player.getStorage("酒绝_ban").includes(get.suit(card))) return false;
                            },
                        },
                        mark: true,
                        marktext: "绝",
                        intro: {
                            content: "本回合内不能使用或打出$的牌",
                        },
                    },
                    recount:{
                        trigger: {global: "phaseEnd"},
                        forced: true,
                        popup: false,
                        content() {
                            for (k of Object.keys(player.storage["酒绝"])) player.storage["酒绝"][k] = 0;
                            game.log(player, "的〖酒绝〗重置计数");
                        },
                    },
                },
            },
            "骰酒": {
                init(player, skill) {
                    if (!player.storage["骰酒"]) player.storage["骰酒"] = { suit: null, number: 0, color: null };
                },
                audioname: ["boss_qinglong"],
                trigger: { player: ["useCardAfter"] },
                forced: true,
                filter(event, player) {
                    if (event.name !== "useCard") return false;
                    return (event.card && (event.card.name === "jiu" || get.name(event.card, player, "raw") === "jiu"))
                    && !!player.storage["骰酒"].color;
                },
                async content(event, trigger, player) {
                    const j = await player.judge();
                    const jcard = (j && j.result && j.result.card) || (j && j.card) || j;
                    if (!jcard) return;
                    const isRealJiu = trigger.card.isCard;
                    if (isRealJiu) game.log(player, "本次〖骰酒〗进行宽松判定");
                    const lenient = isRealJiu || player.hasSkill("酒仙_lenient"); //“宽松判定”

                    const sel = player.storage["骰酒"];
                    const jc_color = get.color(jcard);
                    const jc_suit  = get.suit(jcard);
                    const jc_num   = get.number(jcard)|0;

                    const matchColor   = lenient ? true : (jc_color === sel.color);
                    const matchSuitEq  = lenient ? (jc_color === sel.color) : (jc_suit === sel.suit);
                    const matchNumber  = lenient ? ((jc_suit === sel.suit) || (jc_num === sel.number)) : (jc_num === sel.number);

                    if (matchColor) await player.draw();
                    if (matchSuitEq) {
                        await player.gainMaxHp();
                        await player.recover(1);
                    }
                    if (matchNumber) {
                        let j2 = await player.judge();
                        let jcard2 = (j2 && j2.result && j2.result.card) || (j2 && j2.card) || j2;
                        let n = (jcard2 && get.number(jcard2)) || 0;
                        if (n > 0) await player.draw(n);
                    }
                },
                onremove: (player, skill) => {
                    delete player.storage["骰酒"];
                },
                group: ["骰酒_select"],
                subSkill: {
                    select: {
                    trigger: { player: "enterGame", global: "phaseBefore" },
                    filter(event) { return (event.name != "phase" || game.phaseNumber == 0); },
                    forced: true,
                    async content(event, trigger, player) {
                        const suits = lib.suit;
                        const res1 = suits.length > 1
                        ? await player.chooseControl(suits)
                            .set("ai", () => get.event().controls.randomGet())
                            .set("prompt", "骰酒：请选择一个花色")
                            .forResult()
                        : { control: suits[0], index: 0 };
                        const suit = res1.control;

                        const num_list = Array.from({ length: 13 }, (_, i) => get.strNumber(i + 1));
                        const res2 = await player
                        .chooseControl(num_list)
                        .set("ai", () => get.rand(0, 12))
                        .set("prompt", "请选择一个点数")
                        .forResult();

                        const num = (typeof res2.index === "number") ? (res2.index + 1) : 13;

                        if (suit) {
                        player.storage["骰酒"].suit = suit;
                        player.storage["骰酒"].number = num;
                        player.storage["骰酒"].color = (suit === "spade" || suit === "club") ? "black" : "red";

                        player.markAuto("骰酒_select", [suit, num]);
                        player.addTip("骰酒","骰酒：已记录花色 " + get.translation(suit + "2") + " 与点数 " + num);
                        game.log(player, "记录了", "#y〖骰酒〗" + "的花色为", get.translation(suit + "2"), ",点数为", num);
                    }
                    },
                    sub: true,
                    sourceSkill: "骰酒",
                    intro: {
                        content(storage, player) {
                            return "已记录" + get.translation(storage[0] + "2") + storage[1];
                        },
                    },
                    "_priority": 0,
                    },
                },
                "_priority": 0,
            },
            "酒仙": {
                limited: true,
                skillAnimation: true,
                animationColor: "orange",
                enable: "phaseUse",
                usable: 1,
                filter(event, player) {
                    return true;
                },
                async content(event, trigger, player) {
                    player.addTempSkill("酒仙_lenient", { player: "phaseEnd" });
                    player.awakenSkill(event.name);
                    player.addTip("酒仙","本回合你的“掷酒”改为宽松判定");
                },
                "_priority": 0,
                subSkill: {
                
                    lenient: {
                        charlotte: true,
                        mark: true,
                        marktext: "宽",
                        intro: { content: "本回合〖掷酒〗改为执行宽松判定" },
                        mod: 
                        {
                            cardEnabled(card, player) {
                                if (player.storage.hfjieying2) return false;
                            },
                            cardSavable(card, player) {
                                if (player.storage.hfjieying2) return false;
                            },
                        },
                        trigger: { source: "damageSource" },
                        forced: true,
                        popup: false,
                        sourceSkill: "酒仙",
                        filter(event, player) {
                            return !player.storage.hfjieying2 && player == _status.currentPhase;
                        },
                        content() {
                            player.storage.hfjieying2 = true;
                        },
                    }
                }
            }
        },
        translate: {
            "择摸": "择摸",
            "择摸_info": "游戏开始时， 你可令你本局游戏摸牌阶段额外摸至多20张牌。",
            "先知": "先知",
            "先知_info": "游戏开始时，你摸6张牌，然后你可以将至多2X张牌称为“翼”置于你的武将牌上（X为你的体力上限）。",
            "装甲": "装甲",
            "装甲_info": "出牌阶段开始时，你可以摸三张牌，此阶段你使用【杀】的次数上限+1，此阶段你使用牌无距离限制，然后你可以视为使用一张【杀】。",
            "仙帅": "仙帅",
            "仙帅_info": "持恒技。每名角色的准备阶段或你受伤后，若你的体力值或手牌数小于4，你加4点体力上限并回复体力至上限，将手牌摸至体力上限，然后获得〖神威〗和〖无双〗(不可重复获得)。",
            "渐专": "渐专",
            "渐专_info": "其他角色使用基本牌或普通锦囊牌指定你为目标后，你可以弃置一张牌令其弃置X张牌（X为其本回合使用基本盘和普通锦囊牌指定你的次数）",
            "xiandi仙帝": "仙帝",
            "xiandi仙帝_info": "持恒技。游戏开始时，你获得〖仙裁〗〖仙体〗〖仙法〗〖仙露〗〖仙姿〗〖仙罚〗；准备阶段，你随机获得1-5点仙气，然后消耗所有仙气来升级这些技能或者摸牌。",
            "xiandi仙体": "仙体",
            "xiandi仙体_info": "持恒技。你无法被翻面；你无法被跳过任何阶段；你的手牌上限始终等于体力上限；你降受到的大于1点的伤害降至1点；摸牌阶段，你可以额外摸体力上限张牌；延时锦囊（升级：普通杀/属性杀/普通锦囊）对你无效，当你成为其他角色使用的这些牌的目标后，你获得1点仙气；出牌阶段限1次， 你可以弃置任意张牌并失去等量体力，令一名角色增加等量体力上限或回复等量体力。",
            "xiandi仙罚": "仙罚",
            "xiandi仙罚_info": "持恒技。出牌阶段限1（升级：+1，无上限）次，你可以弃置任意张牌并选择一名角色，对其造成等量伤害或令其失去等量体力。",
            "xiandi仙法": "仙法",
            "xiandi仙法_info": "当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>2</span>（升级：+2），则你可以观看牌堆顶的<span class=firetext>6</span>（升级：+6，至多为36）张牌。你获得其中至多一半的牌，然后可以将任意张剩余牌交给受伤角色，并将其余牌以原顺序放回牌堆顶，（升级：然后你可以令受伤角色于当前回合结束后执行一个额外回合）。（距离至多为10，达到10则无视距离要求；观看数量最多为36）",
            "xiandi仙露": "仙露",
            "xiandi仙露_info": "持恒技。每回合限1次（升级：+1），你可以视为使用一张基本牌或普通锦囊牌。你使用牌无距离限制。你使用的基本牌牌面数值+1（升级：+1），你使用锦囊牌时可以选择令该牌不可被响应或伤害+1（升级+1）。",
            "xiandi仙姿": "仙姿",
            "xiandi仙姿_info": "持恒技。你使用【杀】指定唯一目标后，可以选择至多1（升级：+1，至多为3）项：1.多指定任意个目标；2.此【杀】无视防具且不可被响应；3.此【杀】不计入次数。你的回合外，每当你使用【闪】或【无懈可击】、打出【闪】、或于一回合内受到第三次以上伤害后，若你有技能〖仙裁〗，你可以发动一次〖仙裁〗。你使用【桃】结算完毕后可以从五个未登场的武将中选择一个并获得其任意个技能（觉醒技，主公技，限定技等等除外）。",
            "xiandi仙裁": "仙裁",
            "xiandi仙裁_info": "持恒技。每回合限1次（升级：+1），你可以选择一名其他角色并判定，然后选择至多1（升级+1，最多为3）个区域，获得该角色该区域内的所有牌。然后根据判定结果的类型执行以下效果： 基本牌：本局游戏其不能使用或打出同名牌；锦囊牌：其随机失去等同于牌名字数个技能，不足则受到你造成的等同于剩余数量的伤害；装备牌：其废除对应的装备烂，然后本局游戏中其计算与你的距离时+1，（升级：然后你可以令其翻面）。",
            "玲舞": "玲舞",
            "玲舞_info": "当你造成或受到伤害后，你摸三倍于伤害量的牌。然后你下次造成伤害时弃置这些牌。",
            "绮靡": "绮靡",
            "绮靡_info": "当你对其他角色造成伤害时，若你有牌，你可以与其同时弃置至少一张牌。若你以此法弃置的牌的点数之和：不大于其，你摸2X张牌；不小于其，此伤害+X（X为其/你以此法弃置的牌数）。",
            "酒绝": "酒绝",
            "酒绝_info": "你可以将一张手牌当【酒】使用。你使用【酒】的次数不限。当你于一回合内使用一种花色的【酒】达到两张后，其他角色此回合内不能使用或打出该花色的牌。",
            "骰酒": "骰酒",
            "骰酒_info": "游戏开始时，你选择并记录一个花色和一个点数。当你使用【酒】后，你进行判定并比较判定结果与你记录的花色和点数：若它们颜色相同你摸一张牌；若它们花色相同你增加1点体力上限并恢复1点体力；若它们点数相同你进行判定并摸判定结果点数张牌。若你使用的是非转化的【酒】，则改为执行“宽松判定”：在上述比较时，颜色视为相同，原花色相同的条件改为颜色相同，原点数相同的条件改为花色或点数相同。",
            "酒仙": "酒仙",
            "酒仙_info": "限定技。出牌阶段，你可以令你的〖掷酒〗均执行“宽松判定”，然后本阶段内当年造成伤害后你结束此阶段。",
        },
    },
    intro: "一百年后的三国杀，仙界武将层出不穷，仙界大乱斗也随之而来。",
    author: "zhangfei233",
    diskURL: "",
    forumURL: "",
    version: "V0.6 - beta",
},files:{"character":["武四郎.jpg","界曹宪.jpg","酒仙·庞凤衣.jpg","仙帅·吕玲绮.jpg","四血模板.jpg","界曹纯.jpg","合黄盖.jpg","仙帝·曹金玉.jpg"],"card":[],"skill":[],"audio":[]},connect:false} 
};