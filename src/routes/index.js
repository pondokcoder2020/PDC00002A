import express from 'express';
import { JWTGenerator } from '../middleware/index.js';
import {
  indexAPI,
  pegawaiManager,
  dataMasterInventori
} from '../controllers/index.js';
const router = express.Router();
router.get('/', indexAPI);
router.post('/pegawai', pegawaiManager);
router.post('/master/inventory', JWTGenerator, dataMasterInventori);

export default router;
