const express = require("express")
const food = express.Router()

const Food = require("../models/food.js")

food.get ("/", (req, res) => {
    Food.find({}, (err, foundFood) => {
        res.json(foundFood)
    })
})

food.post("/", (req, res) => {
    Food.create(req.body, (err, createFood) => {
        Food.find({}, (err, foundFoods) => {
            res.json(foundFoods)
        })
    })
})

Foods.put("/:id", (req, res) => {
    Foods.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedFood) => {
        if (err) {
          res.send(err)
        } else {
          Food.find({}, (err, foundFoods) => {
            res.json(foundFoods)
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
