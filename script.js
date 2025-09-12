
// function squaredArray(array,message){
//     let square= array.map(x=> x*x);
//     message(square);
// }

// function callback(square){
//     console.log("successfully completed",square)
// }

// let array= [1,2,3,4]
// squaredArray(array,callback)

//successfully completed [ 1, 4, 9, 16 ]






// function squaredArray(array,message){
//     let square= array.map(x=> x*x);
//     console.log(square);
//     message();
// }

// function callback(){
//     setTimeout( ()=>   console.log("successfully completed"),3000)
// }

// let array= [1,2,3,4]
// squaredArray(array,callback)

//successfully completed [ 1, 4, 9, 16 ]


// function processData(array, succesfun, failfunc) {
//     try {
//         if ( array.length >0 ) {
//             let newarray= array.map(x => x*2)
//             succesfun(newarray);
//         }
//         else {
//             failfunc();
//         }

//     } catch (error){
//     }

// }

// processData([],
//     (newarray) => { console.log("Processed succesfully",newarray); },
//     (error) => { console.log("unsucefull") }
// )

//unsucefull





// console.log(Math.floor(  Math.random() *  (30-10)  +  10  ))








// let b= [23,345,5,31,3,3,53,5,3,]
// let a = ["anshad","rahees","shukoor","daujda"]
// console.log(
//     b.sort( (a,b)=> a-b)
// )
// console.log(
//     a.sort()
// )


// [
//    3,  3,  3,   5, 5,
//   23, 31, 53, 345
// ]
// [ 'anshad', 'daujda', 'rahees', 'shukoor' ]




//-------------------recusive-----------
// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(10)); // 55



// function fibTail(n, a = 0, b = 1) {
//   if (n === 0) return a;
//   if (n === 1) return b;
//   return fibTail(n - 1, b, a + b); // tail call
// }

// console.log(fibTail(6)); // 8


//-------------------recusive with momoization-----------
// function fib(n, cache = {}) {
//   if (n in cache) return cache[n];  
//   if (n <= 1) return n;
//   cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
//   return cache[n];
// }

// console.log(fib(10)); // 55
// console.log(fib(10)); // 12586269025 




//---------------genrator function--------
// function* numberGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = numberGenerator();

// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: undefined, done: true }

// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
// console.log(gen.next().value); // undefined




// function* countUpto(n) {
//   for (let i = 0; i <= n; i++) {
//     yield i;
//   }
// }

// const gen = countUpto(5);
//  console.log(gen.next().value);
//   console.log(gen.next().value);
//    console.log(gen.next().value);



// function* countUpto(n) {
//   for (let i = 0; i <= n; i++) {
//     yield i;
//   }
// }

// const gen = countUpto(5);

// for (let value of gen) {
//   console.log(value);
// }

// 0
// 1
// 2
// 3
// 4
// 5





//------------Recursive Fibonacci Generator
// function* fibonacci(n, a = 0, b = 1) {
//   if (n === 0) return;
//   yield a;
//   yield* fibonacci(n - 1, b, a + b); // recursive delegation
// }

// const gen = fibonacci(10);
// console.log(gen.next());
// console.log(gen.next());



// ✅ Output (first 10 Fibonacci numbers):
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34







//------function currying


// function add(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(1)(2)(3)); // 6



// const add = a => b => c => a + b + c;
// console.log(add(1)(2)(3)); // 6





//----------nested callback hell----


// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 done");
//     callback();
//   }, 6000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2 done");
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3 done");
//     callback();
//   }, 1000);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       console.log("All tasks completed ✅");
//     });
//   });
// });




//-----------solved hell by promice
// function task1() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Task 1 done");
//       resolve();
//     }, 1000);
//   });
// }

// function task2() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Task 2 done");
//       resolve();
//     }, 1000);
//   });
// }

// function task3() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Task 3 done");
//       resolve();
//     }, 1000);
//   });
// }

// task1()
//   .then(task2)
//   .then(task3)
//   .then(() => console.log("All tasks completed ✅"));














//-------------promice---------


// const myPromise = new Promise((resolve, reject) => {
//   let success = false;

//   setTimeout(() => {
//     if (success) {
//       resolve(" Task completed");
//     } else {
//       reject(" Task failed");
//     }
//   }, 1000);
// });

// myPromise
//   .then(result => {
//     console.log(result); // Task completed
//   })
//   .catch(error => {
//     console.error(error); // Task failed
//   })
//   .finally(() => {
//     console.log("Promise settled (success or failure)");
//   });



//----------async await------

// async function testcompleted() {
//     let result = new Promise(
//       (resolve, reject) =>
//         setTimeout(() => {
//             console.log("hi"),
//                 resolve("task completed")
//         }, 2000)
//     )
//     return console.log(await result);
// }
// testcompleted();


//---------------try catch------


async function testcompleted() {
    try {
        let result = new Promise((resolve, reject) =>
            setTimeout(() => {
                console.log("hi"),
                    resolve("task completed")
            }, 2000))
        let output = await result;
        console.log(output)
    }
    catch(error){
        console.log(error)
    }
}
testcompleted();

















//--------------fetch api-------------------

fetch("https://catfact.ninja/fact")
    .then(resolve => resolve.json())
    .then((data) => {
        console.log(data)
        console.log(data.length)
    }
    )
    .catch(error => console.log(error)
    )


