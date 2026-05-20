// "use strict";

const user = {
  username: "dinesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
  normalFunction: function () {
    // the scope is limited to the function only
    setTimeout(function () {
      console.log(this.username);
      console.log(this);
    }, 1000);
  },
  arrowFunction: function () {
    setTimeout(() => {
      console.log(this.username);
      console.log(this);
    }, 1000);
  },
};

// user.normalFunction();
user.arrowFunction();

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this)

// console.log(chai);

// function chai() {
//   let username = "hitesh";
//   // console.log(this.username);
//   console.log(this);
// }

// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// };

// chai();

//! Classic example of in normal function this depends on how the function is called
//* In chai function this will be point to a global and in user.welcomeMessage this will be point to user object

//! Classic example of in arrow function this depends on where the function is written
//* In chai function this will be {} but in the setTimeout of arrowFunction this will be point to user object because the "this" of arrowFunction equals to user

//? https://chatgpt.com/s/t_6a0b5b3bf98081918297800d59f84cfc
