// 문제 풀이
function solution(input) {
  let answer = "";
  for (let x of input) {
    answer += x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase();
    // let str = x.charCodeAt();
    // if (str >= 97 && str <= 122) {
    //   answer += String.fromCharCode(str - 32);
    // } else if (str >= 65 && str <= 90) {
    //   answer += String.fromCharCode(str + 32);
    // } else {
    //   //대소문자가 아닌경우
    //   answer += x;
    // }
  }

  return answer;
}

//출력
const input1 = `StuDY`;
console.log(solution(input1));
