// 문제 풀이
function solution(inputValue) {
  let [[nodeCount, lineCount], ...arr] = inputValue.split("\n").map((v) => v.split(" ").map(Number));
  arr = arr.slice(0, lineCount);
  let gh = Array.from(Array(nodeCount + 1), () => Array());
  let ch = Array.from({ length: nodeCount + 1 }, () => 0);
  let answer = 0;
  for (let [a, b] of arr) {
    gh[a].push(b);
  }
  gh; //?

  const DFS = (v) => {
    if (v === nodeCount) {
      answer++;
    } else {
      for (let i = 0; i < gh[v].length; i++) {
        let currentValue = gh[v][i];
        if (ch[currentValue] === 0) {
          ch[currentValue] = 1;
          DFS(currentValue);
          ch[currentValue] = 0;
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
