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

    async signIn(email,plainPassword){
            try {
                // fetch the user by email id --
                const user = await this.userRepository.getByEmail(email);
                // check password validation--
                const response = this.checkPassword(plainPassword,user.password);

                if(!response){
                    console.log("Password does not match");
                    throw {error:'Incorrect password'}
                }

                // creating jwt token if password correct -- 

                const newJwt = this.createToken({email:user.email , id:user.id});
                return newJwt;
            } catch (error) {
                console.log("Something went wrong in sign in proccess");
                throw error;
            }
    }

    createToken(user){
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