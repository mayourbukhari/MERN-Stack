const { add } = require("./add");
const sub = require("./sub");
const { mul } = require("./add");

let res = add(2, 4);
let subres = sub(4, 2);
let mulres = mul(3, 4);

console.log("add", res);
console.log("sub", subres);
console.log("mul", mulres);
