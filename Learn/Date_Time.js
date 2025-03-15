let Date_Timecurrent = () => {
  let date = new Date(2024, 2, 6);
  console.log(date);
  console.log(date.toLocaleDateString("vi-VN")); //Output: 06/03/2024(day/mmonth/year)
};
let Date_Time = () => {
  let date = new Date();
  console.log(date.toLocaleDateString("vi-VN")); // 15/03/2025
  console.log(date.toLocaleTimeString("vi-VN")); // 10:30:00
};

Date_Time();

let date = new Date();
console.log(
  `Day: ${date.getDate()} month: ${
    date.getMonth() + 1
  } year: ${date.getFullYear()}`
);
//
let date1 = new Date();

let day = String(date1.getDate()).padStart(2, "0"); // Thêm '0' nếu nhỏ hơn 10
let month = String(date1.getMonth() + 1).padStart(2, "0"); // Thêm '0' nếu nhỏ hơn 10
let year = date.getFullYear();
//String(value).padStart(2, "0") đảm bảo giá trị có ít nhất 2 ký tự, nếu thiếu thì thêm 0 vào đầu.
console.log(`Day: ${day} month: ${month} year: ${year}`);
// Output: Day: 15 month: 03 year: 2025 (hoặc tương tự)
