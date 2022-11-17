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
        const token = response[1] ? jwt.sign({ id: response[0].id, email: response[0].email, roleID: response[0].roleID }, process.env.TOKEN_SECRET, { expiresIn: "5d" }) : null;
        resolve({
            err: response[1] ? 0 : 1,
            message: response[1] ? "Register successfully" : "Email has already existed",
            access_token: `Bearer ${token}`
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
        const token = isExist ? jwt.sign({ id: response.id, email: response.email, roleID: response.roleID }, process.env.TOKEN_SECRET, { expiresIn: "5d" }) : null;

        resolve({
            err: response ? 0 : 1,
            message: token ? "Login Successfully" : response ? "Password is wrong" : "You don't sign up account",
            access_token: token ? `Bearer ${token}` : null
        })
    } catch (error) {
        reject(error);
    }
})