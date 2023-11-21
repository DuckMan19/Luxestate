// Bài tập phân 1.1
//Bài tập 1:Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu true/false
function check(n){
  if(n % 2 === 0){
    return true;
  }return false;
}
console.log(check(4));
//Bài tập 2:Viết hàm kiểm tra số đó có chia hết cho 3 hay không?
let x = function check(n){
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
function name(){
  a = 'Nguyen';
  b = 'Hao';
 console.log('a' + ' ' + 'b');
}
