const fish = {
  name: "king hilsha",
  address: "chandpur",
  color: "silver",
  phone: "017176588899",
  price: 4000,
};

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone } = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const { age, name } = { name: "almas", age: 56, profession: "makeup artist" };
console.log(age);

const { address } = fish;
console.log(address);

// array destructuring

const [first, another] = [44, 99, 88, 465];
console.log(first, another);

const nayoks = ["sakib", "bappi", "raj"];
const [king, lost, notun] = nayoks;

const y = (x) => x * x;
const z = y(5);
console.log(z);

const division = (num1, num2) => console.log(num1 / num2);
const cars = ["toyota", "honda", "mercedes"];
const newCars = [...cars, "ferrari"];
console.log(newCars);
