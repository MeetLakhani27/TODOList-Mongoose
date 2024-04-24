var staffmodel = require('../model/staffmodel');
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// INSERT STAFF DATA
exports.insertstaff = async(req,res) => {
    var b_pass = await bcrypt.hash(req.body.password, 10);
    req.body.password = b_pass;


    const data = await staffmodel.create(req.body);
    res.status(200).json ({
        status:200,
        message: "staff registered successfully...",
        data
    });
}

// login-select
exports.login = async (req, res) => {
    var data = await staffmodel.find({ email: req.body.email });
    if (data.length == 1) {
        bcrypt.compare(req.body.password, data[0].password, async(error, result) => {
            if (result == true) {
                var token = jwt.sign({ id: data[0].id }, "tokan_key")
                res.status(200).json ({
                    status: 200,
                    message: "you are login",
                    token
                });
            }
            else {
                res.status(200).json({
                    status: 200,
                    message: "checkdfgrfgd your email and password"
                });
            }
        });
    }
    else {
        res.status(200).json({
            status: 200,
            message: "check your email and password"
        });
    }
}

// ALL STAFF LIST
exports.getstaff = async(req,res) => {
    const data = await staffmodel.find();
    res.status(200).json({
        status: 200,
        massage:"All Staff List",
        data
    });
}


// SINGLE STAFF LIST
exports.getonestaff = async(req,res) => {
    var id = req.params.id;
    const data = await staffmodel.findById(id);
    res.status(200).json({
        status: 200,
        massage:"Single Staff Show",
        data
    });
}

// UPDATE STAFF 
exports.updatestaff = async (req,res) => {
    var id = req.params.id;
    const data = await staffmodel.findByIdAndUpdate(id,req.body);
    res.status(200).json ({
        status: 200,
        message: "Update staff Data",
        data
    });
}

// delete staff data
exports.deletestaff = async (req,res) => {
    var id = req.params.id;
    var data = await staffmodel.findByIdAndDelete(id);
    res.status(200).json ({
        status: 200,
        message: "Delete staff Data",
    });
}