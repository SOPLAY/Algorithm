// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  let size = input
    .shift()
    .split(" ")
    .map((v) => v * 1);

  input = input.slice(0, size[1]).map((v) =>
    v
      .split(" ")
      .slice(0, size[0])
      .map((v) => v * 1)
  );
  let stdLow = new Array(size[0]).fill(Number.MIN_SAFE_INTEGER);
  let stdHigh = new Array(size[0]).fill(Number.MAX_SAFE_INTEGER);
  input.forEach((exam) => {
    for (let i = 0; i < exam.length; i++) {
      let stdNo = exam[i] - 1;
      let grade = i + 1;
      stdLow[stdNo] = grade > stdLow[stdNo] ? grade : stdLow[stdNo];
      stdHigh[stdNo] = grade < stdHigh[stdNo] ? grade : stdHigh[stdNo];
    }
  });
  stdLow;
  stdHigh;
  let answer = 0;
  for (let i = 0; i < stdLow.length; i++) {
    for (let j = 0; j < stdLow.length; j++) {
      if (i !== j && stdLow[i] <= stdHigh[j]) {
        console.log(i + 1, j + 1);
        answer++;
      }
    }
  }

  return answer;
}

//출력
console.log(
  solution(`4 3
3 4 1 2
4 3 2 1
3 1 4 2`)
);
