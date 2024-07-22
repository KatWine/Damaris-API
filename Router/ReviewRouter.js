const express = require('express');
const reviewRouter = express.Router({mergeParams:true});
const ReviewModel = require('../Models/ReviewModel');

// get all reviews
reviewRouter.get('/', (req, res) => {
    const allReviews = ReviewModel.getAllReviews();
    res.json(allReviews);
});

// Route to add a new review
reviewRouter.post('/', (req, res) => {
    try {
        const newReviewData = req.body;

        ReviewModel.addReview(newReviewData);

        // Success message
        res.json({
            message: 'Review added successfully',
            newReview: newReviewData,
            allReviews: ReviewModel.getAllReviews()
        });
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error: error.message });
    }
});
// reviewRouter.post('/', (req, res) => {
//     const newReviewData = req.body;

//     // Ensure the review has a unique id
//     newReviewData.id = newReviewData.id || `${Date.now()}`;

//     ReviewModel.addReview(newReviewData);

//     // Success message
//     res.json({
//         message: 'Review added successfully',
//         newReview: newReviewData,
//         allReviews: ReviewModel.getAllReviews()
//     });
// });

// Route to update an existing review
reviewRouter.put('/:id', (req, res) => {
    const reviewId = req.params.id;
    const updatedReviewData = req.body;

    ReviewModel.updateReview(reviewId, updatedReviewData);

    // Success message
    res.json({
        message: 'Review updated successfully',
        updatedReview: updatedReviewData,
        allReviews: ReviewModel.getAllReviews()
    });
});

module.exports = reviewRouter;
