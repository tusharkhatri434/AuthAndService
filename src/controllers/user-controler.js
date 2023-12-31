const {UserService} = require("../service/index");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
        email:req.body.email,
        password:req.body.password
    });
    return res.status(201).json({
      data: response,
      message: "successfully created",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not craeted",
      success: false,
      err: error,
    });
  }
}

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.email,
      req.body.password
    );
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully signed in",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
}

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      err: {},
      data: response,
      message: "user is authenticated and token is valid",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
}

const isAdmin = async (req,res)=>{
   try {
    const response = await userService.isAdmin(req.body.id);
    return res.status(200).json({
      data:response,
      message:"succesfully get",
      success:true
    })
   } catch (error) {
      return res.status(200).json({
        data:{},
        message:"not get successfully",
        err:error
      })
   }
}

module.exports = {
  create,
  signIn,
  isAuthenticated,
  isAdmin,
};
