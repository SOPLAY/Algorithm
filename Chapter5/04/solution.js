// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  let size = input[0].split(" ").map((v) => parseInt(v));
  input = input[1]
    .split(" ")
    .slice(0, size[0])
    .map((v) => parseInt(v));

  let answer = 0;

  let lt = 0;

  let sum = 0;
  for (let rt = 0; rt < input.length; rt++) {
    sum += input[rt];
    while (sum > size[1]) sum -= input[lt++];
    answer += rt - lt + 1;
  }

  return answer;
}

/**
1 3 1 2 3
-
1
---
1 3
  3
-----
1 3 1
  3 1
    1
    ---
    1 2
      2
      ---
      2 3
        3

index 0   => 1개
index 0~1 => 2개
index 0~2 => 3개
index 2~3 => 2개
index 3~4 => 2개
=> last - start +1
 */

//출력
console.log(
  solution(`5 5
1 3 1 2 3`)
);
