import express from 'express';
import { testEnvironmentVariable } from '../settings.js';
import { indexAPI, dataMasterInventori } from '../controllers/index.js';
const router = express.Router();
router.get('/', indexAPI);
router.get('/master/inventori', dataMasterInventori)

export default router;
