/*// Bài tập phân 1.1
//Bài tập 1:Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu true/false
function bai1(n){
  if(n % 2 === 0){
    return true;
  }return false;
}
console.log(bai1(7));
//Bài tập 2:Viết hàm kiểm tra số đó có chia hết cho 3 hay không?
let x = function bai2(n){
  if(n % 3 == 0){
    return true;
  }return false;
}
console.log(x(4));
// Baì tập 3 :Khai báo 2 số a = 4, b = 12, in kết quả bằng console.: Tính tổng 2 số a và b? Lấy b chia a, lấy phần 
// dư? Lấy b chia a, lấy phần nguyên?
let a = 4;
let b= 12;
console.log(`Tong cua a va b ${a + b }`);
console.log(`Phan du cua a va b ${b % a }`);
console.log(`Phan nguyen cua a va b ${b / a }`);
//Bai tap 4:In ra họ và tên của mình bằng cách khai báo 1 biến chứa họ và biến chứa tên, có khoảng trắng 
// giữa họ và tên của bạn.
let firstName = 'Nguyen',
    lastName = 'Hao';
    console.log(firstName + ' ' + lastName);
//Bai tap 5:Viết hàm so sánh 2 số nguyên. nếu a > b thì trả về 1, nếu a < b thì trả về -1, nếu a == b thì trả về 0.
function bai5(a ,b ){
  if(a > b){
    return 1;
  }else if(a < b){
    return -1
  }else if(a === b){
    return 0;
  }
}
console.log(bai5(8,7));
//Bai tap 6:Khai báo một chuỗi ký tự là “happy news year”
// a. In ra tổng số ký tự có trong chuỗi (gợi ý dùng length)
// b. In ra vị trí của chữ “y” từ đầu xuống (gợi ý dùng indexOf)
// c. In ra vị trí của chữ “y” từ dưới lên (gợi ý dùng lastIndexOf)
// d. Dùng replace để thay thế từ “happy” bằng một từ tuỳ ý bạn.
function bai6(){
  const a = 'happy news year';
  console.log(`Tong so ky tu la: ${a.length}`);
  console.log(`Vi tri chu y tu dau xuong: ${a.indexOf("y")}`)
  console.log(`Vi tri chu y tu dau xuong: ${a.lastIndexOf("y")}`)
  console.log(`Tu thay the happy: ${a.replace("happy","GoodLuck")}`)
}
bai6();*/

/*===========================================================BÀI TẬP PHẦN 1.2===================================================================================*/

/*//1. Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng nếu: 
// a. Điểm lớn hơn 8 thì in ra Excellence 
// b. Điểm từ 7 đến 8 thì in ra Good 
// c. Điểm từ 4 - 7 thì in ra Not Good 
// d. Nhỏ hơn 4 thì in ra Bad
function Input(n){
  if( n > 8){
    console.log(`Execllence`);
  }
  else if(n <= 8 && n >= 7){
   console.log(`Good`);
  }
  else if(n >= 4 && n <= 7){
    console.log(`Not Good`);
  }
  else{
console.log(`Bad`);
  }
}(Input(3));

// Bai tap 2:Viết hàm nhập vào 1 chuỗi và chuẩn hóa chuỗi theo định dạng chữ cái đầu tiên của chuỗi phải 
// được in hoa. Các chữ còn lại viết thường. Ví dụ: HOC lập TRình JavAScript thì phải chuyển 
// thành: Học Lập Trình Javascript
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(' ');
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  
  return result.join(' ');
}

titleCase("HOC lập TRình JavAScript");

// Bài tập 3 :Viết hàm định dạng số giây luôn có 2 chữ số. Ví dụ: Nếu người dùng nhập vào: 12 => 12. nếu 
// người dùng nhập vào: 5 => 05
function seconds(n){
return n< 10 ? '0' + n:n;
}
console.log(seconds(4))

// Bài tập 4:Viết hàm trích xuất domain như sau. Ví dụ: - Nếu là cfdcircle@gmail.com => "gmail.com" - Nếu 
// là learning@cfdcircle.vn => "cfdcircle.vn"
function output(address){
  return address.split('@')[1];
}
console.log(output('cfdcircle@gmail.com'))

// Bài tập 5:Viết hàm nhập vào 1 chuỗi và chuyển đổi chuỗi thành path URL. Ví dụ: "javascript cho nguoi 
// moi bat dau" => javascript-cho-nguoi-moi-bat-dau
function domainpath(str){
return str.replace(/ /g,'-')// (/ /g là cho toàn bộ chuỗi)
}
console.log(domainpath("javascript cho nguoi moi bat dau"))*/

//========================================================================PHẦN 2=======================================================================================
/* bài 1:Chạy vòng lặp với i = 0, i < 10, i++. Tính tổng giá trị mỗi lần i tăng lên 1 (gợi ý dùng vòng lặp for
// hoặc while)
function loop() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
loop();
// bài 2:In ra số chẵn từ 0 - 20. (dùng vòng lặp while)?
function even() {
  let n = 0;
  while (n <= 20) {
    if (n % 2 === 0) console.log(n);
    n++;
  }
}
even();

//bài tập 3:Tạo 1 mảng bất kỳ với 5 phần tử, thực hiện xoá 2 phần tử cuối, sau đó in ra mảng kết quả (gợi
//ý dùng: splice)?
let arr = ["mom", "dad", "sister", "grandmother", "grandfather"];
arr.splice(3, 2); //arr.splice(-2)
console.log(arr);

//bài tập 4:Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? In ra chỉ số
// index của mảng? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy? Push thêm 2 phần tử bất kỳ vào mảng đã tạo.
let a = ["Front-end", "React", "WebResponsive"];
console.log(a.length);
for (let i = 0; i < a.length; i++) {
  console.log(i);
}
console.log(a[2]);
console.log(a.join(" , "));
a.push("JS", "NodeJS");
console.log(a);
//bài tập 5:Tạo 1 mảng gồm các phần tử là kiểu số nguyên dương, tính tổng các phần tử có trong mảng?
let int = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i <= int.length; i++) {
  sum += i;
}
console.log(sum);*/

// ===========================================================================PHẦN 2.2===================================================================================
/*// bài tập 1:Viết hàm random một số ngẫu nhiên từ 1 đến n (n là tham số bất kỳ được truyền vào)?
function getrandom(n) {
  return Math.random(n);
}
console.log(getrandom());

// bài tập 2:. Hiển thị một alert thông báo với nội dung bất kỳ sau khi vào trang web sau 4 giây?
setTimeout(function () {
  alert("xin chao mot ngay te nhat!!");
}, 4000);

// bài tập 3: Lấy thời gian hệ thống để tạo đồng hồ bằng javascript, in ra giao diện người dùng t trong thẻ H1
// (gợi ý sử dụng setInterval và đối tượng Date, in ra giao diện thì dùng dùng document.write()).
setInterval(function () {
  const d = new Date();
  let text = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = text;
}, 1000);

// bài tập 4:Tạo một mảng, bên trong gồm 4 đối tượng là các khoá học của CFD Circle, mỗi đối tượng gồm
// các key (thuộc tính) name (tên khoá học), price (giá), date (ngày khai giảng). In ra các đối tượng
// có trong mảng? In ra price (giá khoá học) của từng đối tượng?
function object() {
  let array = [
    { name: "front-end", price: 15000000, date: "15/3/2023" },
    { name: "wed-res", price: 2000000, date: "14/3/2023" },
    { name: "react", price: 3000000, date: "13/3/2023" },
    { name: "master", price: 10000000, date: "12/3/2023" },
  ];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].name,':',array[i].price);
  }
}
object();

// bài tập 5: Tạo 1 một đối tượng car gồm các thuộc tính (key): name, color, price. Kiểm tra xem thuộc tính 
// (key) là speed có tồn tại trong đối tượng car hay không, trả về kiểu boolean. (gợi ý dùng 
// hasOwnProperty)?

function Run(){
  let Car = {
    name:"Ben",
    color:"gray",
    price:1500000
    };
  let Speed = Car.hasOwnProperty("speed")
  console.log(Speed)
}Run()*/
//=============================================================================PHẦN 3=====================================================================================
// Bài tập 1:Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? In ra chỉ số
// index của mảng? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy? Tính tổng giá các khoá học? (bắt buộc dùng 1 trong những Phương
// thức xử lý mảng nâng cao đã học)
function Arr() {
  let arr = [
    { name: "newbie", price: 15 },
    { name: "react", price: 14 },
    { name: "wedres", price: 13 },
  ];
  // In ra số lượng các khoá học?
  let count = 0;
  arr.forEach(function (currentvalues) {
    count++;
  });
  console.log(count);

  //In ra chỉ số index của mảng?
  arr.forEach(function (arrs, index) {
    console.log(index);
  });

  // In ra tên khoá học ở vị trí index thứ 2
  arr.forEach(function (arrs, index) {
    if (index === 2) {
      console.log(arr[2].name);
    }
  });

  //In ra chuỗi tên các khóa học cách nhau bằng dấu phẩy
  let result = arr.map(function (arrs) {
    return arrs.name;
  });
  console.log(result.join(","));

  //Tính tổng giá các khoá học?
  let sum = arr.reduce(function (total, arrs) {
    return total + arrs.price;
  }, 0);
  console.log(sum);
}
Arr();

// bài tập 2:Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng?
function input() {
  let a = [1, 2, 3, 4, 5];
  let result = a.reduce(function (total, e) {
    return total + e;
  });
  console.log(result);
}
input();

// bài tập 3:Viết 1 hàm nhận vào 2 tham số là array và character. Hàm trả về 1 chuỗi là kết quả của việc
// nối các phần tử của array với character? (lưu ý: array là mảng nhận vào, character là ký tự để
// nối các phần tử của mảng).
function array() {
  let array = ["newbie", "wedres", "react"];
  let character = "-";
  array.map(function (arrs) {
    return arrs.array;
  });
  console.log(array.join(character));
}
array();

// bài tập 4:Tạo 1 object user gồm: tên, tuổi, địa chỉ và 1 mảng chứa tên bạn bè. In ra array bạn bè? In ra
// tên của người bạn cuối cùng? In ra địa chỉ của user? Thêm 1 người bạn vào mảng bạn bè? in
// ra độ dài mảng bạn bè?
function object() {
  const user = {
    name: "NguyenHao",
    age: 30,
    address: {
      numbers: '51d,51e',
      street: "duong Ben Nghe",
      district: "Quan 7",
    },
    friends: ["Batman", "Ironman", "Superman", "Aquaman"],
  };

  //in ra array bạn
  user.friends.forEach(function (arrs) {
    console.log(arrs);
  });
  //in ra tên của người bạn cuối cùng
  console.log("Ten cua nguoi ban cuoi cung:" + user.friends[user.friends.length - 1]);
  //in ra địa chỉ của user
  console.log("Dia chi cua user:" + user.address.numbers + ' ' + user.address.street + ' '+ user.address.district);
  //thêm một người bạn vào mảng bạn bè 
  friends= ["Batman", "Ironman", "Superman", "Aquaman"],
}
object();


