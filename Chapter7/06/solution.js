// 문제 풀이
function solution(inputValue) {
  let answer = [];
  let input = inputValue.trim().split("\n");

  input = input[1]
    .split(" ")
    .slice(0, input[0])
    .map((v) => parseInt(v));

  let sortInput = input.slice().sort((a, b) => a - b);
  input.forEach((v, i) => v !== sortInput[i] && answer.push(i + 1));

  return answer.join(" ");
}

//출력
console.log(
  solution(`9
120 125 152 130 135 135 143 127 160`)
);

console.log(
  solution(`6
120 130 150 150 130 150`)
);
