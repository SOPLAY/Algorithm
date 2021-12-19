// 문제 풀이
function solution(arr) {
  let answer;
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      min = min > x ? x : min;
    }
  }
  answer = `${sum}\n${min}`;
  return answer;
}

//출력
console.log(solution([12, 77, 38, 41, 53, 92, 85]));
