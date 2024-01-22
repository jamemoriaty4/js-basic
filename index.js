var firstname = "Academy";
var lastname = "Rikkei";
var fullName = "Rikkei Academy";

var x = firstname + "  " + lastname;

console.log(x);
// liệt kê kiieuer dữ liệu

var interger = 10;
var character = "Phung Dang";
var boolean = false;
var string = "Hoc lap trinh";
var N = null;
var A = NaN;

console.log(interger);
console.log(character);
console.log(boolean);
console.log(string);
console.log(N);
console.log(A);

//  bài 3

vatLy = prompt("nhap diem vat ly");
hoaHoc = prompt("nhap diem hoa");
sinhHoc = prompt("nhap diem sinh");

let DL = parseInt(vatLy);
let DH = parseInt(hoaHoc);
let DS = parseInt(sinhHoc);

var dtb = parseFloat(DL + DH + DS) / 3;
console.log(dtb);
// bài 4;
doC = prompt("vao do C: ");
let C = parseInt(doC);

let F = (9 * C) / 5 + 32;

console.log("độ F là : " + F + "*F");

let CD = parseInt(prompt("nhao vao chieu da: "));
let CR = parseInt(prompt("nhao vao chieu rong: "));
console.log(`dien tich hcn la (${CD}*${CR})`);
console.log(`chu vi hcn la ((${CD}+${CR})*2)`);

const pi = 3.14;
let R = parseInt(prompt("nhao vao ban kinh: "));
console.log("chu vi hinh tron la " + pi * 2 * R);
console.log("dien tich hinh tron la " + pi * R * R);

// bài 7
// == là so sánh về giá trị không so sánh về kiểu dữ liệu
// === là so sánh cả về giá trị và kiểu dữ liệu của 2 biến cần so sánh

// bài 8
// ++a

// B1: Tăng giá trị của biến age lên 1 đơn vị
// B2: Trả về giá trị của age vừa được tăng lên

// a++
// B1: Tạo ra một biến age copy => age = 10
// B2: Tăng giá trị của biến age lên một đơn vị => age = 11
// B3: Trả về biến age copy

console.log(0 || NaN || "Rikkei Academy" || null);
console.log(null || NaN || false || null);
console.log(undefined || 1 || 5 || null);
console.log("" || null || 5 || NaN);
console.log(1 || null || 12 || NaN);

console.log(0 && 1 && "Rikkei Academy" && null);
console.log(2 && NaN && false && null);
console.log(3 && 1 && 5 && null);
console.log("1" && undefined && 5 && NaN);
console.log(1 && null && 12 && NaN);
