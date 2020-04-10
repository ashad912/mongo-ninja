import mongoose from 'mongoose'


const BookSchema = new mongoose.Schema({ //schema means structure of collection
    title: String,
    pages: Number
})


const AuthorSchema = new mongoose.Schema({ //schema means structure of collection
    name: String,
    age: Number,
    books: [BookSchema]
})

export const Author = new mongoose.model('author', AuthorSchema); //model means collection
//mongo pruralize it author -> authors