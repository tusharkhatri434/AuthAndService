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
};

module.exports = {
  create,
};
