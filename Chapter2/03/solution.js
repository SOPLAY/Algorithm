// 문제 풀이
function solution(inputValue) {
  let input = inputValue.split("\n");
  let com1 = input[1].split(" ").slice(0, input[0]);
  let com2 = input[2].split(" ").slice(0, input[0]);

  let res = [];
  for (let i in com1) {
    res.push(com1[i] * 1 - com2[i] * 1);
  }
  /*
  가위 1  //   바위 2  //   보 3 
  A B res(A-B)
  1 1 0  D
  1 2 -1 B
  1 3 -2 A
  2 1 1  A
  2 2 0  D
  2 3 -1 B
  3 1 2  B
  3 2 1  A
  3 3 0  D
  
  res 
  0 => 비김
  -1 2 => B
  -2 1 => A
  */
  let answer = [];
  for (let sTemp of res) {
    let str = "";
    if (sTemp === 0) str = "D";
    else if (sTemp === -1 || sTemp === 2) str = "B";
    else str = "A";
    answer.push(str);
  }

  return answer.join("\n");
}

//출력
console.log(
  solution(`5
2 3 3 1 3
1 1 2 2 3`)
);
