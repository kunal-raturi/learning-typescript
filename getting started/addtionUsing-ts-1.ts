const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement; //In TypeScript, ! is a non-null assertion operator. It tells the compiler to treat the expression as if the value is definitely not null or undefined. It's essentially a way of telling TypeScript to trust you that the value will not be null or undefined at runtime.

//When you see HTMLInputElement!, it means that you are asserting that the variable or expression of type HTMLInputElement will not be null or undefined. This is useful in situations where TypeScript's strict null checks might be too cautious, and you, as the developer, are sure that a certain value won't be null or undefined at a particular point in your code.

function add(num1: number, num2: number) {
  return num1 + num2;
}

button?.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
