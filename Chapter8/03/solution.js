// 문제 풀이
function solution(inputValue) {
  let input = parseInt(inputValue.trim());
  let answer = [];

  const DFS = (L) => {
    if (L >= 8) {
      return;
    } else {
      console.log(L);
      DFS(L * 2);
      DFS(L * 2 + 1);
    }
  };

  DFS(input);

  return answer.join("");
}

//출력
console.log(solution(`1`));
