// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  input = input[1]
    .split(" ")
    .slice(0, input[0])
    .map((v) => parseInt(v));

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      if (input[j] > 0 && input[j + 1] < 0) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
      }
    }
  }
  let answer = input.join(" ");

  return answer;
}

//출력
console.log(
  solution(`8
1 2 3 -3 -2 5 6 -6`)
);
