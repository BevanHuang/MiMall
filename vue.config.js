module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                // target: 'https://mall-pre.springboot.cn',
                target: 'https://www.studyinghome.com/mock/5e5c88ee83482d5224c00355/mimall',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}