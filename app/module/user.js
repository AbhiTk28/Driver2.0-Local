const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema(
    {
        license:String,
        date: String,
        activityList: {
            id: String,
            state: String,
            time: String,
            distance: String,
            address: String,
            km: Number
        }
    },
    { timestamps: true },
)

// activitySchema.static.getlast15HrData = async function(){
//
//     return activitySchema
// }

const activityHistory = mongoose.model('activityHistory', activitySchema);
export default activityHistory;
