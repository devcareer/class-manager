import database from '../db/models/index.js';
import path from 'path';

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

  static async uploadAssignment(files, id) {
    // const validator = await database.Message.findOne({
    //   where: { id: Number(id) }
    // })
    // if(!validator){
    //   util.setError(400, 'Please select a file for upload');
    //   return util.send(res);
    // }
    try {
      Object.keys(files).forEach(key => {
        const filePath = path.join('./', 'files/assignmentSubmissions', `${id}`, files[key].name)
        files[key].mv(filePath)
      })
    } catch (error) {
      throw error;
    }
  }

}

export default AssignmentService;
