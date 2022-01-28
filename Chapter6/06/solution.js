// 문제 풀이
function solution(inputValue) {
  let input = inputValue
    .trim()
    .split(" ")
    .map((v) => v * 1);

  let answer = 0;

  let qu = [];
  for (let i = 0; i < input[0]; i++) {
    qu.push(i + 1);
  }

  while (qu.length > 1) {
    for (let i = 0; i < input[1]; i++) {
      if (i === input[1] - 1) {
        qu.shift();
      } else {
        qu.push(qu.shift());
      }
    }
  }
  answer = qu.pop();

  return answer;
}

//출력
console.log(solution(`8 3`));
