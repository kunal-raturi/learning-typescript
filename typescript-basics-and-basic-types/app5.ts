type Person = {
  name: string;
  age: number;
  hobbies: string[];
};

const employee: Person = {
  name: "hiya",
  age: 33,
  hobbies: ["cricket", "cooking", "biking"],
};
console.log(employee.hobbies[0]);
for (const hobby of employee.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
}
