let ran = Math.floor((Math.random() * 99999) + 1);
let age = Math.floor((Math.random() * 22) + 9);
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("id : ", function (id) {
    rl.question("name : ", function (name) {
        rl.question("title : ", function (title) {
            //rl.question("age : ", function (age) {
            console.log(`('000${id}',`, `'${name}',`, `'${title}',`, `'${age}th',`, `'${ran}'),`)
            rl.close()
            // });
        });
    });
});