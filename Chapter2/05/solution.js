// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  input = input[1]
    .split(" ")
    .slice(0, input[0])
    .map((v) => v * 1);
  let answer = new Array(input.length).fill(1);
  for (let i in answer) {
    for (let j in answer) {
      input[i] < input[j] && answer[i]++;
    }
  }
  return answer.join(" ");
}

//출력
console.log(
  solution(`5
87 89 92 100 76`)
);
