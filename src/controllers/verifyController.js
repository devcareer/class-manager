import sendEmail  from "../utils/email";
import VerifyService from "../services/VerifyService";
import Util from "../utils/Utils";

const util = new Util();
class verifyController {
  
  async verify(req, res) {
    try {
        const {token, id} = req.params
      const verify = VerifyService.verify(token, id)
      if (!verify) {
        return util.setSuccess(200, "Invalid link");
    }else{
        util.setSuccess(200, "email verified sucessfully");
    }
    return util.send(res);
    } catch (error) {
        util.setError(400, error);
        return util.send(res);
    }
  };
  
  }
//}
  export default verifyController;