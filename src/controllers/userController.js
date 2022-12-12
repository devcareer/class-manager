import userService  from "../services/userService";
import Util from '../utils/Utils';
import Verify from "../services/VerifyService";
import RoleService from "../services/RoleService";

const util = new Util();
class UserController{
    static async addStudent(req, res) {
    try {
        const userRole = await RoleService.getRole(req.user.roleId);
        if(userRole.slug === 'sl_teacher'|| userRole.slug ==='sl_admin'){
      const { firstName, lastName, secondName, email, password } = req.body;
      const user = await userService.findUser({email});
      const role = await RoleService.getRoleBySlug('sl_student');
      const roleId = role.id;
   
      if (user) {
       util.setError(400, 'Student already exists!');
        //throw new Error("Email already exists!");
      }else{
      // Create a token for the user
      const { token } = await userService.create({ firstName, lastName, secondName, email, roleId:roleId, password });
      
      const result = {token: token}
      const name = firstName+' '+lastName+' '+secondName;
      //send email verification link to the new student
      await Verify.sendMail(name, email)
      util.setSuccess(200, 'Registration Successful', result);
      }
    }else{
        util.setError(404, 'Only a Teacher can register a student');
    }
      // Send a token to the client when a user signs up
      return util.send(res);
    } catch (error) {
       util.setError(400, error.message);
       return util.send(res);
      //next(error);
    }
   };

   static async handleSignup(req, res, next)  {
 try {
   const { firstName, lastName, secondName, email, password } = req.body;
   const user = await userService.findUser({email});
   const role = await RoleService.getRoleBySlug('sl_teacher');
   const roleId = role.id;


   if (user) {
    const name = firstName+' '+lastName+' '+secondName;
    await Verify.sendMail(name, email)
    util.setSuccess(200, 'Email already exists!');
     //throw new Error("Email already exists!");
   }else{
   // Create a token for the user
   const { token } = await userService.create({ firstName, lastName, secondName, email, roleId, password });
   const result = {token: token}
   const name = firstName+' '+lastName+' '+secondName;
   await Verify.sendMail(name, email)
   util.setSuccess(200, 'Registration Successful', result);
   }
   // Send a token to the client when a user signs up
   return util.send(res);
 } catch (error) {
    util.setError(400, error.message);
    return util.send(res);
   //next(error);
 }
};

static async handleLogin (req, res, next) {
   try {
     const { email, password } = req.body;
     const user = await userService.findUser({ email });

     if (!user) {
        util.setSuccess(200, 'Unable to login!');
       //throw new Error("Unable to login");
     }else{

     // Create a token for the user, if successfully authenticated
     const { token } = await userService.authenticate({ email, password });
     const result = {token: token, user}
   util.setSuccess(200, 'Login Successful', result);
   }
   return util.send(res);
   } catch (error) {
    util.setError(400, error.message);
    return util.send(res);
   }
};

static async verify (req, res) {
    try {
        console.log('v1')
        //const {token, id} = req.params
      const verify = await Verify.verify(req.params.token, req.params.id)
      console.log('v2')
      if (!verify) {
        return util.setSuccess(400, "Invalid link");
    }else{
        util.setSuccess(200, "email verified sucessfully");
    }
    return util.send(res);
    } catch (error) {
        util.setError(400, error.message);
        return util.send(res);
    }
  };
  
  }


export default UserController //{
//   handleSignup,
//   handleLogin,
//   addStudent
// };