const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.post('/', authMiddleware, reviewController.createReview);
router.get('/product/:productId', reviewController.getProductReviews);
router.delete('/:reviewId', authMiddleware, adminMiddleware, reviewController.deleteReview);

module.exports = router;
