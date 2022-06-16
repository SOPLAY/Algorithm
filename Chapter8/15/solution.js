// 문제 풀이
function solution(inputValue) {
  let [[size, length], arr, [target]] = inputValue
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map((v2) => parseInt(v2)));
  let answer = 0;

  const DFS = (v, start, sum) => {
    if (v === length) {
      if (sum % target === 0) answer++;
    } else {
      for (let i = start; i < size; i++) {
        DFS(v + 1, i + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0, 0);

  return answer;
}

//출력
console.log(
  solution(`5 3
2 4 5 8 12
6`)
);
