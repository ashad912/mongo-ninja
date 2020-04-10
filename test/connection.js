//READ stuff in demo_test.js
//remember to run: "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"

//remember to change package.json file -> test: mocha

//due to es6 - it's neccessary to:
// 1. install 'esm' -> npm i esm
// 2. change package.json test param -> test: "mocha -r esm" or "mocha 'test/demo_test.js' -r esm" (specified file)
// 3. return test file to .js formt (from .mjs)
// 4. can be launch by: 'npm run test' without '--experimental-modules'

//IMPORTANT!!!
/* Mocha runs all files inside the test folder so all of them have to have .js format!
From 'esm' installation all files can be with .js format - to run them you need to type: 'node -r esm <file>"
*/

import mongoose from 'mongoose'

//es6 promises
mongoose.Promise = global.Promise //overwriting mongoose promise by global es6 promise

//now we have to check establishing db connection before saving anything...
//we have to use hook - bunch of code (func), run before or after tests
// connect to the db before tests run - is required to pass done param, cause '.connect' method is async
before((done) => {

    //connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser: true })
    //mongoose make new port if doesnt exist
    //testaroo also ll be created

    //we have diff dbs in diff projects - in this project it is testaroo

    mongoose.connection.once('open', ()=>{ //info about connection (event listener)
        console.log('connection has been made, now make fireworks...')
        done()
    }).on('error', (err) => { //when error made (another event listener)
        console.log('connection error', err) //comma in console.log gives another param - its not converted to string
    })

    /*
    it's (UP) like jquery

    element.on('click', () => {

    })

    */

})

//we'd like to drop to content of collection before each test (isolation)
// drop the charcs collection before each test

beforeEach((done) => { //before eachtest
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(()=>{
        done() //async -> need to be done
    }) //'mariochars' is pluralized xd
    //after that we suppose to have only one record

    /*I guess: ???
    - delete/remove record
    - drop db/schema/collection
    */
})






