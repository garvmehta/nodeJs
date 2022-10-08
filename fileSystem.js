const fs = require('fs');



// make folder in server
fs.mkdirSync("main", (err) => {
        if (err) {
            console.log(`Folder is not create due to ${err}`);

        } else {
            console.log("Folder is created.....");

        }
    })
    // remove folder
fs.rmdir("main", (err) => {
        if (err) console.log(err)
        console.log("folder is deleted")
    })
    // create new file and write in it
fs.writeFileSync('./main/index.js', "console.log(`hello guys ...`)", (err) => {
        console.log(err);
    })
    // update file in server

let appendData = ` for(let i = 0 ; i<5; i++){
 console.log("it's loop");   
}`;

fs.appendFileSync('./main/index.js', appendData, (err) => {
        console.log(err);
    })
    // delete file
fs.unlinkSync("./main/index.js", (err) => {
        console.log(err);
    })
    // this is file system branch