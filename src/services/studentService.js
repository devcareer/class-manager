/* eslint-disable no-useless-catch */
import database from '../db/models/index.js';

const role = database.Role.findOne({where:{slug:  'sl_student'}})
console.log(role.slug)
class StudentService {
  constructor() {
  }
  static async getAllStudents() {
    try {
      const result = await database.User.findAll({where:{roleId: role.id}});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateStudent(id, updateStudent) {
    try {
      const studentToUpdate = await database.User.findOne({
        where: { id: id,  roleId: role.id}
      });

      if (studentToUpdate) {
        await database.User.update(updateStudent, { where: { id: id, roleId: role.id } });

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
        where: { id: id, roleId: role.id}
      });

      return aStudent;
    } catch (error) {
      throw error;
    }
  }

  static async deleteStudent(id) {
    try {
      const StudentToDelete = await database.User.findOne({ where: { id: id, roleId: role.id} });

      if (StudentToDelete) {
        const deletedStudent = await database.User.destroy({
          where: { id: id, roleId: role.id}
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
