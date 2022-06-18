// 문제 풀이
function solution(inputValue) {
  let arr = inputValue.split("\n").map((v) => v.split(" ").map(Number));
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let answer = 0;

  const DFS = (x, y) => {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  };
  arr[0][0] = 1;
  DFS(0, 0);

  return answer;
}

//출력
console.log(
  solution(`0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0`)
);
