function x() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}



// x() // Output: 0, 1, 2, 3, 4 (each number is printed after a delay of 1 second)

function y() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}

// y() // Output: 5, 5, 5, 5, 5 (all numbers are printed after a delay of 1 second)

function z() {
  for (var i = 0; i < 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, 1000 * i);
    }
    close(i);
  }
}

z(); // Output: 0, 1, 2, 3, 4 (each number is printed after a delay of 1 second)
