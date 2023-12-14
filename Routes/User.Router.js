// Import necessary modules and controllers
import express from 'express';
import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} from '../Controllers/User.Controller.js';


const userRouter = express.Router();

// Create a new user
userRouter.post('/', createUser);

userRouter.post('/login', loginUser);
// Get all users
userRouter.get('/', getUsers);

// Get a single user by ID
userRouter.get('/:id', getUserById);

// Update a user by ID
userRouter.patch('/:id', updateUser);

// Delete a user by ID
userRouter.delete('/:id', deleteUser);

export default userRouter;
