//union type
function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
}
const combineAge = combine(22, 33);
console.log(combineAge);

const combineName = combine("ali", "jim");
console.log(combineName);
