// 문제 풀이
function solution(inputValue) {
  inputValue = inputValue.toLowerCase().replace(/[^a-z]/g, "");
  let answer = "YES";
  if (inputValue.split("").reverse().join("") !== inputValue) {
    answer = "NO";
  }
  return answer;
}

//출력
console.log(solution(`found7, time: study; Yduts; emit, 7Dnuof`));
