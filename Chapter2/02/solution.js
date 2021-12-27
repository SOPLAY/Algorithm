// 문제 풀이
function solution(inputValue) {
  let input = `8
  130 135 148 140 145 150 150 153`.split("\n");
  input = input[1]
    .trim()
    .split(" ")
    .slice(0, input[0] * 1)
    .filter((value, index, arr) => value > arr[index - 1]);
  let answer = input.length;
  return answer;
}

//출력
console.log(
  solution(`8
130 135 148 140 145 150 150 153`)
);
