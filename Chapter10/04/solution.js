// 문제 풀이
function solution(inputValue) {
  let [[size], coin, [target]] = inputValue.split("\n").map((v) => v.split(" ").map(Number));
  let dy = Array.from({ length: target + 1 }, () => 1000);
  dy[0] = 0;
  let answer = 0;
  for (let i = 0; i < size; i++) {
    for (let j = coin[i]; j <= target; j += coin[i]) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[target];

  return answer;
}

//출력
console.log(
  solution(`3
1 2 5
15`)
);
