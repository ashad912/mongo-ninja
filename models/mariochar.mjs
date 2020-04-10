import mongoose from 'mongoose'


//create Schema and Model

const MarioCharSchema = new mongoose.Schema({ //schema means structure of collection
    name: String,
    weight: Number //it's optional, hwvr if we have weight it must be a number!
})

export const MarioChar = new mongoose.model('mariochar', MarioCharSchema); //model means collection
//whenever you create new MarioChar it's created in 'mariochar' collection (!!!) with MarioCharSchema

/* in next tuts:

const myChar = new MarioChar({}) <- params bla bla

*/