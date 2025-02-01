
// function waitForSec(resolve){
//     setTimeout(resolve, 5000);
// }

// function setTimeoutPromisified(time){
//     return new Promise2();
// }

// function callback(){
//     console.log("5 seconds passed");
// }

// setTimeoutPromisified(5000).then(callback);

// class Promise2{
//     constructor(time){
//        setTimeout((resolve) => {

//        }, time);
//     }

//     then(){
//         console.log("5 seconds passed");
//     }
// }

// let newPromise = new Promise2(5000);
// newPromise.then();



// let p = new Promise(random);
// console.log(p);

// function random(resolve){
//     resolve;
// }

// setTimeout(function(){
//     console.log("hi");
//     setTimeout(function(){
//         console.log("hello");
//         setTimeout(function(){
//             console.log("hi there");
//         }, 5000)
//     }, 3000)
// }, 1000)

// function step3Done(){
//     console.log("hi there");
// }

// function step2Done(){
//     console.log("hello");
//     setTimeout(step3Done, 5000);
// }

// function step1Done(){
//     console.log("hi");
//     setTimeout(step2Done, 3000);
// }

// setTimeout(step1Done, 1000);

// function setTimeoutPromisified(time){
//     return new Promise(resolve => setTimeout(resolve, time));
// }

// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     return setTimeoutPromisified(3000);
// }).then(function(){
//     console.log("hello");
//     return setTimeoutPromisified(5000);
// }).then(function(){
//     console.log("hi there");
// });

// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hi there");
// }

// solve();

// console.log("hi34");

const fs = require("fs");

// function cb(){
//     console.log("the data is read and written also");
// }


// fs.readFile("a.txt", "utf-8", function(err, data){
//     data = data.trim();
//     fs.writeFile("c.txt", data, function(){
//         cb();
//     });
// });

// async function main(){
//     await cleanFile("a.txt");
//     console.log("Code read and write done");
// }

function cleanFile(filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, "utf-8", function(err, data){
            if(err){
                reject("Error while fetching the data");
            } else{
                data = data.trim();
                fs.writeFile("c.txt", data, function(){
                    resolve();
                })
            }
        })
    }); 
}

cleanFile("ax.txt").then(function(){
    console.log("The code is working fine");
}).catch(function(err){
    console.log("Some error found" + err);
})

// main();