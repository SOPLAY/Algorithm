// 문제 풀이
function solution(input) {
  const temp = input.split("\n");
  const answer = temp[1]
    .split(" ")
    .map((v) => v * 1)
    .filter((v) => v % 10 === temp[0] * 1).length;
  return answer;
}

//출력
const case1 = `3
25 23 11 47 53 17 33`;
console.log(solution(case1));

const case2 = `0
12 20 54 30 87 91 30`;
console.log(solution(case2));
