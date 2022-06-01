// 문제 풀이
function solution(inputValue) {
  let input = inputValue.toString().trim().split(" ").map(Number);
  let answer = 0;

  let dp = Array.from(Array(input[0] + 1), () => Array(input[0] + 1).fill(0));
  let ncr = Array.from({ length: input[0] }, () => 0);
  let ch = Array.from({ length: input[0] + 1 }, () => 0);
  let arr = Array.from({ length: input[0] }, () => 0);

  const NCR = (n, r) => {
    if (dp[n][r] !== 0) return dp[n][r];
    if (n == r || r == 0) return 1;
    else return (dp[n][r] = NCR(n - 1, r - 1) + NCR(n - 1, r));
  };

  for (let i = 0; i < input[0]; i++) {
    ncr[i] = NCR(input[0] - 1, i);
  }
  let flag = false;
  const DFS = (v, sum) => {
    if (flag) return;
    if (v === input[0] && sum === input[1]) {
      answer = arr.slice();
      flag = true;
    } else {
      for (let i = 1; i <= input[0]; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          arr[v] = i;
          DFS(v + 1, sum + arr[v] * ncr[v]);
          ch[i] = 0;
        }
      }
    }
  };
  DFS(0, 0);

  return answer;
}

//출력
console.log(solution(`4 16`));
