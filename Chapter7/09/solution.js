// 문제 풀이
function solution(inputValue) {
  let answer = 0;
  let input = inputValue.trim().split("\n");
  let size = input.shift() * 1;
  input = input.map((value) =>
    value
      .split(" ")
      .slice(0, size)
      .map((v) => parseInt(v))
  );

  let timeLine = [];
  input.forEach((value) => {
    timeLine.push([value[0], "i"]); //in
    timeLine.push([value[1], "o"]); //out
  });

  timeLine.sort((a, b) =>
    a[0] === b[0] ? b[1].charCodeAt() - a[1].charCodeAt() : a[0] - b[0]
  );

  let count = 0;
  for (let i of timeLine) {
    i[1] === "i" ? count++ : count--;
    answer = Math.max(answer, count);
  }

  return answer;
}

//출력
console.log(
  solution(`5
14 18
12 15
15 20
20 30
5 14`)
);
