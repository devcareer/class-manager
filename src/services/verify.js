/* eslint-disable no-useless-catch */
//import sendEmail  from "../utils/email";
const sendEmail = require( "./emailServiceMailtrap.js");
const db = require( "../db/models/index.js");
const crypto = require('crypto');


// const router = express.Router();
//class Verify {

const sendVerify = async (name, email)=>{
    console.log(name);
try {
    //const { error } = validate(err);
    // if (error) return res.status(400).send(error.details[0].message);
    console.log(name);
    let user = await db.User.findOne({
        where: { email: email }
      });
    console.log(name);
     if (user){
    //   return res.status(400).send("User with given email already exist!");

    let token = await db.Token.create({
      userId: user.id,
      token: crypto.randomBytes(32).toString("hex"),
    });
    console.log(token);
    const message = `${name} click this link to verify your email ${process.env.BASE_URL}/user/verify/${user.id}/${token.token}`;
    console.log(token);
    await sendEmail.sendMail(email, "Verify Email", message);
     }else{
        console.log(token);
        return null
     }
    //res.send("An Email sent to your account please verify");
  } catch (error) {
    console.log(error);
    //console.log("An error occured"); //res.status(400).send("An error occured");
  }
}

// async verify(token, id) {
//     try {
//       const user = await db.User.findOne({where:{ id: id }});
//       //if (!user) return res.status(400).send("Invalid link");
  
//       const token = await db.Token.findOne({where:{
//         userId: user.id,
//         token: token,
//       }});
//       if (!token){ 
//         return false;
//     }else{
//       await db.User.updateOne({where:{ id: id, verified: true }});
//       await db.Token.destroy({
//         where: {
//           id: token.id
//         }
//       });
  
//     return true;
//     }
//     //   res.send("email verified sucessfully");
    
// } catch (error) {
//     return error;//   res.status(400).send("An error occured");
//     }
//   };
  
  
//   }
  sendVerify('name', 'princemi007@gmail.com')
 // export default Verify
