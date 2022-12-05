/* eslint-disable no-useless-catch */
require("dotenv").config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import database from '../db/models/index.js';
import sendEmail from "./emailServiceMailtrap.js";
import crypto from 'crypto';

const users = database.User;
const tokens = database.Token;
const JWT_SECRET  = process.env.JWT_SECRET;
  class VerifyService {
    static  async sendMail (name, email) {
      try {
        let user = await this.findUser({ email })
        console.log('verify1')
       if (user){
        console.log('verify2')
      let token = await tokens.create({
        userId: user.id,
        token: crypto.randomBytes(32).toString("hex"),
      });
      console.log('verify3')
      const message = `${name} click this link to verify your email ${process.env.BASE_URL}/user/verify/${user.id}/${token.token}`;
      await sendEmail.sendMail(email, "Verify Email", message);
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

// Save the new user to the database and return an authorization token for the user
    static async create ({firstName, lastName, secondName, email, roleId, password }) {

  const newUser = {
    firstName,
    lastName,
    secondName,
    email,
    roleId,
    password: await bcrypt.hash(password, 10)

  };
  // save the new user to our database
  const result = await users.create(newUser);
  // Generate the JWT with jwt.sign. The return value is an
  // authentication token
  const token = jwt.sign({ id: result.id }, JWT_SECRET, {
    expiresIn: 24 * 60 * 60, // Expire tokens after a certain amount of time so users can't stay logged in forever
  });

  return { token };
};


}
export default VerifyService

