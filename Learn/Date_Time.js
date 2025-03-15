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
    `Day: ${date.getDate()} month: ${date.getMonth() + 1} year: ${date.getFullYear()}`
  );
  