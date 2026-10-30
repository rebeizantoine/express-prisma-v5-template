const prisma = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');

const getHealthStatus = asyncHandler(async (req, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.status(200).json({
    success: true,
    environment: process.env.NODE_ENV,
    database: 'connected',
    timestamp: new Date().toISOString(),
  });
});

module.exports = {
  getHealthStatus,
};