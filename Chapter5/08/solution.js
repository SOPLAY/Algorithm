// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");

  //Map compare function
  function checkMap(map1) {
    if (map1.size !== check.size) return false;
    for (let [key, value] of check) {
      if (map1.get(key) !== value) return false;
    }
    return true;
  }

  let hs = new Map();
  let check = new Map();

  for (let str of input[1]) {
    check.set(str, check.has(str) ? check.get(str) + 1 : 1);
  }

  let answer = 0;

  let lt = 0;
  let rt = 0;
  while (rt < input[0].length) {
    if (hs.size < input[1].length) {
      hs.set(input[0][rt], hs.has(input[0][rt]) ? hs.get(input[0][rt]) + 1 : 1);
      rt++;
    }
    if (hs.size >= input[1].length) {
      checkMap(hs) && answer++;
      hs.get(input[0][lt]) === 1 ? hs.delete(input[0][lt]) : hs.set(input[0][lt], hs.get(input[0][lt]) - 1);
      lt++;
    }
  }

  return answer;
}

//출력
console.log(
  solution(`bacaAacba
abc`)
);
