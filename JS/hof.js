const arr = [1, 2, 3, 4, 5];

const calculateArea = (radius) => Math.round(Math.PI * radius * radius);

const calculateCircumference = (radius) => Number((2 * Math.PI * radius).toFixed(2));

const calculate = (radiusArr, operation) => {
  const result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    result.push(operation(radiusArr[i]));
  }
  return result;
};

console.log(calculate(arr, calculateArea)); // Output: [ 3, 13, 28, 50, 79 ]
console.log(calculate(arr, calculateCircumference)); // Output: [6.28, 12.57, 18.85, 25.13, 31.42]
