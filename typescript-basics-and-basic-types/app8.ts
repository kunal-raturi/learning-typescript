type color = "red" | "green" | "blue";
let mycolor: color;
// mycolor = "white";//app8.ts:3:1 - error TS2322: Type '"white"' is not assignable to type 'color'.
mycolor = "green";
console.log(mycolor);
