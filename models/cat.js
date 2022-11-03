const mongoose = require('mongoose')

// Make a Schema 
const catSchema = new mongoose.Schema({
    breed: { type: String, required: true},
    image: { type: String, required: true},
    temperament: { type: String, required: true},
    characteristics: { type: String, required: true},
    health: { type: String, required: true},
    lifespan: { type: String, required: true}, 
    history: { type: String, required: true}
})

// Make a Model From the Schema, create Cat collection inside  MongoDB  
const Cat = mongoose.model('Cat', catSchema) 

// Export the Model For Use in the App 
module.exports = Cat