function writeLog(mess, mess2) {
  // 2 tham số
  console.log(mess, mess2);
}
writeLog("Test", 123);

function test() {
  console.log(arguments); // truyền bao nhiêu tham số cũng được, sẽ trả ra 1 mảng
}
test(1, 2, 3, "thanh");

function test2() {
  var myString = "";
  for (var aTest of arguments) {
    // chạy lần 1 sẽ lấy phần tử đầu tiên gán vào aTest, tương tự chạy 3 lần vì có 3 phần tử
    myString += `${aTest} - `;
    console.log(aTest); // in ra thành hàng dọc
  }
  console.log(myString);
}
test2("thanh1", "thanh2", "thanh3");

const courses = [
  {
    id: 123,
    name: "Thanh",
    age: 18,
  },
  { id: 345, name: "Thao", age: 19 },
  {
    id: 678,
    name: "Doanh",
    age: 19,
  },
];
const isAge = courses.find(function (courses) {
  return courses.age == 19;
});
console.log(
  courses.filter((item) => {
    return item.age === 19;
  })
);
