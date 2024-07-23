const { v4: uuidv4 } = require('uuid');
const db = require('../database');

class ReviewModel {
    constructor() {
        this.reviews = [];
    }

    getAllReviews() {
        return this.reviews;
    }

    addReview(review) {
        review.id = review.id || uuidv4(); // Ensure each review has a unique id
        this.reviews.push(review);
    }


}

module.exports = new ReviewModel();
