import { Router } from "express";
const studentRouter = Router();
import StudentController from '../controllers/StudentController.js';

studentRouter.get('/home', StudentController.home);
studentRouter.get('/', StudentController.getAllStudents);
studentRouter.post('/', StudentController.addStudent);
studentRouter.get('/:id', StudentController.getAStudent);
studentRouter.put('/:id', StudentController.updatedStudent);
studentRouter.delete('/:id', StudentController.deleteStudent);

export { studentRouter };