const { cathedAsync } = require("../utils");

module.exports = {
    getPlanets: cathedAsync(require("./getPlanets")),
}