import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        // console.log(response[0].id);
        // console.log(response[0].email);
        // console.log(response[0].roleID);
        //Create token
        const token = response[1] && jwt.sign({ id: response[0].id, email: response[0].email }, process.env.TOKEN_SECRET, { expiresIn: "2d" });
        resolve({
            err: token ? 0 : 1,
            message: token ? "Register successfully" : "Email has already existed",
            token: token || null
        });
    } catch (error) {
        reject(error)
    }
})

export const login = ({ email, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { email },
            raw: true
        });
        const isExist = response && bcrypt.compareSync(password, response.password);
        const token = isExist && jwt.sign({ id: response.id, email: response.email }, process.env.TOKEN_SECRET, { expiresIn: "2d" });

        resolve({
            err: token ? 0 : 1,
            message: token ? "Login Successfully" : response ? "Password is wrong" : "You don't sign up account",
            access_token: token || null
        })
    } catch (error) {
        reject(error);
    }
})