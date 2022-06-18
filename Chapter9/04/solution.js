// 문제 풀이
function solution(inputValue) {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }

  const DFS = (x, y) => {};
  DFS(0, 0);

  return answer;
}

//출력
console.log(solution());
