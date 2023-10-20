const fib = (num) => {
  let arr = [0, 1];
  if (num < 1) {
    return "Please add a number greater then zero";
  }
  if (num === 1) {
    return [0];
  }
  for (let i = 1; i < num; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr;
};

console.log(fib(-3));
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(4));
console.log(fib(9));
console.log(fib(27));