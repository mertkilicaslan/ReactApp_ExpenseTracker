import def from "./util.js";
import { myVal } from "./util.js";

let boolan = true;
let str = "String";
let str2 = `hello ${str}`;
let nul = null;
let undef = undefined;

const arrowFunc0 = () => "hello world";

const arrowFunc1 = () => {
  return "hello world";
};
const arrowFunc2 = (mert) => {
  return "hello " + mert;
};

const arrowFunc3 = (mert, ali) => {
  return "hello " + mert + " and " + ali;
};

const valArray = ["val1", "val2", " val3"];
const [v1, v2, v3] = valArray;

const yarObj = {
  yar1: "ray1",
  yar2: "ray2",
  yar3: "ray3",
};
const { yar1: aliasForYar1, yar2, yar3 } = yarObj;
console.log(aliasForYar1);

setTimeout(() => {
  console.log(arrowFunc0());
}, 2000);
