// 문제 풀이
function solution(inputValue) {
  let answer;
  let input = inputValue.split("\n").map((v) => v.split(" ").map((v2) => parseInt(v2)));
  let size = input[0][0];
  let cash = new Array(size).fill(0);

  input = input[1].slice(0, input[0][1]).map((v) => parseInt(v));

  input.forEach((v) => {
    let pos = cash.indexOf(v);
    if (pos !== -1) {
      //hits
      cash.splice(pos, 1);
      cash.unshift(v);
    } else {
      //miss
      cash.unshift(v);
      cash.length > size && cash.pop();
    }
    cash[0] = v;
  });

  answer = cash.join(" ");

  return answer;
}

//출력
console.log(
  solution(`5 9
1 2 3 2 6 2 3 5 7`)
);
