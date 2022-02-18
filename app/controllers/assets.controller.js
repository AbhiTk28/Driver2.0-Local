const { Asset } = require('../models/Asset');

exports.getAllVehicles = async (req, res) => {

    const filter = {};

    Asset.find(filter)
        .then(assets => {
            if (assets)
                res.json({assets});
            else
                res.status(404).json({
                    message: "No assets found"
                })
        })
        .catch(error => {
            res.status(500).json({
                message: error
            })
        });
};

exports.hello = async (req, res) => {
    res.status(200).json({
        message: "Hello"
    })
};

exports.getVehicles = async (req, res) => {

    const { organizationId } = req.params;

    Asset.find({ 'organizationId': organizationId } )
        .then(assets => {
            if (assets)
                res.json({assets});
            else
                res.status(404).json({
                    message: "No assets found"
                })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: error
            })
        });
};
