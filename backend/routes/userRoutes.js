import express from  'express';
const router = express.Router();
import { 
    authUser,
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile 
} from '../controllers/userController.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);


export default router;