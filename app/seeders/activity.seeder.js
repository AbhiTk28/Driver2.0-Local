const { Activity } = require("../module/activity");
const mongoose = require('mongoose')

const {v4 : uuidv4} = require('uuid')

 const STANDSTILL = 'Standstill';
 const DRIVING = 'Driving';
 const TRAFFIC ='Traffic'

// Create array of Activity
const activities = [
    new Activity({
        organizationId: uuidv4(),
        licensePlate: "KA 51MB 5890",
        createdOn: "2022-02-14 13:50:26",
        lastUpdatedOn: "2022-02-14 17:58:26",
        inUse: true,
        state: TRAFFIC,
        time: '10:00 - 10:30',
        distance: '10m',
        address: 'Salarpuria citadel, Adugodi, Bengaluru, Karnataka 560030',
        km: '10 Km',
        comments:'',
    }),new Activity({
        organizationId: uuidv4(),
        licensePlate: "KA 51MB 5890",
        createdOn: "2022-02-14 12:58:26",
        lastUpdatedOn: "2022-02-14 15:58:26",
        inUse: false,
        state: DRIVING,
        time: '08:15 - 10:00',
        distance: '10m',
        address: 'Salarpuria citadel, Adugodi, Bengaluru, Karnataka 560030',
        km: '50 Km',
        comments:'',
    }),new Activity({
        organizationId: uuidv4(),
        licensePlate: "KA 51MB 5890",
        createdOn: "2022-02-14 11:58:26",
        lastUpdatedOn: "2022-02-14 13:58:26",
        inUse: false,
        state: STANDSTILL,
        time: '07:45 - 08:15',
        distance: '10m',
        address: 'Salarpuria citadel, Adugodi, Bengaluru, Karnataka 560030',
        km: '10 Km',
        comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend finibus metus, et finibus elit facilisis ut. Aliquam erat volutpat. Fusce at facilisis ligula. Maecenas porttitor, erat sed pellentesque rutrum, dolor massa maximus morbi.',
    }),new Activity({
        organizationId: uuidv4(),
        licensePlate: "KA 51MB 5890",
        createdOn: "2022-02-14 10:58:26",
        lastUpdatedOn: "2022-02-14 11:58:26",
        inUse: false,
        state: DRIVING,
        time: '07:15 - 07:45',
        distance: '30m',
        address: 'Salarpuria citadel, Adugodi, Bengaluru, Karnataka 560030',
        km: '10 Km',
        comments:'',
    }),new Activity({
        organizationId: uuidv4(),
        licensePlate: "KA 51MB 5890",
        createdOn: "2022-02-14 09:58:26",
        lastUpdatedOn: "2022-02-14 09:58:26",
        inUse: false,
        state: STANDSTILL,
        time: '07:00 - 07:15',
        distance: '10m',
        address: 'Salarpuria citadel, Adugodi, Bengaluru, Karnataka 560030',
        km: '10 Km',
        comments:'',
    }),new Activity({
        organizationId: uuidv4(),
        licensePlate: "KA 51MB 5891",
        createdOn: "2022-02-14 09:58:26",
        lastUpdatedOn: "2022-02-14 09:58:26",
        inUse: false,
        state: STANDSTILL,
        time: '06:40 - 07:15',
        distance: '10m',
        address: 'Salarpuria citadel, Adugodi, Bengaluru, Karnataka 560030',
        km: '10 Km',
        comments:'',
    }),
    new Activity({
        organizationId: uuidv4(),
        licensePlate: "KA 51MB 5891",
        createdOn: "2022-02-14 07:58:26",
        lastUpdatedOn: "2022-02-14 07:58:26",
        inUse: false,
        state: DRIVING,
        time: '06:45 - 06:40',
        distance: '10m',
        address: 'Salarpuria citadel, Adugodi, Bengaluru, Karnataka 560030',
        km: '10 Km',
        comments:'',
    }),new Activity({
        organizationId: uuidv4(),
        licensePlate: "KA 51MB 5891",
        createdOn: "2022-02-14 05:58:26",
        lastUpdatedOn: "2022-02-14 05:58:26",
        inUse: false,
        state: STANDSTILL,
        time: '06:30 - 06:45',
        distance: '10m',
        address: 'Salarpuria citadel, Adugodi, Bengaluru, Karnataka 560030',
        km: '10 Km',
        comments:'',
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
    await Activity.deleteMany({});
    await Activity.insertMany(activities);

};

seedDB().then(() => {
    mongoose.connection.close();
});
