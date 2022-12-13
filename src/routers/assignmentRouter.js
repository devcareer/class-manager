import { Router } from "express";
import AssignmentController from '../controllers/assignmentsController.js';
const assignmentRouter = Router();

assignmentRouter.get('/home', AssignmentController.home);
assignmentRouter.get('/', AssignmentController.getAllAssignments);
assignmentRouter.post('/', AssignmentController.addAssignment);
assignmentRouter.get('/:id', AssignmentController.getAssignment);
assignmentRouter.put('/:id', AssignmentController.updatedAssignment);
assignmentRouter.delete('/:id', AssignmentController.deleteAssignment);

export { assignmentRouter };