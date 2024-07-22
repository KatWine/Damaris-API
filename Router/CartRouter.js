const express = require('express');
const cartRouter = express.Router();
const CartModel = require('../Models/CartModel');

// Route to get all items
cartRouter.get('/', (req, res) => {
    try {
        const allItems = CartModel.getAllItems();
        res.json(allItems);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items', error: error.message });
    }
});

// Route to add a new item
cartRouter.post('/', (req, res) => {
    try {
        const cartItemData = req.body;
        CartModel.addItem(cartItemData);

        // Success message
        res.json({
            message: 'Item added successfully',
            cartItem: cartItemData,
            allItems: CartModel.getAllItems()
        });
    } catch (error) {
        res.status(500).json({ message: 'Error adding item', error: error.message });
    }
});

// Route to remove an item
cartRouter.delete('/:id', (req, res) => {
    try {
        const itemId = req.params.id;
        CartModel.removeItem(itemId);

        // Success message
        res.json({
            message: 'Item removed successfully',
            allItems: CartModel.getAllItems()
        });
    } catch (error) {
        res.status(500).json({ message: 'Error removing item', error: error.message });
    }
});

module.exports = cartRouter;
