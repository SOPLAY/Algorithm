// 문제 풀이
function solution(inputValue) {
  let [[nodeCount, lineCount], ...arr] = inputValue.split("\n").map((v) => v.split(" ").map(Number));
  arr = arr.slice(0, lineCount);
  let gh = Array.from(Array(nodeCount + 1), () => Array(nodeCount + 1).fill(0));
  let ch = Array.from({ length: nodeCount + 1 }, () => 0);
  let answer = 0;
  for (let [a, b] of arr) {
    gh[a][b] = 1;
  }

  const DFS = (v) => {
    if (v === nodeCount) {
      answer++;
    } else {
      for (let i = 1; i <= nodeCount; i++) {
        if (gh[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  };
  ch[1] = 1;
  DFS(1);

  return answer;
}

//출력
console.log(
  solution(`5 9
1 2
1 3
1 4
2 1
2 3
2 5
3 4
4 2
4 5`)
);
