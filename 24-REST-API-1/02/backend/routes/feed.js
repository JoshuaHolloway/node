const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feed');

// GET /feed/posts Requests get handled by getPosts controller
router.get('/posts', feedController.getPosts);

// POST /feed/post Requests get handled by createPost
router.post('/post', feedController.createPost);

module.exports = router;