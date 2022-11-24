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
        where: { id: Number(id) }
      });

      if (AssignmentToUpdate) {
        await database.Assignment.update(updateAssignment, { where: { id: Number(id) } });

        return updateAssignment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAAssignment(id) {
    try {
      const aAssignment = await database.Assignment.findOne({
        where: { id: Number(id) }
      });

      return aAssignment;
    } catch (error) {
      throw error;
    }
  }

  static async deleteAssignment(id) {
    try {
      const AssignmentToDelete = await database.Assignment.findOne({ where: { id: Number(id) } });

      if (AssignmentToDelete) {
        const deletedAssignment = await database.Assignment.destroy({
          where: { id: Number(id) }
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
