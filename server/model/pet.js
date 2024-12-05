// MVC --> Model , View , Controller (Routers)
let mongoose = require('mongoose')
// create a model class
let petModel = mongoose.Schema({
    PetName:String,
    Age: String,
    Breed:String,
    Description:String,
    Price:Number
},
{
    collection:"pets"
}
)
module.exports = mongoose.model('Pet',petModel)