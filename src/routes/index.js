import express from 'express';
import { testEnvironmentVariable } from '../settings.js';
<<<<<<< HEAD
const router = express.Router();
router.get('/', function(req, res, next) {
  return res.status(200).json({ message: testEnvironmentVariable });
});
=======
import { indexAPI, dataMasterInventori } from '../controllers/index.js';
const router = express.Router();
router.get('/', indexAPI);
router.get('/master/inventori', dataMasterInventori)
>>>>>>> 96f846025d5891871fb79c95e56f7540cefb79a5

export default router;
