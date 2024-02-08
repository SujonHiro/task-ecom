const CustomerModel = require("../model/CustomerModel");

exports.customerCreate = async (req, res) => {
    try {
        const admin_id = req.headers.admin_id;
        const customerData = req.body;

        if (!admin_id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Assign admin_id to customer data
        customerData.admin_id = admin_id;

        // Create the customer object
        const result = await CustomerModel.create(customerData);

        res.status(200).json({
            message: "Success",
            data: result // Return the created customer object
        });
    } catch (error) {
        res.status(400).json({
            message: "Fail",
            data: error
        });
    }
};

exports.customerGet=async(req,res)=>{
    try{
        const customer=await CustomerModel.find()
        res.status(200).json({
            message: "Success",
            data: customer
        });
    }catch (error) {
        res.status(400).json({
            message: "Fail",
            data: error
        });
    }
}
