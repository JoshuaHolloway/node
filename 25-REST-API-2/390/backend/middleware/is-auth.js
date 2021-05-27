const jwt = require('jsonwebtoken');

// extract token from incoming request

// -Token should be attached in Feed.js in Fronted React App.

module.exports = (req, res, next) => {

    // [390]
    const authHeader = req.get('Authorization');
    if(!authHeader) {
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }

    console.log(authHeader);

    const $_token_$ = authHeader.split(' ');
    console.log($_token_$)

    const token = $_token_$[1];
    console.log(token);

    let decodedToken;
    try {

        // decode and verify token
        decodedToken = jwn.verify(token, 'somesupersecretsecret');
    } catch(err) {
        err.statusCode = 500; // 500 == Internal Server Error
        throw err;
    }
    if(!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401; // 401 == Unauthorized
        throw error;
    }

    // -We store the user-ID in the request so that we can use it 
    //  in other places where this request will go (e.g. routes)

    // -The decoded token has the Header and Paylod (jwt website)
    req.userId = decodedToken.userId;

    // forward the request
    next();

    // We next add the midle-ware to the get-posts route in routes/feed.js
};