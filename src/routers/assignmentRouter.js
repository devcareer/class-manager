import { Router } from "express";
const assignmentRouter = Router();
import AssignmentController from '../controllers/assignmentsController.js';

assignmentRouter.get('/home', AssignmentController.home);
assignmentRouter.get('/', AssignmentController.getAllAssignments);
assignmentRouter.post('/', AssignmentController.addAssignment);
assignmentRouter.get('/:id', AssignmentController.getAAssignment);
assignmentRouter.put('/:id', AssignmentController.updatedAssignment);
assignmentRouter.delete('/:id', AssignmentController.deleteAssignment);

export { assignmentRouter };