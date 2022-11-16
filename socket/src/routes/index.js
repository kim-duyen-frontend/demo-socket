import auth from "./auth";

const initRoutes = (app) => {
    app.use("/api/auth", auth);
    return app.use("/", (req, res) => {
        return res.send("Turn on server")
    })
}
module.exports = initRoutes;