import userService  from "../services/userService";
import Util from '../utils/Utils';

const util = new Util();
const handleSignup = async (req, res, next) => {
 try {
   const { firstName, lastName, secondName, email, roleId, password } = req.body;
   const user = await userService.findUser({email});

   if (user) {
    util.setSuccess(200, 'Email already exists!');
     //throw new Error("Email already exists!");
   }else{
   // Create a token for the user
   const { token } = await userService.create({ firstName, lastName, secondName, email, roleId, password });
   const result = {token: token, user}
   util.setSuccess(200, 'Registration Successful', result);
   }
   // Send a token to the client when a user signs up
   return util.send(res);
 } catch (error) {
    util.setError(400, error);
    return util.send(res);
   //next(error);
 }
};

const handleLogin = async (req, res, next) => {
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
    util.setError(400, error);
    return util.send(res);
   }
};

export {
  handleSignup,
  handleLogin,
};