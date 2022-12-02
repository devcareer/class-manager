/* eslint-disable no-useless-catch */
import database from '../db/models/index.js';

class MessageService {
  static async getAllMessages() {
    try {
      const result = await database.Message.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addMessage(newMessage) {
    try {
      const result = await database.Message.create(newMessage);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateMessage(id, updateMessage) {
    try {
      const messageToUpdate = await database.Message.findOne({
        where: { id: id }
      });

      if (messageToUpdate) {
        await database.Message.update(updateMessage, { where: { id: id } });

        return updateMessage;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAMessage(id) {
    try {
      const aMessage = await database.Message.findOne({
        where: { id: id}
      });

      return aMessage;
    } catch (error) {
      throw error;
    }
  }

  static async deleteMessage(id) {
    try {
      const messageToDelete = await database.Message.findOne({ where: { id: id } });

      if (messageToDelete) {
        const deletedMessage = await database.Message.destroy({
          where: { id: id }
        });
        return deletedMessage;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default MessageService;
