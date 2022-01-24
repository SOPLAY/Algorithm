// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim();
  let stack = [];

  for (let sTemp of input) {
    if (!isNaN(sTemp)) {
      stack.push(sTemp * 1);
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      sTemp === "+" ? stack.push(lt + rt) : sTemp === "-" ? stack.push(lt - rt) : sTemp === "*" ? stack.push(lt * rt) : stack.push(lt - rt);
    }
  }
  let answer = stack.pop();
  return answer;
}

//출력

console.log(solution(`352+*9-`));
