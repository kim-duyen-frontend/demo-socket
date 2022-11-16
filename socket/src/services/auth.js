export const register = () => new Promise((resolve, reject) => {
    try {
        resolve("register user");
    } catch (error) {
        reject(error)
    }
})