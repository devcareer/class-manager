import database from '../db/models/index.js';

class StudentService {
  static async getAllStudents() {
    try {
      const result = await database.Student.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addStudent(newStudent) {
    try {
      const result = await database.Student.create(newStudent);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateStudent(id, updateStudent) {
    try {
      const studentToUpdate = await database.Student.findOne({
        where: { id: Number(id) }
      });

      if (studentToUpdate) {
        await database.Student.update(updateStudent, { where: { id: Number(id) } });

        return updateStudent;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAStudent(id) {
    try {
      const aStudent = await database.Student.findOne({
        where: { id: Number(id) }
      });

      return aStudent;
    } catch (error) {
      throw error;
    }
  }

  static async deleteStudent(id) {
    try {
      const StudentToDelete = await database.Student.findOne({ where: { id: Number(id) } });

      if (StudentToDelete) {
        const deletedStudent = await database.Student.destroy({
          where: { id: Number(id) }
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
