import database from '../db/models/index.js';

class TeacherService {
  static async getAllTeachers() {
    try {
      const result = await database.ClassTeacher.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addTeacher(newTeacher) {
    try {
      const result = await database.ClassTeacher.create(newTeacher);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateTeacher(id, updateTeacher) {
    try {
      const teacherToUpdate = await database.ClassTeacher.findOne({
        where: { id: id }
      });

      if (teacherToUpdate) {
        await database.ClassTeacher.update(updateTeacher, { where: { id: id } });

        return updateTeacher;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getATeacher(id) {
    try {
      const allTeacher = await database.ClassTeacher.findOne({
        where: { id: id }
      });

      return allTeacher;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTeacher(id) {
    try {
      const TeacherToDelete = await database.ClassTeacher.findOne({ where: { id: id } });

      if (TeacherToDelete) {
        const deletedTeacher = await database.ClassTeacher.destroy({
          where: { id: id }
        });
        return deletedTeacher;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default TeacherService;