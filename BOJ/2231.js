//const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
const size = process.platform === "linux" ? parseInt(require("fs").readFileSync("/dev/stdin").toString().trim()) : 6;
let std = parseInt(size / 2);
while (std < size) {
  const etc = std
    .toString()
    .split("")
    .map((v) => v * 1)
    .reduce((a, c) => a + c);
  if (std + etc == size) break;
  std++;
}
std = std == size ? 0 : std;
console.log(std);
