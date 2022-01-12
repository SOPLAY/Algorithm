// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  let size = input[0].split(" ").map((v) => parseInt(v));
  input = input[1]
    .split(" ")
    .slice(0, size[0])
    .map((v) => parseInt(v));

  let answer = 0;

  let leftPoint = 0;
  let rightPoint = 0;
  let sum = 0;

  // rightPoint가 마지막에 도달하면 끝난다!
  while (rightPoint < input.length) {
    if (sum === size[1]) {
      answer++;
      sum -= input[leftPoint++];
    } else if (sum < size[1]) {
      sum += input[rightPoint++];
    } else {
      sum -= input[leftPoint++];
    }
  }

  return answer;
}

//출력
console.log(
  solution(`8 6
1 2 1 3 1 1 1 2`)
);
