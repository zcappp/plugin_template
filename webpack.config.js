const path = require("path")

module.exports = {
    mode: process.env.mode || "development",
    entry: {
        "zp999": "./plugins/zp999.js",
    },
    output: {
        path: path.join(__dirname, "build/"),
        publicPath: "/build/js/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: "babel-loader",
            exclude: /node_modules/
        }]
    }
}