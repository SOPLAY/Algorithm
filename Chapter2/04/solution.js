// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  input = input[1]
    .split(" ")
    .slice(0, input[0])
    .map((v) => v * 1);

  let answer = 0;
  let score = 0;
  for (let i of input) {
    score = i === 1 ? score + 1 : 0;
    answer += score;
  }

  return answer;
}

//출력
console.log(
  solution(`10
1 0 1 1 1 0 0 1 1 0`)
);
