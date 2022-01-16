// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");
  input = input[1].split("").slice(0, input[0]).join("");

  let answer;
  let hashMap = new Map();
  for (let str of input) {
    hashMap.has(str) ? hashMap.set(str, hashMap.get(str) + 1) : hashMap.set(str, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  hashMap.forEach((value, key) => {
    if (max < value) {
      max = value;
      answer = key;
    }
  });

  return answer;
}
//출력
console.log(
  solution(`15
BACBACCACCBDEDE`)
);
