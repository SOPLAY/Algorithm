// 문제 풀이
function solution(inputValue) {
  let answer = [];
  let input = inputValue.trim().split("\n");
  //현재 원소들은 문자 형태
  answer = input[1]
    .split(" ")
    .slice(0, input[0])
    .map((v) => v.split("").reverse().join("") * 1)
    .filter((v) => checkPrime(v));
  return answer.join(" ");
}

//소수 체크 함수(약식 #범위는 10만 미만)
function checkPrime(number) {
  let res = true;
  if (number !== 2 && number > 2) {
    for (let i = 3; i <= parseInt(number / 2); i++) {
      if (number % i === 0) {
        res = false;
        break;
      }
    }
  } else if (number === 2) {
    res = true;
  } else {
    res = false;
  }
  return res;
}

//출력
console.log(
  solution(`9
32 55 62 20 250 370 200 30 100`)
);
