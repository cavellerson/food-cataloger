const express = require("express")
const foods = express.Router()

const Food = require("../models/food.js")

foods.get ("/", (req, res) => {
    Food.find({}, (err, foundFoods) => {
        res.json(foundFoods)
    })
})

foods.post("/", (req, res) => {
    Food.create(req.body, (err, createFood) => {
        Food.find({}, (err, foundFoods) => {
            res.json(foundFoods)
        })
    })
})

foods.put("/:id", (req, res) => {
    Food.findByIdAndUpdate(
      req.params.id, req.body, { new: true },(err, updatedFood) => {
        if (err) {
          console.log(err);
        } else {
          Food.find({}, (err, updatedFood) => {
            res.json(updatedFood)
          })
        }
      }
    )
  })

  foods.delete("/:id", (req, res) => {
      Food.findByIdAndRemove(req.params.id, (err, deleteFood) => {
          Food.find({}, (err, foundFoods) => {
              res.json(foundFoods)
          })
      })
  })


module.exports = foods
