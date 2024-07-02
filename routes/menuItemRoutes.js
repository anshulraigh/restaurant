const express = require('express');
const router = express.Router();
const menuItem = require('../models/menuItem');

router.post('/', async (req, res) => {
    try {
        const newmenuItem = new menuItem(req.body);
        const savedmunuItem = await newmenuItem.save();
        res.status(200).send(savedmunuItem);
        console.log('MenuItem saved successfully');
    } catch (err) {
        res.status(500).send(err);
        console.log('Error while saving menuItem:', err)
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await menuItem.find();
        res.status(200).send(data);
        console.log('MenuItem fetched successfully');
    } catch (err) {
        res.status(500).send(err);
        console.log('Error while fetching menuItem:', err)
    }
})

router.get('/:dishname', async (req, res) => {
    try {
        const dish = req.params.dishname;
        const data = await menuItem.find({ name: dish });
        if (data.length === 0) {
            res.status(400).send('Invalid dish name');
            console.log('Invalid dish name');
        } else {
            res.status(200).send(data);
            console.log('MenuItem fetched successfully');

        }
    } catch (err) {
        res.status(500).send(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const data = req.body;
        const updatedItem = await menuItem.findByIdAndUpdate(itemId, data, {
            new: true,
            runValidators: true
        })
        if (!updatedItem) {
            res.status(400).send('Invalid person id');
            console.log('Invalid person id');
        }
        res.status(200).send(updatedItem);
        console.log('MenuItem updated successfully');
    } catch (err) {
        res.status(500).send(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const deleteItem = await menuItem.findByIdAndDelete(itemId)
        if (!deleteItem) {
            res.status(400).send('Invalid person id');
            console.log('Invalid person id');
        }
        res.status(200).send({ message: 'Item deleted successfully' });
        console.log('MenuItem deleted successfully');
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
