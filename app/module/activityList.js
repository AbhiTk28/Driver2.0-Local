const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const joi = require('joi');

const baseOptions = {
    discriminatorKey: 'organizationId'
};

let activityListSchema = new Schema({
    organizationId: { type: String, required: true },
    activityName:{ type: String, required: true },
}, { timestamps: { createdOn: 'created_at', lastUpdatedOn: 'updated_at' } }, baseOptions);

module.exports.ActivityList = mongoose.model('ActivityList', activityListSchema);
