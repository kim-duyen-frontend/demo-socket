import db from "../models";
import bcrypt from "bcryptjs";

const hashPassword = (password) => {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}
export const register = ({ username, email, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: {
                email
            },
            defaults: {
                username,
                email,
                password: hashPassword(password)
            }
        })
        console.log(response);
        resolve({
            err: response[1] ? 0 : 1,
            message: response[1] ? "Register successfully" : "Email has already existed"
        });
    } catch (error) {
        reject(error)
    }
})