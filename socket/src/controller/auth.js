import * as services from "../services";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // console.log("check receive data: ", { email, password });
        if (!username || !email || !password) {
            return res.status(400).json({
                err: 1,
                message: "Field username or field email or field password is empty"
            })
        }
        const response = await services.register(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            message: "Đăng ký thất bại"
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                err: 1,
                message: "Field email or field password is empty"
            })
        }
        const response = await services.login(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            message: "Đăng nhập thất bại"
        })
    }
}