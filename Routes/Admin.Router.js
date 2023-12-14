// adminRoutes.js
import express from 'express';
import { createAdmin, deleteAdmin, getAdminById, getAdmins, updateAdmin } from '../Controllers/Admin.Controller.js';


const adminRouter = express.Router();

// CRUD routes for admins
adminRouter.post('/', createAdmin);
adminRouter.get('/', getAdmins);
adminRouter.get('/:id', getAdminById);
adminRouter.put('/:id', updateAdmin);
adminRouter.delete('/:id', deleteAdmin);

export default adminRouter;
