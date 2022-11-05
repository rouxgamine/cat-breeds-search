const { update } = require('../models/cat')
const Cat = require('../models/cat')

const dataController = {
    //Index 
    index(req, res, next){
        // Cat.find(function(err, foundCats){
        Cat.find({}, (err, foundCats) => {
            // console.log(foundCats)
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.cats = foundCats
                next()
            }
        })
    },
    //Destroy
    destroy(req, res, next){
        Cat.findByIdAndDelete(req.params.id, (err, deletedCat) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.cat = deletedCat
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        Cat.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCat)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.cat = updatedCat 
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        Cat.create(req.body, (err, createdCat)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.cat = createdCat
                next()
            }
        })
    },
    //Edit
    //Show
    show(req, res, next){
        Cat.findById(req.params.id,(err, foundCat) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a cat breed with that ID'
                })
            } else {
                res.locals.data.cat = foundCat
                next()
            }
        })
    }
}

module.exports = dataController