let name = {
  firstName: "Dinesh",
  lastName: "Lalwani",
};

let printFullName = function (homeTown, state, country) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown + ", " + state + ", " + country
  );
};


// bind
let printMyName = printFullName.bind(name, "Nashik", "Maharashtra");
printMyName("India");

Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  }
}

// Polyfill for bind
let printMyNanmePolyfill = printFullName.myBind(name, "Nashik", "Maharashtra");
printMyNanmePolyfill("India");