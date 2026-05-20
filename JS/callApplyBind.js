let name = {
  firstName: "Dinesh",
  lastName: "Lalwani",
};

let printFullName = function (homeTown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state,);
};

// call
printFullName.call(name, "Nashik", "Maharashtra");

// apply
printFullName.apply(name, ["Nashik", "Maharashtra"]);

// bind
let printMyName = printFullName.bind(name, "Nashik", "Maharashtra");
printMyName();