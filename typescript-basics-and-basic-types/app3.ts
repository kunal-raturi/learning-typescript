function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    const result = n1 + n2;
    console.log(phrase + result);
  } else {
    console.log("error");
  }
}

const n1 = 10;
const n2 = 12;
const phrase = "result is :";
const showResult = true;
add(n1, n2, showResult, phrase);
