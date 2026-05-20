function multiply(a, b) {
  return console.log(a * b);
}

const multiplyByTwo = multiply.bind(2);
multiplyByTwo(5); // Output: 10

function multiplyByClosure(a) {
  return function (b) {
    return console.log(a * b);
  };
}

const multiplyByThree = multiplyByClosure(3);
multiplyByThree(4); // Output: 12
