import TeacherService from '../services/TeacherServices.js'
import Util from '../utils/Utils.js';

const util = new Util();

class teacherController {
  static async home(req, res) {
    res.send(`<h1>Welcome to the teacher's Route</h1>`)
  }

  static async getAllTeachers(req, res) {
    try {
      const allTeacher = await TeacherService.getAllTeachers();
      if (allTeacher.length > 0) {
        util.setSuccess(200, 'teachers retrieved', allTeacher);
      } else {
        util.setFound(400, 'No teahcer found in the database');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async addTeacher(req, res) {
    if (!req.body.teacherId || !req.body.classId ) {
      util.setError(400, 'Please provide complete details of the teacher');
      return util.send(res);
    }
    const newTeacher = req.body;
    try {
      const createdTeacher = await TeacherService.addTeacher(newTeacher);
      util.setSuccess(201, 'Teacher Added Successfully!', createdTeacher);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedTeacher(req, res) {
    const alteredTeacher = req.body;
    const { id } = req.params;
    if (!util.checkIfValidUUID(id)) {
      util.setError(400, 'Please input a valid Id');
      return util.send(res);
    }
    try {
      const updateTeacher = await TeacherService.updateTeacher(id, alteredTeacher);
      if (!updateTeacher) {
        util.setError(404, `Cannot find a teacher with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Teacher updated', updateTeacher);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  static async getATeacher(req, res) {
    const { id } = req.params;

    if (!util.checkIfValidUUID(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theTeacher = await TeacherService.getATeacher(id);

      if (!theTeacher) {
        util.setError(404, `Cannot find a teacher with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Teacher', theTeacher);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }




  // static  getATeacher = async(req, res)=> {
  //   try{
  //     const teacherById = await TeacherService.findById(req.params.id)
  //     res.json(teacherById)
  //   }catch(err){
  //     res.send('Error' + err)
  //   }
    
  // }

  static async deleteTeacher(req, res) {
    const { id } = req.params;

    if (!util.checkIfValidUUID(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const teacherToDelete = await TeacherService.deleteTeacher(id);

      if (teacherToDelete) {
        util.setSuccess(200, `Teacher with ${id} deleted`);
      } else {
        util.setError(404, `Teacher with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default teacherController;