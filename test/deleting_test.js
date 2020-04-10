import assert from "assert";
import {MarioChar} from '../models/mariochar.mjs'

/*
3 methods of removin:

- on instance - char.remove()
- on model - MarioChar.remove() - have to pass some criteria
- combo on model - MarioChar.findOneAndRemove()

*/

const testName = 'Ryu'

//Describe test
describe("deleting records", () => {

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
    it('deletes one record from the db (by id)', (done) => {
        MarioChar.findOneAndRemove({_id: char._id}).then(() => { //change: corresponding to 'id' instead 'name'
            MarioChar.findOne({_id: char._id}).then((result)=>{
                assert(result === null)
                done()
            })
        
        }) 

        
    })


    
})



