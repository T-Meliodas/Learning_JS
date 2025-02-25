function tim2so(sum, hieu) {
  let x = (sum + hieu) / 2;
  let y = sum - x;
  console.log(`hai số cần tìm là ${x} và ${y}`);
}
// tím số lớn nhất trong mảng[1,4,2,6,9]

function findMaxArr(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
arr = [1, 24, 42, 4, 5];
console.log(findMaxArr(arr));
// tính tổng các chữ số của 1 số nguyên dương
function tongchuso(x) {}
function chiadu(x) {
  let y = x / 10;
  console.log(y);
}
let x = 789;
chiadu(x);
//toán tử 3 ngôi
let number = 10;
let num = number > 0 ? "đúng" : "sai";
console.log(num);
