const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const joi = require('joi');

const baseOptions = {
    discriminatorKey: 'organizationId'
};

let activitySchema = new Schema({
    organizationId: { type: String, required: true },
    licensePlate: { type: String, required: true },
    createdOn: { type: String, required: true },
    lastUpdatedOn: { type: String, required: true },
    inUse: { type: Boolean, required: true },
    state: { type: String, required: true },
    time: { type: String, required: true },
    distance: { type: String, required: true },
    address: { type: String, required: true },
    km: { type: String, required: true },
}, { timestamps: { createdOn: 'created_at', lastUpdatedOn: 'updated_at' } }, baseOptions);

module.exports.Activity = mongoose.model('Activity', activitySchema);
