// 문제 풀이
function solution(inputValue) {
  let input = inputValue.trim().split("\n");
  let arr1 = input[1]
    .split(" ")
    .slice(0, 5)
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  let arr2 = input[3]
    .split(" ")
    .slice(0, input[2])
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);

  let answer = [];

  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] === arr2[index2]) {
      answer.push(arr1[index1]);
      index1++;
      index2++;
    } else if (arr1[index1] < arr2[index2]) {
      index1++;
    } else {
      index2++;
    }
  }

  return answer;
}

//출력
console.log(
  solution(`5
1 3 9 5 2
5
3 2 5 7 8`)
);
