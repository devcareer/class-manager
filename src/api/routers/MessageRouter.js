import { Router } from 'express';
import MessageController from '../controllers/MessageController.js';

const messageRouter = Router();

messageRouter.get('/', MessageController.getAllMessages);
messageRouter.post('/', MessageController.addMessage);
messageRouter.get('/:id', MessageController.getAMessage);
messageRouter.put('/:id', MessageController.updatedMessage);
messageRouter.delete('/:id', MessageController.deleteMessage);

export default messageRouter;