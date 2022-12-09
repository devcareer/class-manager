import ScoreService from '../services/scoreService.js';
import Util from '../utils/Utils.js';

const util = new Util();

class ScoreController {
  static async getAllScores(req, res) {
    try {
      const allScores = await ScoreService.getAllScores();
      if (allScores.length > 0) {
        util.setSuccess(200, 'Scores retrieved', allScores);
      } else {
        util.setSuccess(200, 'No Score found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addScore(req, res) {
    if (!req.body.score || !req.body.assignmentId || !req.body.teacherId || !req.body.studentId) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newScore = req.body;
    try {
      const createdScore = await ScoreService.addScore(newScore);
      util.setSuccess(201, 'Score Added!', createdScore);
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async updatedScore(req, res) {
    const alteredScore = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateScore = await ScoreService.updateScore(id, alteredScore);
      if (!updateScore) {
        util.setError(404, `Cannot find Score with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Score updated', updateScore);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAScore(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theScore = await ScoreService.getASore(id);

      if (!theScore) {
        util.setError(404, `Cannot find Score with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Score', theScore);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteScore(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const ScoreToDelete = await ScoreService.deleteScore(id);

      if (ScoreToDelete) {
        util.setSuccess(200, 'Score deleted');
      } else {
        util.setError(404, `Score with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ScoreController;