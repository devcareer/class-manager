export default class Util {
    constructor() {
      this.statusCode = null;
      this.type = null;
      this.data = null;
      this.message = null;
    }
  
    setSuccess(statusCode, message, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = 'success';
    }
  
    setError(statusCode, message) {
      this.statusCode = statusCode;
      this.message = message;
      this.type = 'error';
    }
  
    send(res) {
      const result = {
        status: this.type,
        message: this.message,
        data: this.data,
      };
  
      if (this.type === 'success') {
        return res.status(this.statusCode).json(result);
      }
      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message,
      });
    }

    checkIfValidUUID(str) {
      // Regular expression to check if string is a valid UUID
      const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
      // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    
      return regexExp.test(str);
    }
  }