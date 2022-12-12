/* eslint-disable no-useless-catch */
require("dotenv").config();
import database from '../db/models/index.js';
// import sendEmail from "./EmailServiceMailtrap.js";
import sendEmail from '../utils/email'
import crypto from 'crypto';
import UserService from "./userService.js";

const users = database.User;
const tokens = database.Token;
const url = process.env.BASE_URL;
  class VerifyService {
    static  async sendMail (name, email) {
      try {
        let user = await this.findUser({ email })
       if (user){
      let token = await tokens.create({
        userId: user.id,
        token: crypto.randomBytes(32).toString("hex"),
      });
      const message = `${name} click this link to verify your email ${url}/user/verify/${user.id}/${token.token}`;
      await sendEmail(email, "Verify Email", message);
       }else{
          return null
       }
  
      } catch (error) {
        throw error;
      }
    };


    static  async findUser ({email}) {
    try {

      if(email !=null){
      const aUser = await users.findOne({
        where: {email: email }
      });
      return aUser;
    }
    } catch (error) {
      throw error;
    }
  };


  static async verify(token, id) {
    try {
      const user = await UserService.findUser({ id });
      if(!user){
        return false
      }
      const userToken = await tokens.findOne({where:{
        userId: user.id,
        token: token,
      }});
      if (!userToken){ 
        return false;
    }else{
      await users.update({ verified: true }, {
        where: {
          id: id
        }
      });;
      await tokens.destroy({
        where: {
          userId: userToken.userId
        }
      });
  
    return true;
    }
    //   res.send("email verified sucessfully");
    
} catch (error) {
    return error;//   res.status(400).send("An error occured");
    }
  };

// Save the new user to the database and return an authorization token for the user


}
export default VerifyService

