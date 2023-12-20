import { User } from "../Models/User.Model.js";
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email }).select('+password');

        // Check if the user exists and the password is correct
        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.status(401).json({
                status: 'fail',
                message: 'Incorrect email or password'
            });
        }

        // Generate a token and send it along with user data
        const token = jwt.sign({ id: user._id }, 'your-secret-key', {
            expiresIn: '1h' // Adjust the expiration as needed
        });

        res.status(200).json({
            status: 'success',
            token,
            data: {
                user
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
};


// Create a new user
export const createUser = async (req, res) => {
    try {
      // console.log("images",req.file)
      const userData = req.body;

      const images = req.files;
      //  console.log("Images",images)
       
        userData.images = images.map(file => ({
            filename: file.filename,
            path: file.path
        }));
      

        const newUser = await User.create(userData);
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'User not found'
        });
    }
};

// Update a user by ID
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                user: updatedUser
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: 'User not found'
        });
    }
};

export const markAttendance = async (req, res) => {
    const { userId, classId } = req.params;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { attendance: classId } },
        { new: true }
      );
  
      res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 'fail',
        message: error.message,
      });
    }
  };

export const addAchievement = async (req, res) => {
    const { userId } = req.params;
    const { achievement } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { achievements: achievement } },
        { new: true }
      );
  
      res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 'fail',
        message: error.message,
      });
    }
  };

  export const addAssessment = async (req, res) => {
    const { userId } = req.params;
    const { assessmentId } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { assessments: assessmentId } },
        { new: true }
      );
  
      res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 'fail',
        message: error.message,
      });
    }
  };

  export const submitAssessmentForm = async (req, res) => {
    const { userId, classId, formData } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $push: {
            classFeedback: {
              classId,
              formData,
            },
          },
        },
        { new: true }
      );
  
      res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 'fail',
        message: error.message,
      });
    }
  };

  export const uploadImages =  async (req, res) => {
    try {
        // Assuming you have the user ID available in req.user._id
        const userId = req.user._id;

        // Update the user document with the uploaded image details
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    images: {
                        filename: req.file.filename,
                        path: req.file.path
                    }
                }
            },
            { new: true } // Return the updated user document
        );

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
