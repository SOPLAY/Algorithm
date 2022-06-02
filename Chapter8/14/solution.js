// 문제 풀이
function solution(inputValue) {
  let [size, length] = inputValue.toString().trim().split(" ").map(Number);
  let answer = [];

  let temp = Array.from({ length: length }, () => 0);

  const DFS = (v, start) => {
    if (v === length) {
      answer.push(temp.slice());
    } else {
      for (let i = start; i <= size; i++) {
        temp[v] = i;
        DFS(v + 1, i + 1);
      }
    }
  };

  DFS(0, 1);

  return `${answer.map((v) => v.join(" ")).join("\n")}\n${answer.length}`;
}

//출력
console.log(solution(`4 2`));
