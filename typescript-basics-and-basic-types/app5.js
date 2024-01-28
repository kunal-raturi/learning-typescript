var employee = {
    name: "hiya",
    age: 33,
    hobbies: ["cricket", "cooking", "biking"],
};
console.log(employee.hobbies[0]);
for (var _i = 0, _a = employee.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    //   console.log(hobby);
    console.log(hobby.toUpperCase());
}
