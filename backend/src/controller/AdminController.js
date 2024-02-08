const AdminModel = require("../model/AdminModel");
const { EncodeToken } = require("../utility/TokenAdmin");

exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await AdminModel.findOne({ email: email, password: password });
        if (!admin) {
            return res.status(401).json({ message: 'Admin Not Found' });
        }

        // Extract email and admin_id correctly
        const { email: adminEmail, _id: adminId } = admin;

        // Generate token
        let token = EncodeToken(adminEmail, adminId.toString());

        // Set cookie
        let cookieOption = { expires: new Date(Date.now() + 24 * 6060 * 1000), httpOnly: false };
        res.cookie('token', token, cookieOption);

        // Respond with token or success message
        res.status(200).json({
            message: "Success",
            token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};