import db from "../models";

export const getOne = (userID) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id: userID },
            attributes:{
                exclude: ['password']
            }
        })
        resolve({
            err: response ? 0 : 1,
            message: response ? "Exist user" : "Not found user",
            userData: response
        })
    } catch (error) {
        reject(error);
    }
})