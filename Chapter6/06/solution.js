// 문제 풀이
function solution(inputValue) {
  let input = inputValue
    .trim()
    .split(" ")
    .map((v) => v * 1);

  let answer = 0;

  let qu = Array(input[0])
    .fill(0)
    .map((v, i) => i + 1);

  while (qu.length > 1) {
    for (let i = 1; i < input[1]; i++) qu.push(qu.shift());
    qu.shift();
  }

  answer = qu.pop();

  return answer;
}

//출력
console.log(solution(`8 3`));
