// 문제 풀이
function solution(inputValue) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  let input = inputValue.split("\n");
  input = input[1]
    .split(" ")
    .slice(0, input[0] * 1)
    .map((v) => v * 1);

  for (let temp of input) {
    let sum = String(temp)
      .split("")
      .map((v) => v * 1)
      .reduce((a, b) => a + b);
    if (sum > max) {
      max = sum;
      answer = temp;
    } else if (sum === max) {
      answer = answer * 1 > temp * 1 ? answer : temp;
    }
  }

  return answer;
}

//출력
console.log(
  solution(`7
128 460 603 40 521 137 123`)
);
