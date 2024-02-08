function add(n1: number, n2: number): number {
  //here return type is number
  return n1 + n2;
}

function printresult(num: number): void {
  //here there is no return so we used void type though we dont have to write it.
  console.log("result is:" + num);
}

printresult(add(23, 45));
