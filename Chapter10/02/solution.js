// 문제 풀이
/*
 *  1 => 1
 *  2 => 2
 *  3 => 3
 *  4 => 5  //4일 경우 2 와 3 번 계단에서 바로 올수 있다.
 *  5 => 8  // 3번 과 4번에서 바로 올 수 있다. => 3+5
 */
function solution(inputValue) {
  let input = +inputValue + 1;
  let dy = Array.from({ length: inputValue + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i < input + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  let answer = dy[input];

  return answer;
}

//출력
console.log(solution(`7`));
