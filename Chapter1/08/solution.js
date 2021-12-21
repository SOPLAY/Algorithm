// 문제 풀이
function solution(input) {
  let answer = input.split(" ").map((x) => parseInt(x));
  let sum = answer.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[i] + answer[j] === sum - 100) {
        //index 순서 조심하기
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
}

//출력
const input1 = `20 7 23 19 10 15 25 8 13`;
console.log(solution(input1));
