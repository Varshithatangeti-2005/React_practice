// let name1:string='varshitha';
// console.log(name1);



// function Name():string{
//     return "Varshitha";
// }
// console.log(Name());


//Any in type script--dont know the type of the returning value
// let response: any;
// response = {
//     id: 101,
//     name: "Laptop"
// };
// console.log(response.name);



// | `any`                    | `unknown`              |
// | ------------------------ | ---------------------- |
// | Accepts any value        | Accepts any value      |
// | No type checking         | Requires type checking |
// | Less safe                | More safe              |
// | Can cause runtime errors | Helps prevent errors   |

//unknown is safer because it forces you to verify the type before using it....Instead of using any in the ts it is recommended to use unknown if we dont the type of the returning the value
// let value : unknown="Hello";
// if(typeof value==="string"){
//     console.log(value.toUpperCase());
// }


//never
// function throwError(message:string):never{
//     throw new Error(message);
// }
// throwError("Something went wrong"); 

//undefined
// let n1:string | undefined
// console.log(n1);


// //Null
// let n1:string | null =null;
// console.log(n1);


//Arrays
// let numbers:number[]=[10,20,30,40];
// numbers.push(60);
// console.log(numbers);

// let names: string[] = ["Ram", "Sita", "Krishna"];

// // names.push(100); // ❌ Error
// names.push("Ravi"); // ✔ Allowed

// let data: (string | number)[] = [10, "Hello", 20, "World"];
// data.push(30);      // ✔
// data.push("TS");    // ✔
// // data.push(true); // ❌ Boolean not allowed


//Tuples.
// let student: [number, string, boolean];
// student = [101, "Dora", true]; // ✔
// // student = ["Dora", 101, true]; // ❌ Wrong order

// let student:readonly string[]=["varshi"];
// //wont be added coz it is a readonly array


// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// // comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error 


//objects
// =====================================
// 1. Optional Properties
// =====================================

// type Student = {
//     name: string;
//     age?: number; // Optional property
// };

// // Object with age
// let student1: Student = {
//     name: "Ravi",
//     age: 21
// };

// // Object without age
// let student2: Student = {
//     name: "Sita"
// };

// console.log("Optional Properties");
// console.log(student1);
// console.log(student2);


// // =====================================
// // 2. Index Signatures
// // =====================================

// type Marks = {
//     [subject: string]: number;
// };

// let studentMarks: Marks = {
//     Math: 95,
//     English: 88,
//     Science: 91
// };

// // Adding a new subject dynamically
// studentMarks.History = 85;

// console.log("\nIndex Signatures");
// console.log(studentMarks);


// // =====================================
// // 3. Record<string, number>
// // =====================================

// type ProductStock = Record<string, number>;

// let stock: ProductStock = {
//     Pen: 100,
//     Pencil: 200,
//     Eraser: 50
// };

// // Adding new item
// stock.Marker = 75;

// console.log("\nRecord<string, number>");
// console.log(stock);


// // =====================================
// // 4. Combining All Concepts
// // =====================================

// type Employee = {
//     name: string;
//     age?: number; // Optional property
//     skills: Record<string, number>; // Record
//     marks: {
//         [subject: string]: number; // Index Signature
//     };
// };

// let employee: Employee = {
//     name: "John",

//     // age is optional, so we can omit it

//     skills: {
//         JavaScript: 8,
//         TypeScript: 7,
//         React: 9
//     },

//     marks: {
//         Math: 90,
//         English: 85,
//         Science: 95
//     }
// };

// console.log("\nCombined Example");
// console.log(employee);

// Optional Properties
// { name: 'Ravi', age: 21 }
// { name: 'Sita' }

// Index Signatures
// { Math: 95, English: 88, Science: 91, History: 85 }

// Record<string, number>
// { Pen: 100, Pencil: 200, Eraser: 50, Marker: 75 }

// Combined Example
// {
//   name: 'John',
//   skills: {
//     JavaScript: 8,
//     TypeScript: 7,
//     React: 9
//   },
//   marks: {
//     Math: 90,
//     English: 85,
//     Science: 95
//   }
// }


//ENum
// Numeric Enum (Default)

// enum Direction1 {
//     North,
//     East,
//     South,
//     West
// }

// console.log(Direction1.North);
// console.log(Direction1.West);


// // Numeric Enum (Initialized)

// enum Direction2 {
//     North = 1,
//     East,
//     South,
//     West
// }

// console.log(Direction2.North);
// console.log(Direction2.West);


// // Numeric Enum (Fully Initialized)

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
// }

// console.log(StatusCodes.NotFound);
// console.log(StatusCodes.Success);


// // String Enum

// enum Direction3 {
//     North = "North",
//     East = "East",
//     South = "South",
//     West = "West"
// }

// console.log(Direction3.North);
// console.log(Direction3.West);



// typescript alias and interfaces  
// // Type Alias

// type Car = {
//     year: number;
//     model: string;
// };

// let car: Car = {
//     year: 2025,
//     model: "Corolla"
// };


// // Union Type

// type Status = "success" | "error";

// let response: Status = "success";


// // Intersection Type

// type Animal = {
//     name: string;
// };

// type Bear = Animal & {
//     honey: boolean;
// };

// let bear: Bear = {
//     name: "Winnie",
//     honey: true
// };


// // Interface

// interface Rectangle {
//     height: number;
//     width: number;
// }

// let rectangle: Rectangle = {
//     height: 20,
//     width: 10
// };


// // Interface Extension

// interface ColoredRectangle extends Rectangle {
//     color: string;
// }

// let box: ColoredRectangle = {
//     height: 30,
//     width: 15,
//     color: "Red"
// };

// console.log(car);
// console.log(response);
// console.log(bear);
// console.log(rectangle);
// console.log(box);



