// 문제 풀이
function solution(inputValue) {
  let answer = "";
  let count = 1;
  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] === inputValue[i + 1]) {
      count += 1;
    } else {
      answer += count !== 1 ? `${inputValue[i]}${count}` : inputValue[i];
      count = 1;
    }
  }
  return answer;
}

//출력
console.log(solution(`KKHSSSSSSSE`));
