// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");
  let arr1 = input[1]
    .split(" ")
    .slice(0, input[0])
    .map((v) => parseInt(v));
  let arr2 = input[3]
    .split(" ")
    .slice(0, input[2])
    .map((v) => parseInt(v));

  let pointer1 = 0;
  let pointer2 = 0;
  let answer = [];
  while (pointer1 < arr1.length && pointer2 < arr2.length) arr1[pointer1] <= arr2[pointer2] ? answer.push(arr1[pointer1++]) : answer.push(arr2[pointer2++]);

  while (pointer1 < arr1.length) answer.push(arr1[pointer1++]);

  while (pointer2 < arr2.length) answer.push(arr2[pointer2++]);

  return answer;
}

//출력
console.log(
  solution(`3
1 3 5
5
2 3 6 7 9`)
);
