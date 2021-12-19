// 문제 풀이
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
}
function solution2(n) {
  let answer = (n * (n + 1)) / 2;
  return answer;
}

//출력
console.log(solution(6));
console.log(solution(10));

console.log(solution2(6));
console.log(solution2(10));
