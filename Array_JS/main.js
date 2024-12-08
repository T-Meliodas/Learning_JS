var myArr = ["java", "Python", "PHP"];
var myArr2 = ["thanh", 123];
var noi = myArr.concat(myArr2); // nối 2 array
console.log(noi.slice(0)); //cắt tất cả các phần tử trong array(từ vị trí 0)
//console.log(noi.slice(1, 5)); //cắt từ vị trí "1" chọn đến vị trí "2" do con trỏ đang ở đầu vị trí "3"
//console.log(noi.splice(1, 2)); //cắt từ vị trí được chọn, số phần tử đc cắt

noi.splice(0, 1, "first"); //từ vị trí 0, cắt 1 phần tử và thay vào đó là "first"
console.log(noi);


const users = [
  {
    id: 1,
    first_name: "nguyen",
    last_name: "thanh",
  },
  {
    id: 2,
    first_name: "Tran",
    last_name: "tin",
  },
  {
    id: 3,
    first_name: "nguyen",
    last_name: "kin",
  },
];
users.filter((userid) => {  //in ra cái first_name thôi
  console.log(userid.first_name);
});
const userFilter = users.filter((user) => {
  // duyệt qua tất cả danh sách trong users rồi trả về 1 mảng chứa y chang điều kiện
  // nó sẽ trả ra tất cả những phần tử chua "nguyen " luôn
  return user.first_name === "nguyen";
});
//chỉ tìm kiếm cái mảng đầu tiên chứa "nguyen" thôi
const userFind = users.find((user) => {
  return user.first_name === "nguyen";
});
console.log({ userFilter, userFind });
console.log("thanh hahah");
