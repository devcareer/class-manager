import { Router } from 'express';
import scoreController from '../controllers/scoreController.js';

const scoreRouter = Router();


scoreRouter.post('/', scoreController.addScore);
scoreRouter.put('/:id', scoreController.updatedScore);
scoreRouter.delete('/:id', scoreController.deleteScore);

export default scoreRouter;