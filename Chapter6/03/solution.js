// 문제 풀이
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    let indexY = 0;
    while (board[indexY][pos - 1] === 0 && indexY < board.length - 1) indexY++;
    let tmp = board[indexY][pos - 1];
    if (tmp !== 0) {
      if (stack[stack.length - 1] === tmp) {
        stack.pop();
        answer += 2;
      } else stack.push(tmp);
      board[indexY][pos - 1] = 0;
    }
  });

  return answer;
}

//출력
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
