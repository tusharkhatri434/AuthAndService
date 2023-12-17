const {UserRepository} = require('../repository/index');

const { JWT_KEY } = require('../config/serverConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const response = await this.userRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{error};
        }
    }

    createTokent(user){
        try {
            const token = jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
            return token;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyTokent(token){
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation",error);
            throw error;
        }
    }

   checkPassword(userInputPlainPassword,encryptedPassword){
    try {
        return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
    } catch (error) {
        console.log("something went wrong in password verification");
        throw error;
    }
   }
}

module.exports = UserService;