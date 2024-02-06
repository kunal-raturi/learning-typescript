//union type
function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
}
var combineAge = combine(22, 33);
console.log(combineAge);
var combineName = combine("ali", "jim");
console.log(combineName);
