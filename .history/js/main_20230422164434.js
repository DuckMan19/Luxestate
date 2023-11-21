// es6 
// bài tập 1:viết hàm funcion nhận vào só lượng tham số không giới hạn, hàm trả về độ dài của tất cả tham số.gợi ý dủng reset parameter vd: getLength(1, 3, 5, 7, 9)=> 5
function parameter(...Myparameter) {
  return Myparameter.length
}
console.log(parameter(1, 3, 5, 7, 9));
//bài tập 2:cho một mảng số chẵn và lẻ .viết hàm nhận vào mảng đó và trả về mảng mới gồm những số lẻ dc nhân đôi áp dụng arrow function getnum(1,3,6,9)
const arr = [1, 3, 6, 9];
const functionarr = (getnum) => getnum.filter(num => num % 2 != 0).map(num => num * 2);
console.log(functionarr(arr));
//bài 3:cho 1 mảng gồm 5 object có tên và giá khóa học ,viết hàm trả về tổng giá tiền 3 khóa học cuối cùng áp dụng công thức es6 như destructuring ,reset parameter ,arrow function
function object() {
  const course = [
    {
      name: 'newbie',
      price: 2000
    },
    {
      name: 'react',
      price: 3000
    },
    {
      name: 'wedres',
      price: 4000
    },
    {
      name: 'js',
      price: 3500
    },
    {
      name: 'jsdom',
      price: 1000
    }
  ]
  const sum = (...Mycourse) => {
    const [course2, course3, course4] = [...Mycourse].reduce();
    return course2.price + course3.price + course4.price
  }
  console.log(sum(...course));
}
object()
