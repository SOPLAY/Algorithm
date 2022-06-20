// 문제 풀이
function solution(inputValue) {
  let [state, target] = inputValue.split(" ").map(Number);
  let answer = 0;
  //-1 +1 +5
  const max = Math.max(state, target);
  let ch = Array.from({ length: max + 1 }, () => 0);
  let dis = Array.from({ length: max + 1 }, () => 0);
  let queue = [];
  ch[state] = 1;
  queue.push(state);
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === target) return dis[x] + 1;
      if (nx > 0 && nx <= max && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  dis; //?
  return answer;
}

//출력
console.log(solution(`5 14`));
console.log(solution(`8 3`));
