let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `3
2 2
1 5
13 29`;
input = input.split("\n");
const size = +input.shift();
input = input.slice(0, size).map((v) => v.split(" ").map((v2) => +v2));

let nc = new Array(31).fill(0).map((v) => (v = new Array(31).fill(0)));

for (let i = 0; i < nc.length; i++) nc[i][1] = i;

for (let i = 1; i < nc.length; i++) {
  for (let j = 1; j < nc.length; j++) {
    for (let k = 1; k < i; k++) {
      nc[i][j] += nc[k][j - 1];
    }
  }
}

let answer = [];

input.forEach((v) => {
  answer.push(nc[v[1]][v[0]]);
});
console.log(answer.join("\n"));
