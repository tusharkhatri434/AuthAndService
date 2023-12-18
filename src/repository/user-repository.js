const {User,Role} = require('../models/index');

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

    async getUser(userId) {
        try {
            const user = await User.findByPk(userId,{
                attributes:['email','id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw{error};
        }
    }

    async getByEmail(userEmail){
        try {
            const user = await User.findOne({where:{
                email:userEmail
            }});
            return user;  
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: 'admin'
                }
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    
}

module.exports = UserRepository;