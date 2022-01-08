// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  let size = input
    .shift()
    .split(" ")
    .map((v) => parseInt(v));
  input = input[0]
    .split(" ")
    .slice(0, size[0])
    .map((v) => parseInt(v));
  let set = new Set();
  for (let i = 0; i < size[0] - 2; i++) {
    for (let j = i + 1; j < size[0] - 1; j++) {
      for (let k = j + 1; k < size[0]; k++) {
        set.add(input[i] + input[j] + input[k]);
      }
    }
  }
  let arr = Array.from(set);
  arr.sort((a, b) => b - a);
  let answer = arr[size[1] - 1];

  return answer;
}

//출력
console.log(
  solution(`10 3
13 15 34 23 45 65 33 11 26 42`)
);
