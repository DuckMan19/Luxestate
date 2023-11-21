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
  if(n%3==0){
    return true;
  }return false;
}
console.log(x(4));