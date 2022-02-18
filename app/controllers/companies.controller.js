const { Company } = require('../models/Company');

exports.companies = async (req, res) => {

    const filter = {};

    Company.find(filter)
        .then(companies => {
            if (companies)
                res.json({companies});
            else
                res.status(404).json({
                    message: "No companies found"
                })
        })
        .catch(error => {
            res.status(500).json({
                message: error
            })
        });
};
