import * as controllers from "../controller";
import express from 'express';
import verifyToken from '../middleware/verify_token';

const router = express.Router()

router.use(verifyToken)
router.get('/', controllers.getCurrent)


module.exports = router