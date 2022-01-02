# 봉우리

### 지도 정보가 N\*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.

### 격자의 가장자리는 0으로 초기화 되었다고 가정한다.

### 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

<!-- <table border="1" align="center"> 
    <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
    <tr><td>0</td><td bgcolor="yellow">5</td><td>3</td><td bgcolor="yellow">7</td><td>2</td><td bgcolor="yellow">3</td><td>0</td></tr>
    <tr><td>0</td><td>3</td><td bgcolor="yellow">7</td><td>1</td><td bgcolor="yellow">6</td><td>1</td><td>0</td></tr>
    <tr><td>0</td><td bgcolor="yellow">7</td><td>2</td><td>5</td><td>3</td><td bgcolor="yellow">4</td><td>0</td></tr>
    <tr><td>0</td><td>4</td><td>3</td><td bgcolor="yellow">6</td><td>4</td><td>1</td><td>0</td></tr>
    <tr><td>0</td><td bgcolor="yellow">8</td><td>7</td><td>3</td><td bgcolor="yellow">5</td><td>2</td><td>0</td></tr>
    <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr> 
</table>  -->
<!--
|  0  |                0                 |                0                 |                 0                 |                0                 |                 0                  |  0  |
| :-: | :------------------------------: | :------------------------------: | :-------------------------------: | :------------------------------: | :--------------------------------: | :-: |
|  0  | <span style="color:red">5</span> |                3                 | <span style="color:red">7 </sapn> |                2                 | <span style="color:red"> 3 </span> |  0  |
|  0  |                3                 | <span style="color:red">7</sapn> |                 1                 | <span style="color:red">6</span> |                 1                  |  0  |
|  0  | <span style="color:red">7</span> |                2                 |                 5                 |                3                 |  <span style="color:red">4</span>  |  0  |
|  0  |                4                 |                3                 | <span style="color:red">6</sapn>  |                4                 |                 1                  |  0  |
|  0  | <span style="color:red">8</sapn> |                7                 |                 3                 | <span style="color:red">5</span> |                 2                  |  0  |
|  0  |                0                 |                0                 |                 0                 |                0                 |                 0                  |  0  | -->

<div align="center">

<img style="max-width:300px" src="https://user-images.githubusercontent.com/40691745/147581864-631dee39-cb48-413c-a71c-9fa071fca84f.png">
</div>

---

### 입력 설명

첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.

### 출력설명

봉우리의 개수를 출력하세요.

### 입력예제 1

```
5
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2
```

### 출력예제 1

```
10
```

#### [코드보기](./solution.js)
