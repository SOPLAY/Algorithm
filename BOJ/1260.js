//백준 입력값 복붙
let userInput = `1000 1 1000
999 1000`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;

let [[node, link, startPoint], ...arr] = input.split("\n").map((v) => v.split(" ").map(Number));
arr = arr.slice(0, link);

let gh = Array.from(Array(node + 1), () => Array(node + 1).fill(0));
arr.forEach(([x, y]) => {
  gh[x][y] = 1;
  gh[y][x] = 1;
});

let ch1 = Array.from({ length: node + 1 }, () => 0);
let ch2 = Array.from({ length: node + 1 }, () => 0);
let dfsGh = [];
let bfsGh = [];

const DFS = (v) => {
  ch1[v] = 1;
  dfsGh.push(v);
  for (let i = 1; i < gh[v].length; i++) {
    if (gh[v][i] === 1 && ch1[i] === 0) {
      DFS(i);
    }
  }
};

const BFS = (v) => {
  let q = [];
  q.push(v);
  ch2[v] = 1;
  bfsGh.push(v);
  let index = 0;
  while (index !== q.length) {
    let v = q[index++];
    for (let i = 1; i < gh[v].length; i++) {
      if (gh[v][i] === 1 && ch2[i] === 0) {
        ch2[i] = 1;
        bfsGh.push(i);
        q.push(i);
      }
    }
  }
};

DFS(startPoint);
BFS(startPoint);

console.log(`${dfsGh.join(' ')}\n${bfsGh.join(' ')}`)
