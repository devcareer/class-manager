/* eslint-disable no-useless-catch */
require("dotenv").config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import database from '../db/models/index.js';

const users = database.User;
const JWT_SECRET  = process.env.JWT_SECRET;
  class UserService {

    static  async findUser ({id, email}) {
    try {
        if(id!= null){
        const aUser = await users.findOne({
                where: {id: email }
              });
              return aUser
        }else if(email !=null){
      const aUser = await users.findOne({
        where: {email: email }
      });
      return aUser;
    }
    } catch (error) {
      throw error;
    }
  };
    static async authenticate ({ id, email, password })  {
  const user = await this.findUser({id, email });
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if(isPasswordValid){
  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: 24 * 60 * 60, // Expire tokens after a certain amount of time so users can't stay logged in forever
  });

  return { token };
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
export default UserService

