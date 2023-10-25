const films = require("./characters.json")

module.exports = {
    list: async () => {
        return films
    },
}