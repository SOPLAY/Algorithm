// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim();
  let answer = "";

  while (input) {
    answer += input[0];
    input = input.replaceAll(input[0], "");
  }

  return answer;
}

//출력
console.log(solution("ksekkset"));
