module.exports = {
    handle: function (handledObj, callback) {
        var sbcookie;

        if (
            'GET' == handledObj.getMethod() &&
            handledObj.getUrl().indexOf('/shopback/me') > -1
        ) {
            try {
                sbcookie = handledObj.getHeader('Cookie');
            } catch (err) {
                return callback(new Error('Oh, no cookie exists.'));
            }

            this.parseCookies(sbcookie, function (err) {
                return callback(err);
            });
        }

        callback(null, handledObj);
    },

    parseCookies: function (cookieObj, callback) {
        var cookies = {};

        cookieObj.split(',').forEach(function (cookiePair) {
            if (2 != cookiePair.split('=').length) {
                return callback(new Error('Oh, there are problems in cookie.'));
            }
        });
    }
};
