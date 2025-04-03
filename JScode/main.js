/*
var fullName = 'nguyen phuoc thuong';
var age = 22;

console.log(fullName);

//hien thi o xac nhan
confirm('xac nhan ban du tuoi');

//hien thi o de nhap vao
prompt('xac nhan')

//chinhr thoi gian de code chay mili giay
setTimeout(function(){
    alert('thong baos')
}, 2000)
//
var a=1;

a +=2;

console.log(a);

//
var firstName = 'thuong';
var lastName = 'nguyen';

console.log(firstName + ' ' +lastName)

*0
*false
*'' - ""
*undefined
*NaN
*null
*/
/*
if (false) {
    console.log('dieu kien dung')
} else {
    console.log('dieu kien sai')    
}*/
// -----kiem tra a chan le & > 100----
// let a = parseInt(prompt("nhập 1 số bất kì:"));
// if (a % 2 == 0 && a > 100) {
//   console.log(a, " la so chan va lon hon 100");
// } else if (a&2== 0 && a < 100) {
//   console.log(a, " la so chan va be hon 100");
// }else if(a==100){
//   console.log(a," la so chan va = 100")
// } else {
//   console.log(a, " la so le");
// }

// ---------ktra nam nhuan----------
// let a = parseInt(prompt("nhập năm cần kiểm tra :"));
// if ((a % 4 == 0 || a % 400 == 0) && a % 100 != 0) {
//   console.log(a, "la nam nhuan")
// }else{
//   console.log(a, "la nam khong nhuan")
// }

// --------------ktra nam chan le--------------
// let a= parseInt(prompt("nhập năm cần kiểm tra :"));
// if(a%2==0){
//   console.log(a,"la nam chan");
// }else{
//   console.log(a, "la nam le");
// }

// -------------ktra co phai mau xanh do vang khong-----------
// let a = prompt("nhap mau :").toLowerCase().trim();
// if(a=='xanh'){
//   console.log(a, "= xanh")
// }else if(a=='do'){
//   console.log(a, "= do")
// }else if(a=='vang'){
//   console.log(a, "= vang")
// }else {
//   console.log("= mau khac")
// }

/*-------------cho 1 năm bất kỳ, viết code kiểm tra:
nêu năm này < 1900 thì in ra "the kỷ 18"
ngược lại nếu năm này > 1900 thi in ra "the ky 19"
ngược lại nếu năm này > 2000 thi in ra "the ky 20"
ngược lại nếu năm này > 2100 thi in ra "the ky 21"

--------------cho 3 số bất kỳ từ 1-10:

viêt code kiểm tra.
nếu 1 trong 3 số , có 1 số = 1 thì thông báo "loại"
ngược lại nếu có 1 số < 5 thì thông báo "yếu"
ngược lại :

    ++ cộng 3 số đó lai và kiểm tra:
    ++ nếu tổng 3 số < 7 thì thông báo "trung binh"
    ++ nguọc lại nêu tổng > 7 thi thông báo "khá"
    ++ ngươc lại nêu > 8 thi thông báo "gioi"
*/

// let input = prompt("Nhập 3 số từ 1-10, cách nhau bằng dấu cách:");
// let numbers = input.split(" ").map(Number);

// ------------------bai1------------
// let a = prompt("nhap nam bat ki: ");
// if (a < 1900) {
//   console.log(a," la the ki 18");
// } else if (a > 1900 && a <= 2000) {
//   console.log(a," la the ki 19");
// } else if (a > 2000 && a <= 2100) {
//   console.log(a," la the ki 20");
// } else  {
//   console.log(a," la the ki 21");
// }

// ---------------bai 2---------------
// let a = parseFloat(prompt("nhap so a:"));
// let b = parseFloat(prompt("nhap so b:"));
// let c = parseFloat(prompt("nhap so c:"));

// if (isNaN(a) || isNaN(b) || isNaN(c) || a<1 || b<1 || c<1 || a >10 || b>10 ||c>10) {
//   // console.log("Vui lòng nhập số hợp lệ!");
//   alert("vui long nhap so hop le");
// } else {1
//   if (a == 1 || b == 1 || c == 1) {
//     console.log(a, b, c," :loai");
//   } else if (a < 5 || b < 5 || c < 5) {
//     console.log(a, b, c, " :yeu");
//   } else {
//     let sum = (a + b + c) / 3;
//     if (sum < 7) {
//       console.log(a, b, c," :trung binh");
//       console.log(sum.toFixed(2));
//     } else if (sum >= 7 && sum < 8) {
//       console.log(a, b, c," :kha");
//       console.log(sum.toFixed(2));
//     } else {
//       console.log(a, b, c," :gioi");
//       console.log(sum.toFixed(2));
//     }
//   }
// }








// var fullName = 'phuocthuong'; C1
// var fullName = new String('phuoc thuong'); C2
// alert(fullName);
// console.log(typeof fullName) kiem tra data type 

// fistName = 'phuoc';
// lastName = 'thuong';
// console.log("ten toi la: "+ fistName +' '+lastName ) C1
// console.log(`toi la: ${fistName} ${lastName}`); sd dau `` de dua ${bien}



/*
    dung for in ra cac so tu 1-10
dung for in ra cac so le tu 1-10
dung for duyệt qua các số tư 1-10 va in ra các số < 5
dung for duyệt qua các số tư 1-10 va in ra số 6
dung for tinh tong tu 1-10
dung for tinh tong theo cong thuc : s = 1 + 1/n , n la số tự nhiên bất kỳ.
cho 3 số tự nhien, viet hàm tìm số lớn nhất : dung if else
*/


// function b1 (){
//   for(var i=1; i<=10; i++ ){
//       console.log(i);
//   }
// }
// b1();

// function b2(){
//   for(var i=1; i<=10; i++){
//   if(i%2!=0){
//     console.log(i);
//   }
// }
// }
// b2();

// function b3(){
//   for(var i=1; i<=10; i++){
//   if(i<5){
//     console.log(i);
//   }
// }
// }
// b3();

// function b4(){
//   for(var i=1; i<10; i++){
//     if(i==6){
//       console.log(i);
//     }
//   }
// }
// b4();

// function b5(){
//   var s=0;
//   for(var i = 1; i<=10; i++){
//     s+=i;
//   }
//   // return s;
//   console.log(s);
// }
// // console.log(b5());
// b5();

// function b6(n){
//   var s=1;
//   for(var i = 1; i<=n ; i++){
//     s+=1/i;
//   }
//   console.log(s.toFixed(2));
// }
// b6(5);

// function b7(a,b,c){
//   if (a==b==c) {
//         console.log("ba so bang nhau!!!");
//       } else if(a==b && a>c) {
//         console.log("so lon nhat la: ",a);
//       }
//       else if(a==c && a>c){
//         console.log("so lon nhat la: ",a);
//       }
//       else if(b==c && b>c){
//         console.log("so lon nhat la: ",b);
//       }
//       else if(a>b && a>c){
//         console.log("so lon nhat la: ",a);
//       }else if(b>a && b>c){
//         console.log("so lon nhat la: ",b);
//       }else{
//         console.log("so lon nhat la: ",c);
//       }
// }
// b7(1111,154,122);


// for(var i=1; i<=10; i++ ){
//   console.log(i);
// }

// for(var i=1; i<=10; i++){
//   if(i%2!=0){
//     console.log(i);
//   }
// }

// for(var i=1; i<=10; i++){
//   if(i<5){
//     console.log(i);
//   }
// }

// for(var i=1; i<=10; i++){
//   if(i==6){
//     console.log(i);
//   }
// }

// var sum=0;
// for(var i=1; i<=10; i++){
//   sum+=i;
// }
// console.log(sum);

// let n=prompt("nhap so n bat ky: ");
// s=1;
// for(var i = 1; i<=n ; i++){
//   s+=1/i;
// }
// console.log(s);

// console.log(findMax(200, 54, 57));
// function findMax(a, b, c){
//   let max=a;
//   if(b>=max){
//     max=b;
//   }
//   if(c>=max){
//     max=c;
//   }
//   return max
// }

// console.log(findMax(2422, 1115, 2422));
// function findMax(a ,b,c){
//   if (a==b==c) {
//     console.log("ba so bang nhau!!!");
//   } else if(a==b && a>c) {
//     console.log("so lon nhat la: ",a);
//   }
//   else if(a==c && a>c){
//     console.log("so lon nhat la: ",a);
//   }
//   else if(b==c && b>c){
//     console.log("so lon nhat la: ",b);
//   }
//   else if(a>b && a>c){
//     console.log("so lon nhat la: ",a);
//   }else if(b>a && b>c){
//     console.log("so lon nhat la: ",b);
//   }else{
//     console.log("so lon nhat la: ",c);
//   }
// }

// let num;
// while (true) {
//     num = prompt("Nhập một số bất kỳ:");
//     // Kiểm tra nếu num không phải là số hoặc trống
//     if (!isNaN(num) && num.trim() !== "") {
//         num = Number(num); // Chuyển thành số sau khi kiểm tra hợp lệ
//         break;
//     }

//     alert("Lỗi! Vui lòng nhập lại một số hợp lệ.");
// }

// console.log("Số hợp lệ bạn đã nhập là:", num);


/*------------phan2----------------*/
// var mysql ='xin chao js';
// console.log(mysql.toUpperCase);

// console.log(mysql.search('js'));

// .trim() bo khoang trang 

// var language = 'javascript, php , ruby';
// console.log(language.split(', ')) tim die chung de cat thanh array 

// const myString2 = 'thuong nguyen';
// console.log(myString2.charAt(110)); tim in ra 




