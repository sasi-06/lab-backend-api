const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/', async (req, res) => {
    try {
       const newItem=new Item(req.body);
       await newItem.save();
       res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });

    }
});
router.get('/:id', async (req, res) => {
    try {
        const item = await item.find();
        res.json(item)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const updateditem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateditem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    } 
});
router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted successfully' }); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }   
});
module.exports = router;