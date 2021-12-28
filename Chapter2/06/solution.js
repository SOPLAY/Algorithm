// 문제 풀이
function solution(inputValue) {
  let answer = Number.MIN_SAFE_INTEGER;

  let input = inputValue.trim().split("\n");
  const size = input.shift() * 1;
  input = input.slice(0, size).map((v) =>
    v
      .split(" ")
      .slice(0, size)
      .map((v2) => v2 * 1)
  );

  //행 열 최댓값
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < size; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < size; j++) {
      sum1 += input[i][j];
      sum2 += input[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  //대각선 최댓값
  sum1 = sum2 = 0;
  for (let i = 0; i < size; i++) {
    sum1 += input[i][i];
    sum2 += input[size - i - 1][size - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

//출력
console.log(
  solution(`5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19`)
);
