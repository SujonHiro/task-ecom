const { DecodeToken } = require("../utility/TokenAdmin");

module.exports = (req, res, next) => {
    // Receive Token
    let token = req.headers['token'];
    if (!token) {
        token = req.cookies['token'];
    }

    // Token Decode
    let decoded = DecodeToken(token);

    // Request Header Email + Admin ID Add
    if (decoded === null) {
        return res.status(401).json({ status: "fail", message: "Unauthorized" });
    } else {
        let email = decoded['email'];
        let admin_id = decoded['admin_id']; // Add this line to extract admin ID
        req.headers.email = email;
        req.headers.admin_id = admin_id; // Set the admin ID in request headers
        next();
    }
};