// bài 1:Chạy vòng lặp với i = 0, i < 10, i++. Tính tổng giá trị mỗi lần i tăng lên 1 (gợi ý dùng vòng lặp for 
// hoặc while)
function loop(){
  for(let i = 0 ; i <= 10 ; i++){
    console.log(i);
  }
}
loop()
//bài 2:In ra số chẵn từ 0 - 20. (dùng vòng lặp while)?
function even(){
  let n = 20;
  while(n <= 20){
    if(n % 2 == 0)
    console.log(n)
  }
}
even()