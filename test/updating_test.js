import assert from "assert";
import {MarioChar} from '../models/mariochar.mjs'

/*
3 methods of updatin:

- on instance - char.update()
- on model - MarioChar.update() - have to pass some criteria
- combo on model - MarioChar.findOneAndUpdate()

*/

const testName = 'Boster'
const updateName = 'Luigi'

//Describe test
describe("updating records", () => {

    let char;
    //we have to create record before finding
    beforeEach((done)=>{
        char = new MarioChar({
            name: testName,
            weight: 50 
        });

        char.save().then(()=>{ 
            done(); 
        
        }) 
    })

    //create tests
    it('updates one record from the db (by id)', (done) => {
        MarioChar.findOneAndUpdate({_id: char._id}, {name: updateName}).then(() => { //change: corresponding to 'id' instead 'name'
            MarioChar.findOne({_id: char._id}).then((result)=>{
                assert(result.name === updateName)
                done()
            })
        
        }) 

        
    })

    it('increments the weight by 1 (all records in collection)', (done) => {
        MarioChar.updateMany({}, {$inc: { weight: 1}}).then(()=> { //actual is updateMany not update; to sub weight it can be used: -1
            MarioChar.findOne({name: testName}).then((record)=> {
                assert(record.weight === 51)
                done()
            })
        }) 
        //another update operators ->
        //https://docs.mongodb.com/manual/reference/operator/update/
        
    })


    
})



