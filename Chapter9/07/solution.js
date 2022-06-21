// 문제 풀이
function solution(inputValue) {
  let [size, ...arr] = inputValue.split("\n").map((v) => v.split(" ").map(Number));
  arr.map((v) => v.slice(0, size)).slice(0, size);
  let dx = [0, 1, 1, 1, 0, -1, -1, -1];
  let dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  let answer = 0;

  const DFS = (x, y) => {
    arr[x][y] = 0;
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < size && ny >= 0 && ny < size && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  };
  let queue = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < size && ny >= 0 && ny < size && arr[nx][ny] === 1) {
              arr[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}

//출력
console.log(
  solution(`7
1 1 0 0 0 1 0
0 1 1 0 1 1 0
0 1 0 0 0 0 0
0 0 0 1 0 1 1
1 1 0 1 1 0 0
1 0 0 0 1 0 0
1 0 1 0 1 0 0`)
);
