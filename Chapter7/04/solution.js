// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  input = input[1]
    .split(" ")
    .slice(0, input[0])
    .map((v) => parseInt(v));

  for (let i = 0; i < input.length; i++) {
    let temp = input[i];
    for (let j = i - 1; j >= 0; j--) {
      if (input[j] > temp) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
      } else {
        input[j + 1] = temp;
        break;
      }
    }
  }
  let answer = input.join(" ");

  return answer;
}

//출력
console.log(
  solution(`6
11 7 5 6 10 9`)
);
