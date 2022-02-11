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

  input.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let endTime = 0;

  input.forEach((value) => {
    if (value[0] >= endTime) {
      endTime = value[1];
      answer++;
    }
  });

  return answer;
}

//출력
console.log(
  solution(`5
1 4
2 3
3 5
4 6
5 7`)
);

console.log(
  solution(`3
3 3
1 3
2 3`)
);
