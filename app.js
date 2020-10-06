'use strict';
const fs = require('fs');
const fileName = './test.txt';
writeGreetingsSync();


function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
      fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

async function writeGreetingsSync() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n', 'utf8');
        await appendFilePromise(fileName, 'こんばんは\n', 'utf8');
    }
}
