import asyncHandler from 'express-async-handler';

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Auth User' })
});

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register User' });
});

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Login User' });
});

// @desc    Logout a user
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ' Logout User' });
}); 

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User profile' });
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ' Update User profilu' });
}); 


export {
    authUser,
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}