const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// Get the count/report of how many unique people with unique age are there
// like: {29 : 2, 75 : 1, 50 : 1}

const report = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(report);
