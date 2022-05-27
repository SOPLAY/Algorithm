// 문제 풀이
function solution(inputValue) {
  let [size, arr, current] = inputValue.split("\n");
  size = +size;
  current = +current;
  arr = arr
    .split(" ")
    .slice(0, size)
    .map((v) => +v);

  let answer = Number.MAX_SAFE_INTEGER;
  let flag = 0;
  const DFS = (v, sum) => {
    if (sum > current || v >= answer) return;
    if (sum === current) {
      console.log(v, sum);
      answer = Math.min(answer, v);
    } else {
      for (let i in arr) {
        DFS(v + 1, sum + arr[i]);
      }
    }
  };
  DFS(0, 0);

  return answer;
}

//출력
console.log(
  solution(`3
1 2 5
15`)
);
