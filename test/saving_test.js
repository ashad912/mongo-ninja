import assert from "assert";

//import mocha from 'mocha' //it's not neccessary lol xd

import {MarioChar} from '../models/mariochar.mjs'

//Describe test
describe("saving records", () => {

    //create tests
    it('saves a record to the db', (done) => {
        let char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(()=>{ //method by mongoose - save to collection declared in MarioChar, it's asynchronous!!!
            assert(char.isNew === false) //isNew returned true, if it's new, prepared locally and NOT saved to db yet
            done(); //ok, test it's done - we can move up to the next test; neccessary to pass 'done' param in 'it' func
           
        }) 

        
    })
})

//remember to change package.json file -> test: mocha

//due to es6 - it's neccessary to:
// 1. install 'esm' -> npm i esm
// 2. change package.json test param -> test: "mocha -r esm" or "mocha 'test/demo_test.js' -r esm" (specified file)
// 3. return test file to .js formt (from .mjs)
// 4. can be launch by: 'npm run test' without '--experimental-modules'

