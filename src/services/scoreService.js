import database from '../db/models/index.js';

class ScoreService {
  static async getAllScores() {
    try {
      const result = await database.AssignmentScore.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addScore(newScore) {
    try {
      const result = await database.AssignmentScore.create(newScore);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateScore(id, updateScore) {
    try {
      const scoreToUpdate = await database.AssignmentScore.findOne({
        where: { id: Number(id) }
      });

      if (scoreToUpdate) {
        await database.AssignmentScore.update(updateScore, { where: { id: Number(id) } });

        return updateScore;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAScore(id) {
    try {
      const aScore = await database.AssignmentScore.findOne({
        where: { id: Number(id) }
      });

      return aScore;
    } catch (error) {
      throw error;
    }
  }

  static async deleteScore(id) {
    try {
      const scoreToDelete = await database.AssignmentScore.findOne({ where: { id: Number(id) } });

      if (scoreToDelete) {
        const deletedScore = await database.AssignmentScore.destroy({
          where: { id: Number(id) }
        });
        return deletedScore;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ScoreService;
