// 문제 풀이
function solution(inputValue) {
  let input = parseInt(inputValue.trim());

  let answer = [];

  const DFS = (L) => {
    if (L <= 0) {
      return;
    }
    DFS(L - 1);
    answer.push(L);
  };

  DFS(input);

  return answer.join(" ");
}

//출력
console.log(solution(`3`));
