const express = require('express');
const pizzaModel = require('../models/pizzaModel');

const router = express.Router();

router.get("/getAllPizzas" , async (req , res) => {
    try {
        const pizzas = await pizzaModel.find({});
        res.status(200).json({pizzas});
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;
