import StudentService from '../services/StudentService.js';
import Util from '../utils/Utils.js';

const util = new Util();

class StudentController {
  static async home(req, res) {
    res.send(`<h1>Welcome to the students Route</h1>`)
  }

  static async getAllStudents(req, res) {
    try {
      const allStudents = await StudentService.getAllStudents();
      if (allStudents.length > 0) {
        util.setSuccess(200, 'Students retrieved', allStudents);
      } else {
        util.setSuccess(200, 'No Student found in the database');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addStudent(req, res) {
    if (!req.body.first_name) {
      util.setError(400, 'Please provide complete details of the student');
      return util.send(res);
    }
    const newStudent = req.body;
    try {
      const createdStudent = await StudentService.addStudent(newStudent);
      util.setSuccess(201, 'Student Added Successfully!', createdStudent);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedStudent(req, res) {
    const alteredStudent = req.body;
    const { id } = req.params;
    if (!id) {
      util.setError(400, 'Please input a valid UUID');
      return util.send(res);
    }
    try {
      const updateStudent = await StudentService.updateStudent(id, alteredStudent);
      if (!updateStudent) {
        util.setError(404, `Cannot find a Student with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Student updated with the following details', updateStudent);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAStudent(req, res) {
    const { id } = req.params;

    if (!id) {
      util.setError(400, 'Please input a valid UUID');
      return util.send(res);
    }

    try {
      const theStudent = await StudentService.getAStudent(id);

      if (!theStudent) {
        util.setError(404, `Cannot find a Student with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Student', theStudent);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteStudent(req, res) {
    const { id } = req.params;

    if (!id) {
      util.setError(400, 'Please provide a valid UUID');
      return util.send(res);
    }

    try {
      const StudentToDelete = await StudentService.deleteStudent(id);

      if (StudentToDelete) {
        util.setSuccess(200, `Student with the id: ${id} successfully deleted!`);
      } else {
        util.setError(404, `Student with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default StudentController;