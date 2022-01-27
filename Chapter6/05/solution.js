// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim();
  let answer = 0;

  let stack = [];

  for (let i in input) {
    if (input[i] === "(") stack.push(input[i]);
    else if (input[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
  }
  return answer;
}

//출력
//case 1
console.log(solution(`()(((()())(())()))(())`));
//case 2
console.log(solution(`(((()(()()))(())()))(()())`));
