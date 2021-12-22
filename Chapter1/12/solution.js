// 문제 풀이
function solution(input) {
  // let answer = input.toUpperCase();
  let answer = "";
  for (let x of input) {
    let charCode = x.charCodeAt();
    answer +=
      charCode >= "97" && charCode <= 122
        ? String.fromCharCode(charCode - 32)
        : x;
  }
  return answer;
}

//출력
const input1 = `ItisTimeToStudy`;
console.log(solution(input1));
