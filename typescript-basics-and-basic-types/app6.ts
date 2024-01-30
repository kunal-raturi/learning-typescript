type Person = {
  name: string;
  age: number;
  role: [string, number];
  Hobby: interest;
};

enum interest {
  cricket, //automatically asign value 0 if not declare
  cooking,
  singing,
  flowering,
}
const employee: Person = {
  name: "ali",
  age: 23,
  role: ["engineer", 2],
  Hobby: interest.singing,
};
// employee.role.push("marketing");
// console.log(employee.role[1]);
if (employee.Hobby === interest.singing) {
  console.log("employee hobby is singing");
}
