let Authentication = require('../Model/Authentication')
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


exports.signup = async (req, res, next) => {
    try {
      const { name, contact, email, password } = req.body;
  
      req.body.password = await bcrypt.hash(req.body.password, 10);

      let data = await Authentication.create({
        name,
        contact,
        email,
        password
      });

      res.status(201).json({
        status: "success",
        message: "SignUp successfully",
        data
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: "An error occurred during SignUp",
        error: error.message,
      });
    }
  };

  exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      let data = await Authentication.findOne({ email, password });

      // let verifyPassword = await bcrypt.compare(req.body.password, data.password);
  
      if (!data) {
        throw new Error("User not found");
      }
      // if (!verifyPassword) {
      //   throw new Error("Incorrect password");
      // }

      var token = jwt.sign({ email:data.email }, 'demo');


      res.status(200).json({
        status: "success",
        message: "Login successfully",
        data: data,
        token
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: "An error occurred during Login",
        error: error.message,
      });
    }
  };