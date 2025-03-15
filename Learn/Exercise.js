// Tách chuỗi và số
//Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi :
//ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123

let Separate = (aString) => {
  //trước tiên tách từng kí tự ra thành 1 mảng trước, sau đó duyệt qua hết các kí tự
  // mình so sánh chuỗi đó, nếu trong chuỗi có chứa các kí tự: a,b,c,d,e... thì là 1 mảng
  // mảng còn lại là chứa các kí tự 1,2,3,4... có thể dùng "contain"

  let letters = "";
  let numbers = "";
  let tach = aString.split("");
  for (let i = 0; i < tach.length; i++) {
    if (isNaN(tach[i])) {
      letters += tach[i];
    } else {
      numbers += tach[i];
    }
  }
  console.log("Letters: " + letters);
  console.log("Numbers: " + numbers);
};
Separate("a3bc123");

