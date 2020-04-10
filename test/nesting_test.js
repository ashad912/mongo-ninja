import assert from 'assert'
import mongoose, { MongooseDocument } from 'mongoose'

import {Author} from '../models/author'

// describe our tests

describe('nesting records', () => {

    beforeEach((done)=>{
        mongoose.connection.collections.authors.drop(()=>{
            done();
        })
    })
    
    it('creates an author with sub-docs', (done)=> {
        let pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        })

        pat.save().then(()=>{
            Author.findOne({name: 'Patrick Rothfuss'}).then((record)=>{
                assert(record.books.length === 1)
                done()
            })
        })
    })

    it('adds a book to an author', (done) => {
        let pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        })

        pat.save().then(()=>{
            Author.findOne({name: 'Patrick Rothfuss'}).then((record)=>{
                record.books.push({title: 'Wise Man\'s Fear', pages: 500}) //can use template: "bla bla's bla"
                record.save().then(()=> {
                    /*Author.findOne({name: 'Patrick Rothfuss'}).then((result)=> {
                        assert(result.books.length === 2)
                        done()
                    })*/
                    Author.findOne(
                    { $and: [
                        {name: 'Patrick Rothfuss'},
                        //{books: {$in: [{title: "Wise Man's Fear"}]}} //does not work
                        {'books.title': {$in: ["Wise Man's Fear"]}}
                        ]
                    }).then((result) => {
                        let bookFound = result.books.find((book)=>{
                            return book.title === "Wise Man's Fear"
                        })
                        assert(bookFound.name !== null)
                        done()
                      
                    }).catch((err) => {
                        console.log('Error: ', err)
                    })
                })
            })
        })
    })
    
})