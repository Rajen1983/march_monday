

// // // var a = 5;
// // // var b = a++;
// // // console.log(a)
// // // console.log(b)

// // // var a = 2;
// // // var b = a++;
// // // let f = a+5;
// // // console.log(a)
// // // console.log(b)
// // // console.log(f)

// // // var x = 5;
// // // console.log(x++)
// // // console.log(x)

// // // var a = 5;
// // // var b = a++;
// // // var c = b++;
// // // var d = c++;
// // // console.log(a+b+c+d)

// // // var x = 10;
// // // var y = x++;
// // // var z = y++;
// // // var a = z++;
// // // console.log(x+y+z+a)

// // // let light="green";

// // // if(light=="green"){
// // //     console.log("go");
// // // } 
// // // else{
// // //     console.log("stop");
// // // }

// // // let number=10;
// // // if(number>=0){
// // //     console.log("possitive");
// // // } else{
// // //     console.log("stop");
// // // }

// // let numbers = 11;
// // if(numbers % 2 == 0){
// //     console.log("even")
// // }
// // else{
// //     console.log("odd")
// // }


// // let price = 99;
// // if (price >= 100){
// //     console.log("discount20")
// // }

// // else if(price >=50){
// //     console.log("discount 10")
// // }

// // else{
// //     console.log("discount 0")
// // }

// let num1=10;
// let num2=15;
// if(num1>num2){
//     console.log("num1 is larger")
// }
// else if(num1<num2){
//     console.log("num1 is smaller")
// }
// else if(num1==num2){
//     console.log("num1 and num2 is eqaul")
// }
// else{
//     console.log("not valid")
// }

// let light="green";
// if(light==green){
//     console.log("go")
// }
// else if(light==yellow){
//     console.log("slow down")
// }
// else if (light==red){
//     console.log("stop")
// }
// else {
//     console.log("close")
// }

// let light = "black";
// if (light === "green") {
//     console.log("go");
// }
// else if (light === "yellow") {
//     console.log("slow down");
// }
// else if (light === "red") {
//     console.log("stop");
// }
// else {
//     console.log("traffic light kharab hai");
// }

// let price= 300;
// let discount;
// if (price<=1000 && price>=500) {
//     discount=200
// }
// else if (price<500 && price>=200) {
//     discount=100
// }
// else if (price<200 && price>=50) {
//     discount=0
// }
// else {
//     discount=0
// }
// console.log("discount Rs", discount);

// let direction= "north";
// let go;
// if (direction==="north") {
//     go="straight";
// }
// else if (direction==="west") {
//     go="right";
// }
// else if (direction==="east") {
//     go="left";
// }
// else {
//   go="stop";  
// }
// console.log("chal", go);

// let price= 150;
// let discount;
// let gst=price*(18/100)
// if (price<=1000 && price>=500) {
//     // discount=price*(60/100);
//     discount=price-price*(80/100)+gst;
// }
// else if (price<500 && price>=200) {
//     discount=price-price*(60/100)+gst;
// }
// else if (price<200 && price>=50) {
//     discount=price-price*(40/100)+gst;
// }
// else {
//     discount=0
// }
// console.log("discount Rs", discount);

let age=17;
let price=100;
let inshurance=1;
if (age <9){
    price=0;
}
else if(age>=9 && age<18){
    price=(price/2+inshurance);
}
else if(age>=18 && age<60){
    price=(price+inshurance);
}
else if(age>=60 && age<79){
    price=(price/2+inshurance);
}
else{
     price=0;
    }
console.log ("ticket lagega-Rs",price)

// let age = 17;
// let price = 100;
// let insurance = 1;

// if (age < 9) {
//     price = 0;
// } else if (age >= 9 && age < 18) {
//     price = (price / 2 + insurance);
// } else if (age >= 18 && age < 60) {
//     price = (price + insurance);
// } else if (age >= 60 && age < 79) {
//     price = (price / 2 + insurance);
// } else {
//     price = 0;
// }

// console.log("Ticket lagega - Rs", price);