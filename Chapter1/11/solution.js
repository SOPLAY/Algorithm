// 문제 풀이
function solution(input) {
  let answer = 0;
  for (let x of input) {
    x === x.toUpperCase() && answer++;
  }
  return answer;
}

//출력
const input1 = `KoreaTimeGood`;
console.log(solution(input1));
