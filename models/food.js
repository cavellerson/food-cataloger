const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    foodName: String,
    foodImage: String,
    foodCountry: String,
    foodDescription: String,
})

const Food = mongoose.model("Food", animalSchema);

module.exports = Food;
