// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  input = input[1]
    .split(" ")
    .slice(0, input[0])
    .map((v) => parseInt(v));

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      //javascripts 최신 문법에서는 파이썬과 같은 스왑이 지원된다.
      if (input[i] > input[j]) [input[i], input[j]] = [input[j], input[i]];
    }
  }
  let answer = input.join(" ");

  return answer;
}

//출력
console.log(
  solution(`6
13 5 11 7 23 15`)
);
