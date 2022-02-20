// 문제 풀이
function solution(inputValue) {
  let input = parseInt(inputValue.trim());
  let answer = [];

  const DFS = (L) => {
    if (L <= 0) {
      return;
    }
    DFS(parseInt(L / 2));
    L % 2 === 0 ? answer.push(0) : answer.push(1);
  };

  DFS(input);

  return answer.join("");
}

//출력
console.log(solution(`11`));
