import { Router } from 'express';
import ScoreController from '../controllers/scoreController.js';

const scoreRouter = Router();

scoreRouter.get('/', ScoreController.getAllScores);
scoreRouter.post('/', ScoreController.addScore);
scoreRouter.get('/:id', ScoreController.getAScore);
scoreRouter.put('/:id', ScoreController.updatedScore);
scoreRouter.delete('/:id', ScoreController.deleteScore);

export default scoreRouter;