// 문제 풀이
function solution(inputValue) {
  let answer = [];

  let ch = Array.from({ length: inputValue + 1 }, () => 0);
  const DFS = (v) => {
    if (v === inputValue + 1) {
      let temp = "";
      for (let i = 1; i <= inputValue; i++) {
        if (ch[i] === 1) temp += i + " ";
      }
      temp.length > 0 && answer.push(temp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  };
  DFS(1);
  return answer.join("\n");
}

//출력
console.log(solution(3));
