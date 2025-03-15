let Date_Timecurrent = () => {
  let date = new Date(2024, 2, 15);
  console.log(date);
  console.log(date.toLocaleDateString());
};
Date_Timecurrent();
//Output: 2024-3-15
//Output: 3/15/2024
let Date_Time = () => {
  let date = new Date();
  console.log(date);
};
Date_Time();
//Output: 2021-3-15T08:00:00.000Z
