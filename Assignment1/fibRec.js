const fib = (num) => {
  if (num < 1) {
    return "Please add a number greater then zero";
  }
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }
  return [...fib(num - 1), fib(num - 1)[num - 2] + fib(num - 1)[num - 3]];
};

console.log(fib(-3));
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(4));
console.log(fib(9));
console.log(fib(27));
