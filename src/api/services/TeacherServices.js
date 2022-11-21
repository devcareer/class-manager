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
        where: { id: Number(id) }
      });

      if (teacherToUpdate) {
        await database.ClassTeacher.update(updateTeacher, { where: { id: Number(id) } });

        return updateTeacher;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAllTeachers(id) {
    try {
      const allTeacher = await database.ClassTeacher.findOne({
        where: { id: Number(id) }
      });

      return allTeacher;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTeacher(id) {
    try {
      const TeacherToDelete = await database.ClassTeacher.findOne({ where: { id: Number(id) } });

      if (TeacherToDelete) {
        const deletedTeacher = await database.ClassTeacher.destroy({
          where: { id: Number(id) }
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