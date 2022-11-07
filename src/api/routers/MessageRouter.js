import { Router } from 'express';
import MessageController from '../controllers/MessageController.js';

const messageRouter = Router();

router.get('/', MessageController.getAllMessages);
router.post('/', MessageController.addMessage);
router.get('/:id', MessageController.getAMessage);
router.put('/:id', MessageController.updatedMessage);
router.delete('/:id', MessageController.deleteMessage);

export default messageRouter;