import { Router } from "express";
import teacherController from '../controllers/TeacherController.js'

const teacherRouter = Router();

teacherRouter.get('/', teacherController.getAllTeachers);
teacherRouter.get('/home', teacherController.home);
teacherRouter.post('/', teacherController.addTeacher);
teacherRouter.get('/:id', teacherController.getATeacher);
teacherRouter.put('/:id', teacherController.updatedTeacher);
teacherRouter.delete('/:id', teacherController.deleteTeacher);

export { teacherRouter };