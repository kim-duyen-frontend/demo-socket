const initRoutes = (app) => {
    return app.use("/", (req, res) => {
        return res.send("Turn on server")
    })
}
module.exports = initRoutes;