//Legend
// S - start
// * - wall
// . - path
// T - treasure

// Maze width/height: 312px

// 12 x 12 => 26px
const LEVEL1 = [
    ["*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*","S",".",".",".",".","*","*",".","*",".","T"],
    ["*",".","*","*","*",".",".",".",".","*",".","*"],
    ["*",".","*","*","*",".","*","*",".","*",".","*"],
    ["*",".","*",".",".",".","*","*",".","*",".","*"],
    ["*",".","*",".","*","*","*","*","*","*",".","*"],
    ["*",".","*",".",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*",".","*","*",".","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".","*","*"],
    ["*",".","*","*","*","*","*","*","*",".","*","*"],
    ["*",".",".",".",".",".",".",".","*",".",".","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*"]
];

// 16 x 16 => 19.5px
const LEVEL2 = [
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*","S","*",".",".",".",".","*",".",".","*",".","*",".",".","*"],
    ["*",".","*",".","*","*","*","*","*",".","*",".","*",".","*","*"],
    ["*",".",".",".",".",".",".",".","*",".",".",".","*",".",".","*"],
    ["*",".","*",".","*","*","*",".","*",".","*",".","*",".","*","*"],
    ["*",".","*",".","*",".","*",".",".",".","*",".",".",".",".","*"],
    ["*",".","*",".",".",".","*",".","*","*","*","*","*","*","*","*"],
    ["*",".","*",".","*",".","*",".",".",".",".",".",".","*",".","T"],
    ["*",".",".",".","*",".",".",".","*","*","*","*","*","*",".","*"],
    ["*","*","*",".","*",".","*",".",".",".",".",".","*",".",".","*"],
    ["*",".",".",".",".",".","*","*","*",".","*",".","*",".","*","*"],
    ["*",".","*",".","*",".","*",".","*",".","*",".","*",".","*","*"],
    ["*",".","*",".","*",".","*",".","*",".","*",".",".",".",".","*"],
    ["*",".","*",".",".",".","*",".","*","*","*",".","*","*","*","*"],
    ["*",".","*",".","*",".",".",".","*",".",".",".",".",".",".","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
];

// 24 x 24 => 13px
const LEVEL3 = [
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*","S","*",".",".",".",".",".",".","*",".",".",".",".","*",".",".",".",".","*",".",".",".","*"],
    ["*",".","*",".","*",".","*","*","*","*","*","*","*",".","*",".","*","*",".","*","*","*",".","*"],
    ["*",".","*",".","*",".","*",".","*",".",".",".",".",".",".",".",".","*",".","*",".",".",".","*"],
    ["*",".",".",".","*",".","*",".","*",".","*","*","*",".","*","*",".","*",".",".",".","*",".","*"],
    ["*",".","*",".","*",".",".",".",".",".","*",".",".",".",".","*",".","*","*","*",".","*",".","*"],
    ["*",".","*",".","*",".","*","*","*","*","*","*","*","*","*","*",".","*",".",".",".","*",".","*"],
    ["*","*","*",".","*",".","*",".",".",".",".",".",".",".",".",".",".","*","*","*",".","*",".","*"],
    ["*",".",".",".","*","*","*","*","*",".","*","*",".","*",".","*",".","*",".",".",".","*",".","*"],
    ["*","*","*",".",".",".",".",".",".",".",".","*",".","*",".","*",".","*",".","*","*","*","*","*"],
    ["*",".",".",".","*",".","*","*","*","*",".","*",".","*",".","*",".",".",".",".","*",".",".","T"],
    ["*",".","*",".","*",".",".",".",".","*",".","*",".","*",".","*","*","*","*",".","*",".","*","*"],
    ["*",".","*",".","*",".","*","*","*","*","*","*",".","*","*","*",".",".",".",".","*",".","*","*"],
    ["*",".","*",".","*",".","*",".",".",".",".",".",".",".",".",".",".","*","*","*","*",".","*","*"],
    ["*",".","*",".","*","*","*","*",".","*","*","*",".","*","*","*",".","*",".",".",".",".","*","*"],
    ["*",".","*",".",".",".",".",".",".","*",".",".",".","*",".","*",".","*",".","*","*",".","*","*"],
    ["*","*","*","*",".","*","*","*",".","*",".","*",".","*",".","*","*","*",".","*",".",".",".","*"],
    ["*",".",".",".",".","*",".","*",".","*",".","*",".","*",".",".",".",".",".","*",".","*",".","*"],
    ["*","*","*","*",".","*",".",".",".",".",".","*",".","*",".","*",".","*",".","*",".","*","*","*"],
    ["*",".",".",".",".","*",".","*","*","*","*","*",".","*",".","*",".","*",".",".",".",".",".","*"],
    ["*",".","*",".","*","*",".",".","*",".",".",".",".",".",".","*",".","*",".","*",".","*",".","*"],
    ["*",".","*",".",".",".",".","*","*",".","*","*",".","*","*","*","*","*",".","*",".","*",".","*"],
    ["*",".","*",".","*","*",".",".",".",".",".","*",".",".",".",".",".",".",".","*",".","*",".","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
];

export {LEVEL1, LEVEL2, LEVEL3};