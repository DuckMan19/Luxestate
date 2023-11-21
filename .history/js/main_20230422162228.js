// es6 
// bài tập 1:viết hàm funcion nhận vào só lượng tham số không giới hạn, hàm trả về độ dài của tất cả tham số.gợi ý dủng reset parameter vd: getLength(1, 3, 5, 7, 9)=> 5
function parameter(...Myparameter) {
  return Myparameter.length
}
console.log(parameter(1, 3, 5, 7, 9));
//bài tập 2:cho một mảng số chẵn và lẻ .viết hàm nhận vào mảng đó và trả về mảng mới gồm những số lẻ dc nhân đôi áp dụng arrow function getnum(1,3,6,9)
const arr = [1, 3, 6, 9]
const functionarr = (getnum) => getnum.filter(num => num % 2 != 0).map(num => num * 2)
console.log(functionarr)