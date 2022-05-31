// 문제 풀이
function solution(inputValue) {
  let input = +inputValue;
  let answer = 0;

  const DFS = (v) => {
    if (v === 1) {
      return v;
    } else {
      return v * DFS(v - 1);
    }
  };
  answer = DFS(input);

  return answer;
}

//출력
console.log(solution(`5`));
