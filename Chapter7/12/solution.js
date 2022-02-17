// 문제 풀이
function solution(inputValue) {
  let answer = 0;
  let input = inputValue
    .split("\n")
    .map((v) => v.split(" ").map((v2) => parseInt(v2)));

  let size = input[0];

  input = input[1].slice(0, size[0]).sort((a, b) => a - b);

  let lt = 1;
  let rt = Math.max(...input);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (Count(mid, input) < size[1]) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
      answer = mid;
    }
  }
  return answer;
}

function Count(mid, arr) {
  let count = 1;
  let prev = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[prev] >= mid) {
      count++;
      prev = i;
    }
  }

  return count;
}

//출력
console.log(
  solution(`5 3
1 2 8 4 9`)
);
