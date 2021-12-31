// 문제 풀이
function solution(inputValue) {
  let answer = "YES";
  inputValue = inputValue.toLowerCase();
  let len = inputValue.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (inputValue[i] !== inputValue[len - 1 - i]) {
      answer = "NO";
    }
  }
  console.log(inputValue);
  return answer;
}

//출력
console.log(solution(`gooG`));
