// 문제 풀이
function solution(inputValue) {
  let [size, input] = inputValue.split("\n").map((v) => v.split(" ").map((v2) => parseInt(v2)));
  size = +size;
  input = input.slice(0, size);
  let total = input.reduce((acc, cur) => acc + cur, 0);

  let answer = "NO",
    flag = 0;

  let ch = Array.from({ length: size }, () => 0);

  const DFS = (v, sum) => {
    if (flag) return;
    if (v === size) {
      if (total === sum * 2) {
        answer = "YES";
        flag = 1;
      }
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
  solution(`6
1 3 5 6 7 10`)
);
