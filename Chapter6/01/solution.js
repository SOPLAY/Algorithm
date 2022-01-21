// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim();
  let answer = "YES";
  let tempStack = [];
  for (let str of input) {
    if (str === "(") {
      tempStack.push(str);
    } else {
      if (tempStack.length === 0) return "NO";
      tempStack.pop();
    }
  }
  if (tempStack.length > 0) return "NO";
  return answer;
}

//출력
console.log(solution(`(()(()))(()`));
