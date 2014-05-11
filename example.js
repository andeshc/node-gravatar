/**
 * Created by Andesh on 5/11/2014.
 */

var gravatar = require('./gravatar.js');

var email = 'someone@example.com';

(function () {
    var gravatarInfo = gravatar().get(email, {size: 200});
    console.log(gravatarInfo);
})();
