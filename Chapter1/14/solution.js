// 문제 풀이
function solution(inputValue) {
  let answer = "";
  let input = inputValue.split("\n");
  const size = input.shift() * 1;
  input = input.slice(0, size);

  let max = 0;
  for (let x of input) {
    if (max < x.length) {
      answer = x;
      max = x.length;
    }
  }

  return answer;
}

//출력
const input1 = `5
teacher
time
student
beautiful
good`;
console.log(solution(input1));
