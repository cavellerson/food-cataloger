const express = require("express")
const food = express.Router()

const Food = require("../models/food.js")

food.get ("/", (req, res) => {
    Food.find({}, (err, foundFood) => {
        res.json(foundFood)
    })
})

food.post("/", (req, res) => {
    Food.creat(req.body, (err, creatFood) => {
        Food.find({}, (err, foundFoods) => {
            res.json(foundFoods)
        })
    })
})