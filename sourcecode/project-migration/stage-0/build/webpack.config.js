const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.prod.config');
const baseConfig = require('./webpack.base.config');

module.exports = (evn, argv) =>{
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);

}