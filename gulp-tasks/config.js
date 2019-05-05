module.exports = function() {
    var src = '.';

    var config = {
        paths: {
            dist: {
                root: './dist'
            },
            src: {
                root: src,
                css: src + '/index.css',
                images: src + '/images',
            }
        }
    }

    return config;
}
