// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");

  let size = input
    .shift()
    .split(" ")
    .map((v) => v * 1);

  input = input.slice(0, size[0]).map((v) => v.split(" ").map((v2) => v2 * 1));

  //합으로 정렬
  input.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 금액 => size[1]
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < input.length; i++) {
    let acount = 0;
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      let plus = i === j ? input[j][0] / 2 + input[j][1] : input[j][0] + input[j][1];
      if (acount + plus <= size[1]) {
        acount += plus;
        count++;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

//출력
console.log(
  solution(`5 28
6 6
2 2
4 3
4 5
10 3`)
);
