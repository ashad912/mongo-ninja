import assert from "assert";
import {MarioChar} from '../models/mariochar.mjs'

//.save() method is executed on instances (like objects) - char.save()
//.find() method is executed on models (like class and static method :) ) - MarioChar.find()

const testName = 'Yoshi'

//Describe test
describe("finding records", () => {

    let char;
    //we have to create record before finding
    beforeEach((done)=>{
        char = new MarioChar({
            name: testName
        });

        char.save().then(()=>{ 
            done(); 
        
        }) 
    })

    //create tests
    it('finds one record from the db', (done) => {
        MarioChar.findOne({name: testName}).then((result) => { //without param, it finds every single record
            assert(result.name === testName)
            done()
        }) 

        
    })

    it('finds one record by id from the db', (done) => {
        MarioChar.findOne({_id: char._id}).then((result) => { //without param, it finds every single record
            assert(result._id.toString() === char._id.toString()) //result._id is an Mongo object, char._id is a local object - should by stringify
            done()
        }) 

        
    })

    
})

