import AssignmentService from '../services/AssignmentService.js';
import Util from '../utils/Utils.js';

const util = new Util();

class AssignmentController {
  static async home(req, res) {
    res.send(`<h1>Welcome to the assignment Route</h1>`)
  }

  static async getAllAssignments(req, res) {
    try {
      const allAssignments = await AssignmentService.getAllAssignments();
      if (allAssignments.length > 0) {
        util.setSuccess(200, 'Assignments retrieved', allAssignments);
      } else {
        util.setSuccess(200, 'No Assignment found in the database');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addAssignment(req, res) {
    if (!req.body.Assignment || !req.body.senderId || !req.body.receiverId) {
      util.setError(400, 'Please provide complete details of the Assignment');
      return util.send(res);
    }
    const newAssignment = req.body;
    try {
      const createdAssignment = await AssignmentService.addAssignment(newAssignment);
      util.setSuccess(201, 'Assignment Added Successfully!', createdAssignment);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.Assignment);
      return util.send(res);
    }
  }

  static async updatedAssignment(req, res) {
    const alteredAssignment = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateAssignment = await AssignmentService.updateAssignment(id, alteredAssignment);
      if (!updateAssignment) {
        util.setError(404, `Cannot find a Assignment with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Assignment updated', updateAssignment);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAAssignment(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theAssignment = await AssignmentService.getAAssignment(id);

      if (!theAssignment) {
        util.setError(404, `Cannot find a Assignment with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Assignment', theAssignment);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteAssignment(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const AssignmentToDelete = await AssignmentService.deleteAssignment(id);

      if (AssignmentToDelete) {
        util.setSuccess(200, `Assignment with ${id} deleted`);
      } else {
        util.setError(404, `Assignment with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async uploadAssignment(req, res) {
    const { id } = req.params;
    if (!req.files) {
      util.setError(400, 'Please select a file for upload');
      return util.send(res);
    }
    const newUpload = req.files;
    try {
      await AssignmentService.uploadAssignment(newUpload, id);
      util.setSuccess(201, 'Assignment Uploaded Successfully!');
      return util.send(res);
    } catch (error) {
      util.setError(400, error.Assignment);
      return util.send(res);
    }
  }

}

export default AssignmentController;