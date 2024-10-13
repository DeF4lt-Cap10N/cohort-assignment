const fs = require("fs");

function fileCleaner(){
    const file = __dirname+"/1-file.txt";
    fs.readFile(file, "utf8", (err, data) => {
        if(err){
            console.log(err);
        }

        const temp =data.replace(/\s+/g, " ").trim();//main thing  --> /\s+g --> it clear the space
        
        fs.writeFile(file, temp, "utf8", (err) => {
            if(err){
                console.log(err);
            }
            console.log("file written successfully");
        })
    })
}

fileCleaner();