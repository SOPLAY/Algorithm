// 문제 풀이
function solution(inputValue) {
  let answer = inputValue.toLowerCase().replace(/[^0-9]/g, "") * 1;
  return answer;
}

function solution2(inputValue) {
  let answer = "";
  for (let x of inputValue) {
    if (!isNaN(x)) {
      answer += x;
    }
  }
  return answer * 1;
}

//출력
console.log(solution(`g0en2T0s8eSoft`));
console.log(solution2(`g0en2T0s8eSoft`));
