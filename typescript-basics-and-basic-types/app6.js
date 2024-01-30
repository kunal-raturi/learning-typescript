var interest;
(function (interest) {
    interest[interest["cricket"] = 0] = "cricket";
    interest[interest["cooking"] = 1] = "cooking";
    interest[interest["singing"] = 2] = "singing";
    interest[interest["flowering"] = 3] = "flowering";
})(interest || (interest = {}));
var employee = {
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
