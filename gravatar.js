/**
 * Created by Andesh on 5/11/2014.
 */

function gravatar(){

    var md5 = require('MD5');
    var gravatarBaseUrl = 'http://www.gravatar.com/avatar/';
    var defaultSize = 48;

    function getGravatarUrl(emailHash, options){
        var size = 'size' in options ? options.size : defaultSize;

        return gravatarBaseUrl + emailHash + '?s=' + size;
    }

    return {
        get: function (email, options) {
            options = options || {};

            var emailHash = md5(email);

            return {
                email: email,
                emailHash: emailHash,
                gravatarUrl: getGravatarUrl(emailHash, options)
            };
        }
    };
}

module.exports = gravatar;