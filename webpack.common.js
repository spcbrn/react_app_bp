const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)g/,
                include: /src/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-react', '@babel/preset-env' ]
                    }
                }
            }
        ]
    }
}