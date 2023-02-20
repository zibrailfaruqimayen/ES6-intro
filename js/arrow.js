// function declaration

// function add(first, second) {
//   const total = first + second;
//   return total;
// }

// function expression
const add1 = function add(first, second) {
  const total = first + second;
  return total;
};

// function expression with anonymous function
const add2 = function (first, second) {
  const total = first + second;
  return total;
};

// arrow function

const add6 = (first, second) => first + second;
//
const result = add(10, 20);
console.log(result);
