// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  let size = input
    .shift()
    .split(" ")
    .map((v) => parseInt(v));
  input = input[0]
    .split(" ")
    .slice(0, size[0])
    .map((v) => parseInt(v));

  let answer;

  return answer;
}

//출력
console.log(
  solution(`10 3
13 15 34 23 45 65 33 11 26 42`)
);
