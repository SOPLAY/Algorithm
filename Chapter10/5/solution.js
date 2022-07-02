// 문제 풀이
function solution(inputValue) {
  let [[size, target], ...arr] = inputValue.split("\n").map((v) => v.split(" ").map(Number));
  let dy = Array.from({ length: target + 1 }, () => 0);
  arr = arr.slice(0, size);
  // arr = arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  //뒤에서 부터 계산한다.!
  let answer = 0;
  for (let i = 0; i < size; i++) {
    let [ps, pt] = arr[i];
    for (let j = target; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[target];
  return answer;
}

//출력
console.log(
  solution(`5 20
10 5
25 12
15 8
6 3
7 4`)
);
