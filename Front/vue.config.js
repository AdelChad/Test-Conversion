module.exports = {
    chainWebpack: config => {
        config.module
            .rule("pdf")
            .test(/\.pdf$/)
            .use("file-loader")
            .loader("file-loader");
    },

    css: {
        loaderOptions:{
            less: {
                javascriptEnabled: true
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '' :
        '/'

}