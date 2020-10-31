const express = require('express');
const router = express.Router();
const model = require('../models/restapi.model');

// Get all
router.get('/', async (req, res) => {
    try {
        const getAll = await model.findAll();
        res.status(200).json(getAll);

    } catch (err) {
        res.status(500).json({ messageErr: err.message });
        // Err with server
    }

})

// Get one
router.get('/:id', async (req, res) => {
    try {
        const getOne = await model.findAll({
            limit: 1,
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(getOne);

    } catch (err) {
        res.status(500).json({ messageErr: err.message });
        // Err with server
    }
})



// Create one
router.post('/', async (req, res) => {
    try {
        const newRest = await model.findOrCreate({
            where: {
                name: req.body.name,
                description: req.body.desc
            }
        })
        res.status(200).json(newRest);

    } catch (err) {
        res.status(400).json({ messageErr: err.message });
        // Err with user, not server
    }
})



// Update one
router.patch('/:id', async (req, res) => {
    try {
        const updateOne = await model.update(
            {
                name: req.body.name,
                description: req.body.desc
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.status(200).send('Update success!');

    } catch (err) {
        res.status(500).json({ messageErr: err.message });
    }
})



// Remove all
router.delete('/', async (req, res) => {
    try {
        const removeAll = await model.destroy({
            where: {}
        })
        res.status(200).send('Removed all success!');

    } catch (err) {
        res.status(500).json({ messageErr: err.message });
    }
})



// Remove one
router.delete('/:id', async (req, res) => {
    try {
        const removeOne = await model.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Removed item with id = ' + req.params.id);

    } catch (err) {
        res.status(500).json({ messageErr: err.message });
    }
})


module.exports = router;