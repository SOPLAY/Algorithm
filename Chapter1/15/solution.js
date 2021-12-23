// 문제 풀이
function solution(str) {
  let answer;
  let middle = Math.floor(str.length / 2);
  answer =
    str.length % 2 === 1
      ? str.substring(middle, middle + 1)
      : str.substring(middle - 1, middle + 1);

  return answer;
}

//출력
console.log(solution("study"));
console.log(solution("good"));
