// 문제 풀이
function solution(inputValue) {
  let answer = "";
  let input = inputValue.trim().split("\n");
  let size = input.shift() * 1;
  input = input.map((v) => v.split(" ").map((v) => parseInt(v)));
  input.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])); //?
  input.forEach((v) => {
    answer += `${v[0]} ${v[1]} \n`;
  });
  return answer.trim();
}

//출력
console.log(
  solution(`5
2 7
1 3
1 2
2 5
3 6`)
);
