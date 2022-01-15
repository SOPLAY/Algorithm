// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");
  let size = input[0].split(" ").map((v) => parseInt(v));
  input = input[1]
    .split(" ")
    .slice(0, size[0])
    .map((v) => parseInt(v));

  let answer = Number.MIN_SAFE_INTEGER;

  let sum = 0;
  for (let i = 0; i < size[0]; i++) {
    if (i >= size[1]) {
      sum -= input[i - size[1]];
    }
    sum += input[i];

    answer = answer < sum ? sum : answer;
  }

  return answer;
}
//출력
console.log(
  solution(`10 3
12 15 11 20 25 10 20 19 13 15`)
);
