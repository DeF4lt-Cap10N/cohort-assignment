// const fs = require("fs/promises");
 const fs = require("fs");


// fs.readFile(__dirname + "/3-a.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// })


// promise version of read file 
/* 
async function promisified() {
    try {
        const data = await fs.readFile(__dirname + "/3-a.txt", {encoding:"utf8"});
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

promisified();
*/


// let ans = 0
// function sum() {
//     for (let i = 0; i < 1e8; i++) {
//         ans += i;
//     }
//     console.log(ans);
// }
// sum();



let print =(err, data)=>{
    if(err)console.log("Invalid Data");
    else if(data)console.log(data);
}

fs.readFile(__dirname+"/3-a.txt", "utf-8", print);

let cnt = 0;

for(let i=0; i<1e9; i++)cnt++;
console.log(cnt);
console.log("done!");