// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");
  let queue = input[0].split("");
  let answer = "YES";
  for (let str of input[1]) {
    if (queue.includes(str)) {
      if (str !== queue.shift()) {
        return "NO";
      }
    }
  }
  answer = queue.length === 0 ? "YES" : "NO";

  return answer;
}

//출력
console.log(
  solution(`CBA
CBDAGE`)
);
