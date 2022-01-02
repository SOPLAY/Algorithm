// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split(" ");
  let str = input[1];
  input = input[0];
  let checkSize = 100;
  let answer = new Array(input.length).fill(checkSize);

  //앞에서 부터 체크
  checkSize = 100;
  for (let i in input) {
    if (input[i] !== str) {
      answer[i] = checkSize++;
    } else {
      checkSize = 0;
      answer[i] = checkSize++;
    }
  }

  //뒤에서 부터도 체크 + 이값과 위 값중 작은값을 채용한다.
  checkSize = 100;
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] !== str) {
      answer[i] = answer[i] > checkSize ? checkSize : answer[i];
      checkSize++;
    } else {
      checkSize = 0;
      checkSize++;
    }
  }

  return answer;
}

//출력
console.log(solution(`teachermode e`));
