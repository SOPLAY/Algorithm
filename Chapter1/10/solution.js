// 문제 풀이
function solution(input) {
  input = input.split("\n");
  let answer = input[0].split(input[1]).length - 1;

  return answer;
}

//출력
const input1 = `COMPUTERPROGRAMMING
R`;

console.log(solution(input1));
