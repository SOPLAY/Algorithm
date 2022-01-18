// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");
  let str = new Array();

  for (let i = 0; i < input.length; i++) {
    str[i] = new Map();
    for (let x of input[i]) {
      str[i].set(x, str[i].get(x) ? str[i].get(x) + 1 : 1);
    }
  }
  let answer = "YES";

  str[0].forEach((value, key) => {
    if (str[1].get(key) !== value) {
      answer = "NO";
    }
  });

  return answer;
}

//==============================================

function solution2(inputValue) {
  let input = inputValue.trim().split("\n");

  let str = new Map();

  for (let x of input[0]) {
    str.set(x, str.get(x) ? str.get(x) + 1 : 1);
  }

  let answer = "YES";

  for (let x of input[1]) {
    if (!str.has(x) || str.get(x) === 0) return "NO";
    str.set(x, str.get(x) - 1);
  }
  return answer;
}

//출력
console.log(
  solution2(`AbaAeCe
baeeACA`)
);

console.log(
  solution2(`abaCC
Caaab`)
);
