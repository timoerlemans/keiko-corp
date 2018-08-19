module.exports = {
    bundle: {
        main: {
            scripts: [
                './js/main.js'
            ]
        },
        vendor: {
            scripts: [
                './js/jquery.js',
                './js/ajaxchimp.js',
                './js/owl.carousel.min.js',
                './js/wow.js',
                './js/parallax.js',
                './js/nicescroll.js',
                './js/scrollTo.js',
            ]
        }
    },
    copy: './img/*.{png,jpg}'
};