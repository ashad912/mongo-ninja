import assert from "assert";

//import mocha from 'mocha' //it's not neccessary lol xd


//Describe test
/*
describe("some demo tests", () => {

    //create tests
    it('adds two numbers together', () => {
       assert(2 + 3 === 5) //it passes, it's absolutly true
    })
})
*/

//remember to change package.json file -> test: mocha

//due to es6 - it's neccessary to:
// 1. install 'esm' -> npm i esm
// 2. change package.json test param -> test: "mocha -r esm" or "mocha 'test/demo_test.js' -r esm" (specified file)
// 3. return test file to .js formt (from .mjs)
// 4. can be launch by: 'npm run test' without '--experimental-modules'


//IMPORTANT!!!
/* Mocha runs all files inside the test folder so all of them have to have .js format!
Form 'esm' installation all files can be with .js format - to run them you need to type: 'node -r esm <file>"
*/