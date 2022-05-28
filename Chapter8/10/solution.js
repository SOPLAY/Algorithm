// 문제 풀이
function solution(inputValue) {
  let [[size, length], arr] = inputValue.split("\n").map((v) => v.split(" ").map((v2) => +v2));
  let answer = [];
  let ch = Array.from({ length: size }, () => 0);
  let temp = Array.from({ length: length }, () => 0);

  const DFS = (v) => {
    if (v === length) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < size; i++) {
        if (!ch[i]) {
          ch[i] = 1;
          temp[v] = arr[i];
          DFS(v + 1);
          ch[i] = 0;
        }
      }
    }
  };
  DFS(0);

  return `${answer.map((v) => v.join(" ")).join("\n")}\n${answer.length}`;
}

//출력
console.log(
  solution(`3 2
3 6 9`)
);
