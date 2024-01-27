function add(n1, n2, showResult, phrase) {
    if (showResult) {
        var result = n1 + n2;
        console.log(phrase + result);
    }
    else {
        console.log("error");
    }
}
var n1 = 10;
var n2 = 12;
var phrase = "result is :";
var showResult = true;
add(n1, n2, showResult, phrase);
