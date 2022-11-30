import MessageService from '../services/MessageService.js';
import Util from '../utils/Utils.js';

const util = new Util();

class MessageController {
  static async getAllMessages(req, res) {
    try {
      const allMessages = await MessageService.getAllMessages();
      if (allMessages.length > 0) {
        util.setSuccess(200, 'Messages retrieved', allMessages);
      } else {
        util.setSuccess(200, 'No Message found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addMessage(req, res) {
    if (!req.body.message || !req.body.senderId || !req.body.receiverId) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newMessage = req.body;
    try {
      const createdMessage = await MessageService.addMessage(newMessage);
      util.setSuccess(201, 'Message Added!', createdMessage);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedMessage(req, res) {
    const alteredMessage = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateMessage = await MessageService.updateMessage(id, alteredMessage);
      if (!updateMessage) {
        util.setError(404, `Cannot find Message with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Message updated', updateMessage);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAMessage(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theMessage = await MessageService.getAMessage(id);

      if (!theMessage) {
        util.setError(404, `Cannot find Message with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Message', theMessage);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteMessage(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const MessageToDelete = await MessageService.deleteMessage(id);

      if (MessageToDelete) {
        util.setSuccess(200, 'Message deleted');
      } else {
        util.setError(404, `Message with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default MessageController;