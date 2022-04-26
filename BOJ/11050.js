let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : `5 2`;
let [num1, num2] = input.split(" ").map((v) => v * 1);
// n! / r! * (n-r)!

let n = 1;
let r = 1;
let n_r = 1;

for (let i = 1; i <= num1; i++) n *= i;

for (let i = 1; i <= num2; i++) r *= i;

for (let i = 1; i <= num1 - num2; i++) n_r *= i;

console.log(n / (r * n_r));
