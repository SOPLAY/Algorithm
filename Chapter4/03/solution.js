// 문제 풀이
function solution(inputValue) {
  //입력값 정렬
  let input = inputValue.split("\n");
  let size = input
    .shift()
    .split(" ")
    .map((v) => v * 1);
  input = input.slice(0, size[1]).map((v) =>
    v
      .split(" ")
      .slice(0, size[0])
      .map((v) => v * 1)
  );

  let answer = 0; //count
  for (let mentor = 0; mentor < size[0]; mentor++)
    for (let mentee = 0; mentee < size[0]; mentee++) {
      if (mentor !== mentee) {
        let state = true;
        for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
          if (!(input[inputIndex].indexOf(mentor + 1) > input[inputIndex].indexOf(mentee + 1))) {
            state = false;
            break;
          }
        }
        state && answer++;
      }
    }

  return answer;
}

//출력
console.log(
  solution(`4 3
3 4 1 2
4 3 2 1
3 1 4 2`)
);
