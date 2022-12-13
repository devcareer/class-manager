/* eslint-disable no-useless-catch */
import database from '../db/models/index.js';

class AssignmentService {
  static async getAllAssignments() {
    try {
      const result = await database.Assignment.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addAssignment(newAssignment) {
    try {
      const result = await database.Assignment.create(newAssignment);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateAssignment(id, updateAssignment) {
    try {
      const AssignmentToUpdate = await database.Assignment.findOne({
        where: { id: id }
      });

      if (AssignmentToUpdate) {
        await database.Assignment.update(updateAssignment, { where: { id: id } });

        return updateAssignment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAssignment(id) {
    try {
      const aAssignment = await database.Assignment.findOne({
        where: { id: id }
      });

      return aAssignment;
    } catch (error) {
      throw error;
    }
  }

  static async deleteAssignment(id) {
    try {
      const AssignmentToDelete = await database.Assignment.findOne({ where: { id: id } });

      if (AssignmentToDelete) {
        const deletedAssignment = await database.Assignment.destroy({
          where: { id: id }
        });
        return deletedAssignment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default AssignmentService;
