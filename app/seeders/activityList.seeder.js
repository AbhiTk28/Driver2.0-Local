const { ActivityList } = require("../module/activityList");
const mongoose = require('mongoose')

const {v4 : uuidv4} = require('uuid')

// Create array of ActivityList
const activitiesList = [
    new ActivityList({
        organizationId: uuidv4(),
        activityName: 'Connect Trailer',
    }),new ActivityList({
        organizationId: uuidv4(),
        activityName:    'Customs',
    }),new ActivityList({
        organizationId: uuidv4(),
        activityName: 'Disconnect Trailer',
    }),new ActivityList({
        organizationId: uuidv4(),
        activityName: 'Ferry',
    }),new ActivityList({
        organizationId: uuidv4(),
        activityName: 'Loading',
    }),new ActivityList({
        organizationId: uuidv4(),
        activityName: 'Maintenance',
    }),new ActivityList({
        organizationId: uuidv4(),
        activityName:   'Other',
    }),new ActivityList({
        organizationId: uuidv4(),
        activityName:   'Refueling',
    })]

//connect mongoose
mongoose
    .connect("mongodb://localhost:27017/driver-db", { useNewUrlParser: true })
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(() => {
        console.log("connected to db in development environment");
    });

//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
const seedDB = async () => {
    await ActivityList.deleteMany({});
    await ActivityList.insertMany(activitiesList);

};

seedDB().then(() => {
    mongoose.connection.close();
});
