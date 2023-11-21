// Bài tập phân 1.1
//Bài tập 1:Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu true/false
function bai1(n){
  if(n % 2 === 0){
    return true;
  }return false;
}
console.log(bai1(4));
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
}else if(a == b){
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
  console.log(`Vi tri chu y tu dau xuong:${a.indexOf}`)
}
bai6();

