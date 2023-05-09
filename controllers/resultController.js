const express = require('express');
const router = express.Router();
const Results = require('../models/Results');
const { requireToken } = require('../middelware/auth');



// All results
router.get('/', async (req, res, next) => {
    try {
        const results = await Results.find({});
        res.json(results);
    } catch (err) {
        next(err);
    }
});

// Result by ID
router.get('/:id', requireToken, async (req, res, next) => {
    try {
        const result = await Results.findById({ _id: req.params.id});
        res.json(result);
    } catch (err) {
        next(err);
    }
});

// Post results
router.post('/', async (req, res, next) => {
    try {
        const newResult = await Results.create(req.body);
        res.json(newResult);
    } catch (err) {
        next(err);
    }
});

//Delete result 
router.delete('/:id', requireToken, async(req, res, next) => {
    try {
        const deleteResult = await Results.findByIdAndDelete(req.params.id);
        if (deleteResult){
            res.json(deleteResult)
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router
