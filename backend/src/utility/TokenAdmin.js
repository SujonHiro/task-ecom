const jwt = require('jsonwebtoken');

exports.EncodeToken = (email, admin_id) => {
    let KEY = process.env.SECRET_KEY_ADMIN;
    let EXPIRE = { expiresIn: '24h' };
    let PAYLOAD = { email: email, admin_id: admin_id }; // Change user_id to admin_id
    return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

exports.DecodeToken = (token) => {
    try {
        let KEY = process.env.SECRET_KEY_ADMIN;
        return jwt.verify(token, KEY);
    } catch (e) {
        return null;
    }
};
