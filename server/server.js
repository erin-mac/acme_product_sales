const app = require('./main')
const PORT = process.env.PORT || 8080
const syncAndSeed = require('./db/syncAndSeed')

syncAndSeed()
    .then(() => {
        app.listen(PORT, () => console.log(`
        Listening on port ${PORT}
        http://localhost:${PORT}/
    `))
    })

module.exports = app