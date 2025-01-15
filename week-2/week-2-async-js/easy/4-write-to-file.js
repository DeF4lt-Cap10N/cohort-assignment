// const fs = require("fs/promises");
const fs = require("fs");

const content = "what we know is drom what we don't know is ocean";

let print = (err, data) => {
    if(err){
        console.log("invalid");
    }
    else{
        console.log("done!");
    }
}

fs.writeFile(__dirname+"/3-a.txt", content, print);

