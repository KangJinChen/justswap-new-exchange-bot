import fs from 'fs';

let options = {
    flags: 'w',
    encoding: 'utf-8',
}

let stderr = fs.createWriteStream('./log/bot.log', options);
let logger = new console.Console(stderr);

fs.writeFile('./log/bot.log', '', function (err) {
    if(err){
        console.log(err);
    }
});

export default logger;