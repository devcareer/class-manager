/* eslint-disable no-useless-catch */
import database from '../db/models/index.js';

class RoleService {
  static async getAllRoles() {
    try {
      const result = await database.Role.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getRoleBySlug(slug) {
    try {
      const role = await database.Role.findOne({
        where: { slug: slug }
      });

      return role;
    } catch (error) {
      throw error;
    }
  }

  static async getRole(id){
    try {
      const role = await database.Role.findOne({
        where: { id: id }
      });

      return role;
    } catch (error) {
      throw error;
    }
  }

}

export default RoleService;
