import express from 'express';
import { testEnvironmentVariable } from '../settings.js';
const router = express.Router();
router.get('/', function(req, res, next) {
  return res.status(200).json({ message: testEnvironmentVariable });
});

export default router;
