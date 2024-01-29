type Person = {
  name: string;
  age: number;
  role: [string, number];
};

const employee: Person = {
  name: "ali",
  age: 23,
  role: ["engineer", 2],
};
employee.role.push("marketing");
// console.log(employee.role[1]);
