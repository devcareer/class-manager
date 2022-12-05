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
      const ScoreToUpdate = await database.AssignmentScore.findOne({
        where: { id: Number(id) }
      });

      if (ScoreToUpdate) {
        await database.AssignmentScore.update(updateScore, { where: { id: Number(id) } });

        return updateScore;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getScore(id) {
    try {
      const Score = await database.AssignmentScore.findOne({
        where: { id: Number(id) }
      });

      return Score;
    } catch (error) {
      throw error;
    }
  }

  static async deleteScore(id) {
    try {
      const ScoreToDelete = await database.AssignmentScore.findOne({ where: { id: Number(id) } });

      if (ScoreToDelete) {
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
