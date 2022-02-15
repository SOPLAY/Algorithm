// 문제 풀이
function solution(inputValue) {
  let answer = 0;
  let input = inputValue
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map((v2) => parseInt(v2)));
  let size = input[0];
  input = input[1].slice(0, size[0]);

  let lt = Math.max(...input);
  let rt = input.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(input, mid) <= size[1]) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
const count = (songs, size) => {
  let cnt = 1;
  let sum = 0;
  for (let x of songs) {
    if (sum + x > size) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
};
//출력
console.log(
  solution(`9 3
1 2 3 4 5 6 7 8 9`)
);
