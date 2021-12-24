// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");
  input = input.splice(1, input[0] * 1 + 1);
  let answer = input.filter((v, index) => index === input.indexOf(v));

  return answer.join("\n");
}

//출력
console.log(
  solution(`5
good
time
good
time
student`)
);
