// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split(" ").map((v) => +v);
  let answer = [];
  let ch = Array.from({ length: input[1] }, () => 0); //?

  const DFS = (v) => {
    if (v === input[1]) {
      //얕은 복사를 조심해야 한다.
      // answer.push(ch);
      answer.push(ch.slice());
    } else {
      for (let i = 1; i <= input[0]; i++) {
        ch[v] = i;
        DFS(v + 1);
      }
    }
  };
  DFS(0);
  answer.push(answer.length);

  return answer;
}

//출력
console.log(solution(`3 2`));
