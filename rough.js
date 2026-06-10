// const student = {
//     // Primitive Data Types
//     name: "Dora",
//     age: 22,
//     isStudent: true,
//     city: undefined,
//     manager: null,
//     uniqueId: Symbol("id"),
//     bigNumber: 12345678901234567890n,

//     // Array
//     skills: ["JavaScript", "Python", "SQL"],

//     // Nested Object
//     address: {
//         state: "Andhra Pradesh",
//         district: "Visakhapatnam"
//     },

//     // Array of Objects
//     projects: [
//         {
//             id: 1,
//             name: "Student Management System"
//         },
//         {
//             id: 2,
//             name: "Library Management System"
//         }
//     ]
// };

// // -------------------------
// // Dot Notation
// // -------------------------
// console.log(student.name);
// console.log(student.address.state);

// // -------------------------
// // Bracket Notation
// // -------------------------
// console.log(student["age"]);
// console.log(student["address"]["district"]);

// // -------------------------
// // Accessing Array Elements
// // -------------------------
// console.log(student.skills[0]);
// console.log(student.skills[1]);

// // -------------------------
// // Accessing Array of Objects
// // -------------------------
// console.log(student.projects[0].name);
// console.log(student.projects[1].id);

// // -------------------------
// // Dynamic Property Access
// // -------------------------
// let key = "name";

// console.log(student[key]);

// // -------------------------
// // Loop Through Skills Array
// // -------------------------
// for (let i = 0; i < student.skills.length; i++) {
//     console.log(student.skills[i]);
// }

// // -------------------------
// // Loop Through Projects
// // -------------------------
// for (let i = 0; i < student.projects.length; i++) {
//     console.log(student.projects[i].name);
// }

// // -------------------------
// // typeof Examples
// // -------------------------
// console.log(typeof student.name);      // string
// console.log(typeof student.age);       // number
// console.log(typeof student.isStudent); // boolean
// console.log(typeof student.city);      // undefined
// console.log(typeof student.manager);   // object
// console.log(typeof student.bigNumber); // bigint




























// let a = 100;
// let b = 20;

// let input = Number(
//     prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division")
// );

// switch (input) {
//     case 1:
//         console.log(a + b);
//         break;

//     case 2:
//         console.log(a - b);
//         break;

//     case 3:
//         console.log(a * b);
//         break;

//     case 4:
//         console.log(a / b);
//         break;

//     default:
//         console.log("None of the above is selected");
// }

// function appendValue(value) {
//     document.getElementById("display").value += value;
// }

// function clearDisplay() {
//     document.getElementById("display").value = "";
// }

// function calculate() {
//     let expression = document.getElementById("display").value;
//     document.getElementById("display").value = eval(expression);
// }  


//promise all

// let p1 = Promise.resolve("HTML");
// let p2 = Promise.resolve("CSS");
// let p3 = Promise.resolve("JavaScript");

// Promise.all([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// });
// ["HTML", "CSS", "JavaScript"]


// let p1 = Promise.resolve("HTML");
// let p2 = Promise.reject("CSS Error");
// let p3 = Promise.resolve("JavaScript");

// Promise.all([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error) {
//     console.log(error);
// });

// CSS Error



// //promise allsettled
// let p1 = Promise.resolve("HTML");
// let p2 = Promise.reject("CSS Error");
// let p3 = Promise.resolve("JavaScript");

// Promise.allSettled([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// });

// [
//   { status: "fulfilled", value: "HTML" },
//   { status: "rejected", reason: "CSS Error" },
//   { status: "fulfilled", value: "JavaScript" }
// ]


//promise race
// let p1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("HTML");
//     }, 3000);
// });

// let p2 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("CSS");
//     }, 1000);
// });

// Promise.race([p1, p2])
// .then(function(result) {
//     console.log(result);
// });

//CSS--Because CSS finished first.


//race with error
// let p1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("Success");
//     }, 3000);
// });

// let p2 = new Promise(function(reject) {
//     setTimeout(function() {
//         reject("Network Error");
//     }, 1000);
// });

// Promise.race([p1, p2])
// .catch(function(error) {
//     console.log(error);
// });
//Network Error----Error won the race.


//promise.any()
// let p1 = Promise.reject("Server 1 Down");
// let p2 = Promise.resolve("Server 2 Working");
// let p3 = Promise.resolve("Server 3 Working");

// Promise.any([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// });
//Server 2 Working----Even though p1 failed, Promise.any ignores it.

//all fail
// let p1 = Promise.reject("Error 1");
// let p2 = Promise.reject("Error 2");

// Promise.any([p1, p2])
// .catch(function(error) {
//     console.log(error);
// });

// AggregateError----Because every promise failed.










//Async await


// function login(){
//     return new Promise(function(resolve,reject){
//         let password=true;
//         if(password){
//             resolve("The password is correct");
//         }
//         else{
//             reject("The password is incorrect");
//         }

//     })
// }
// async function logging(){
//     try{
//     let data=await login();
//     console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// logging()


// function step1(){
//     return new Promise(function(resolve,reject){
//         // console.log("This is step1");
//         resolve("step1");
//     })
// }
// function step2(){
//     return new Promise(function(resolve,reject){
//         // console.log("THis is step2");
//         resolve("step2");
//     })
// }
// async function result(){
//     let res1=await step1()
//     console.log(res1);
//     let res2=await step2();
//     console.log(res2);
// }
// result();

// function greet(){
//     return new Promise(function(resolve,reject){
//         resolve("Hello");
//     })
// }
// async function hello(){
//     let word=await greet();
//     console.log(word);
//     console.log('world');
// }
// hello()


// this is the sample of the async like returning the promise without using the async it should return like promise and object 
// async function greet() {
//     return "Hello";
// }

// console.log(greet());

async function getUsers(){
    try{
        let response=await fetch();
        if(!response.ok){
            throw new Error("Http exception");
        }
        let data=await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}