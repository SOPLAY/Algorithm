// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  let [total, size] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  input = input.slice(0, size).map((v) => +v);

  let answer = 0;
  const DFS = (v, sum) => {
    if (sum > total) return;
    if (v === size) {
      answer = Math.max(answer, sum);
    } else {
      DFS(v + 1, sum + input[v]);
      DFS(v + 1, sum);
    }
  };
  DFS(0, 0);
  return answer;
}

//출력
console.log(
  solution(`259 5
81
58
42
33
61`)
);
