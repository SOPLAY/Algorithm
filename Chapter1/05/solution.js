// 문제 풀이
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    min = min > arr[i] ? arr[i] : min;
  }
  answer = min;
  return answer;
}

//출력
console.log(solution([5, 3, 7, 11, 2, 15, 17]));
