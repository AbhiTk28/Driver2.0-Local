const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');

const baseOptions = {
    discriminatorKey: 'organizationId'
};

let companySchema = new Schema({
    organizationId: { type: String, required: true },
    name: { type: String, required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }, baseOptions);

module.exports.Company = mongoose.model('Company', companySchema);
