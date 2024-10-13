// const fs = require("fs/promises");
const fs = require("fs");

const content = "rahul is default";

fs.writeFile(__dirname+"/3-a.txt" , content, err => {
    if(err){
        console.log(err);
    }
    else{
        console.log("file written successfully");
    }
})