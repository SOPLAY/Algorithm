let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 5, 3, 7, 2, 3, 0],
  [0, 3, 7, 1, 6, 1, 0],
  [0, 7, 2, 5, 3, 4, 0],
  [0, 4, 3, 6, 4, 1, 0],
  [0, 8, 7, 3, 5, 2, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
let res = `<table border="1" align="center">
    ${arr.map((v) => `<tr>${v.map((v2) => `<td>${v2}</td>`)}</tr>`)}
</table>`;
//console.log(res.replace(/,/g, ""));

let res2 = `|${arr.map((v) => v.map((v2) => `${v2}|`) + "\n|")}`.replace(
  /,/g,
  ""
);
console.log(res2);
