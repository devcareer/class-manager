import database from '../db/models/index.js';

class StudentService {
  static async getAllStudents() {
    try {
      const result = await database.User.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  static async addStudent(newStudent) {
    try {
      const result = await database.User.create(newStudent);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateStudent(id, updateStudent) {
    try {
      const studentToUpdate = await database.User.findOne({
        where: { id: id }
      });

      if (studentToUpdate) {
        await database.User.update(updateStudent, { where: { id: id } });

        return updateStudent;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAStudent(id) {
    try {
      const aStudent = await database.User.findOne({
        where: { id: id }
      });

      return aStudent;
    } catch (error) {
      throw error;
    }
  }

  static async deleteStudent(id) {
    try {
      const StudentToDelete = await database.User.findOne({ where: { id: id } });

      if (StudentToDelete) {
        const deletedStudent = await database.User.destroy({
          where: { id: id }
        });
        return deletedStudent;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default StudentService;
