const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');

const baseOptions = {
    discriminatorKey: 'assetId'
};

let assetSchema = new Schema({
    organizationId: { type: String, required: true },
    assetId: { type: String, required: true },
    parentAssetId: { type: String, required: true },
    assetType: { type: String, required: true },
    licensePlate: { type: String, required: true },
    vinNumber: { type: String, required: true },
    createdOn: { type: String, required: true },
    lastUpdatedOn: { type: String, required: true },
    assetStatus: { type: String, required: true },
    inUse: { type: Boolean, required: true }
}, { timestamps: { createdOn: 'created_at', lastUpdatedOn: 'updated_at' } }, baseOptions);

module.exports.Asset = mongoose.model('Asset', assetSchema);
