// 문제 풀이
function solution(a, b, c) {
  let answer, max;
  let sum = a + b + c;

  max = a > b ? a : b;
  max = max > c ? max : c;

  answer = sum - max >= max ? "YES" : "NO";
  return answer;
}

//출력
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
