//concatenate 2 strings

let a = "tôi tên là";
let b = " Nguyễn Hữu Thanh";
let c = a.concat(b);
console.log(c);

// cut a String
let d = "hthanhh";
console.log(d.slice(1, 6)); //thanh

// replace a String
let e = "Nguyễn nguyễn Hữu Thanh  ";
console.log(e.replace("nguyễn", "Tôi là")); //Nguyễn Tôi là Hữu Thanh
console.log(e.replace(/Nguyễn/gi, "love")); //g là thay tất cả có phân biệt hoa vs thường,còn "gi" là không phân biệt

//Tách chuỗi
let fruits = "apple,prange ,banana, grape";
//Tách dựa tren dau
let fruitArray = fruits.split(",");

console.log(fruitArray);
// Output: ["apple", "orange", "banana", "grape"]
// Giới hạn phần tử máng
let fruitArray2 = fruits.split(",", 3);
console.log(fruitArray2);
// Output: ['apple', 'orange', 'banana' ]
