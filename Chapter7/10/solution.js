// 문제 풀이
function solution(inputValue) {
  let answer = 0;
  let input = inputValue
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map((v2) => parseInt(v2)));
  let target = input.shift();

  input = input[0].slice(0, target[0]).sort((a, b) => a - b);
  let lt = 0;
  let rt = input.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (input[mid] === target[1]) {
      answer = mid + 1;
      break;
    } else if (input[mid] > target[1]) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

//출력
console.log(
  solution(`8 32
23 87 65 12 57 32 99 81`)
);
