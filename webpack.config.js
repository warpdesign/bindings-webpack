const path = require('path');

module.exports = {
    target: 'electron-main',
    entry: { main: './index.js' },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    node: {
        __dirname: false
    },
    mode: "production",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["js"]
    }
};