import sendEmail  from "../utils/email";
import db from "../db/models/index";
import { User, validate } from "../db/models/user";
import crypto from 'crypto';
import express  from "express";


const router = express.Router();
class verifyController {



//   static async sendVerify(req, res) {
//     try {
        
//       if (error) return res.status(400).send(error.details[0].message);
  
//       let user = await db.User.findOne({ email: req.body.email });
//       if (user)
//         return res.status(400).send("User with given email already exist!");
  
//       user = await new db.User({
//         name: req.body.name,
//         email: req.body.email,
//       }).save();
  
//       let token = await new Token({
//         userId: user._id,
//         token: crypto.randomBytes(32).toString("hex"),
//       }).save();
  
//       const message = `${process.env.BASE_URL}/user/verify/${user.id}/${token.token}`;
//       await sendEmail(user.email, "Verify Email", message);
  
//       res.send("An Email sent to your account please verify");
//     } catch (error) {
//       res.status(400).send("An error occured");
//     }
//   };

//   static async getAllMessages(req, res) {
//     try {
//       const allMessages = await MessageService.getAllMessages();
//       if (allMessages.length > 0) {
//         util.setSuccess(200, 'Messages retrieved', allMessages);
//       } else {
//         util.setSuccess(200, 'No Message found');
//       }
//       return util.send(res);
//     } catch (error) {
//       util.setError(400, error);
//       return util.send(res);
//     }
//   };
  
  async verify(req, res) {
    try {
      const user = await db.User.findOne({ _id: req.params.id });
      const verify =verify(token, id)
      if (!user) return res.status(400).send("Invalid link");
  
      const token = await db.Token.findOne({
        userId: user._id,
        token: req.params.token,
      });
      if (!token) return res.status(400).send("Invalid link");
  
      await db.User.updateOne({ id: user._id, verified: true });
      //await Token.findByIdAndRemove(token._id);
  
      res.send("email verified sucessfully");
    } catch (error) {
      res.status(400).send("An error occured");
    }
  };
  
  }
//}
  export default verifyController;