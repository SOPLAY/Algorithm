// 문제 풀이
function solution(inputValue) {
  let input = inputValue.toString().trim().split(" ").map(Number);
  let answer = 0;
  let dp = Array.from(Array(input[0] + 1), () => Array(input[1] + 1).fill(0));
  const DFS = (n, r) => {
    if (dp[n][r] !== 0) return dp[n][r];
    if (n === r || r === 0) return 1;
    else return (dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };
  answer = DFS(...input);
  return answer;
}

//출력
console.log(solution(`5 3`));
console.log(solution(`33 19`));
