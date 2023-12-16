const {User} = require('../models/index');

class UserRepository{

    async create (userData) {
        try {
            const response  = await User.create(userData);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw{error};
        }
    }
}

module.exports = UserRepository;