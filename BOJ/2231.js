//const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
const input = process.platform === "linux" ? parseInt(require("fs").readFileSync("/dev/stdin").toString().trim()) : 6;

let std = parseInt(input / 2);

while (std < input) {
  const etc = std
    .toString()
    .split("")
    .map((v) => v * 1)
    .reduce((a, c) => a + c);
  if (std + etc == input) break;
  std++;
}
std = std == input ? 0 : std;
console.log(std);
