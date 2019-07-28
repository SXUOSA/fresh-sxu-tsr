module.exports = {
    webpack: function(config) {
        config.module.rules.push({
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                    indentedSyntax: true
                }
            }]
        });
        return config;
    }
}