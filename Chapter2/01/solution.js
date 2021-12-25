// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");
  input = input[1]
    .split(" ")
    .slice(0, input[0] * 1)
    .map((v) => parseInt(v))
    .filter((v, i, arr) => (i === 0 ? true : arr[i - 1] < v));
  let answer = input;

  return answer.join(" ");
}

//출력
console.log(
  solution(`6
7 3 9 5 6 12`)
);
