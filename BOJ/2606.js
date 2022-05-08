//백준 입력값 복붙
let userInput = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input = process.platform === "linux" ? require("fs").readFileSync("/dev/stdin").toString().trim() : userInput;
input = input.split("\n");
let size = +input.shift();
let linkCnt = +input.shift();
let arr = input.map((v) => v.split(" ").map(Number));
let gh = [...Array(size + 1)].map((v) => []);
let ch = [...Array(size + 1)].map((v) => 0);
arr = arr.slice(0, linkCnt);
arr.forEach(([com1, com2]) => {
  gh[com1].push(com2);
  gh[com2].push(com1);
});
let cnt = 0;
const DFS = (v) => {
  if (ch[v] !== 0) return;
  else {
    cnt++;
    ch[v] = 1;
    gh[v].forEach((linkCom) => {
      DFS(linkCom);
    });
  }
};
DFS(1);
console.log(cnt - 1);
