// 문제 풀이
function solution(inputValue) {
  let [size, arr] = inputValue.split("\n").map((v) => v.split(" ").map(Number));
  let answer = 0;
  arr = arr.slice(0, size);
  let dy = Array.from({ length: size }, () => 0);

  dy[0] = 1;
  for (let i = 1; i < size; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dy[j] > max) {
        max = dy[j];
      }
      dy[i] = max + 1;
    }
  }
  answer = Math.max(...dy);
  return answer;
}

//출력
console.log(
  solution(`8
5 3 7 8 6 2 9 4`)
);
