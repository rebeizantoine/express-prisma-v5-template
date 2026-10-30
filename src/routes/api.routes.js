const express = require('express');
const router = express.Router();

// Controllers
const { getHealthStatus } = require('../controllers/health.controller');
const { register, login, getUsers } = require('../controllers/auth.controller');

// Health Route
router.get('/health', getHealthStatus);

// Auth Routes
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/users', getUsers);

module.exports = router;