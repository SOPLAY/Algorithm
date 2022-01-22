// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim();
  let answer = [];
  for (let str of input) {
    if (str === ")") {
      while (answer.pop() !== "(");
    } else {
      answer.push(str);
    }
  }

  return answer.join("");
}

//출력
console.log(solution(`(A(BC)D)EF(G(H)(IJ)K)LM(N)`));
