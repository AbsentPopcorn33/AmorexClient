import { global } from "./global.js";
import { util } from "./util.js";

// You add stuff in here!

// functions.

function createMessage(con, dur = 10_000) {
    global.messages.push({
        text: con,
        status: 2,
        alpha: 0,
        time: Date.now() + dur,
    });
};
function resetTarget() {
    global.player.target.x = 0;
    global.player.target.y = 0;
}
// globals.

global.tips = [[ // You can edit this!
        "Tip: You can view and edit your keybinds in the options menu.", // TIPS 1
        "Tip: You can play on mobile by just going to amorex on your phone!"
    ], [
        "Tip: You can have the shield and health bar be separated by going to the options menu.",
        "Tip: If amorex is having a low frame rate, you can try enabling low graphics in the options menu.", // TIPS 2
        "Tip: You can make traps rounded with the classic trap setting in the options menu.",
        "Tip: You can make the health bars colourful in the settings menu. Check it out!",
        "Tip: You can enter the maze portal at level 60, there you will travel to the maze. Where rarer shapes spawn.",
        "Tip: Entering the pink portal will make your tank evolve into an Elite.",
     /*   "Tip: You can create your own private server with the template in the link on the options menu.",
        "Tip: You can create your own theme with the custom theme makerin the link on the options menu."*/
    ], [
        "Teaming in FFA or FFA Maze is frowned upon, but when taken to the extremes, you can be punished.", // INFO
        "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.",
        "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban.",
        "You can join the Discord server of amorex in the options menu, there you will access the game a lot easier.",
              "You can visit Amorex's wiki page in the links in the options menu, there you will learn a lot about the game."
    ], [
        "Fun Fact: Observatory was the first tank made in the game.", // FUN FACTS
        "Fun Fact: There are over 10 different rarities types of shapes."
    ]
];
global.createMessage = (content, duration) => createMessage(content, duration);
global.resetTarget = () => resetTarget();
