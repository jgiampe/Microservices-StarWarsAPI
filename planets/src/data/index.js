const planets = require("./characters.json")

module.exports = {
    list: async () => {
        return planets
    },
}