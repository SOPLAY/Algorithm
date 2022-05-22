// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n").map((v) => v.split(" ").map((v2) => +v2));
  let [size, maxTime] = input.shift();
  let answer = 0;

  const DFS = (v, socre, time) => {
    if (time > maxTime) return;
    if (v === size) {
      answer = Math.max(answer, socre);
    } else {
      DFS(v + 1, socre + input[v][0], time + input[v][1]);
      DFS(v + 1, socre, time);
    }
  };
  DFS(0, 0, 0);
  return answer;
}

//출력
console.log(
  solution(`5 20
10 5
25 12
15 8
6 3
7 4`)
);
