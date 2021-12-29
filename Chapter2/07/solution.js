// 문제 풀이
function solution(inputValue) {
  //입력받은 값 정렬
  let input = inputValue.trim().split("\n");
  const size = input.shift() * 1;
  input = input.slice(0, size).map((v) =>
    v
      .split(" ")
      .slice(0, size)
      .map((v2) => v2 * 1)
  );

  //상 하 좌 우
  const moveX = [0, 0, -1, +1];
  const moveY = [-1, +1, 0, 0];

  let answer = 0;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      //상 하 좌 우 값 저장 변수
      let temp = [];
      //상 하 좌 우 좌표 구하기 및 값 구하기
      for (let indexXY = 0; indexXY < moveX.length; indexXY++) {
        let indexX = i + moveX[indexXY];
        let indexY = j + moveY[indexXY];
        //만약 죄표가 0 보다 작거나 index를 넘어갈 경우 아예 안 구한다.
        if (indexX >= 0 && indexY >= 0 && indexX < size && indexY < size) {
          temp.push(input[indexX][indexY]);
        }
      }
      //구한 값의 최댓값 기준 비교 및 추가
      Math.max(...temp) < input[i][j] && answer++;
    }
  }

  return answer;
}

//출력
console.log(
  solution(`5
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2`)
);
