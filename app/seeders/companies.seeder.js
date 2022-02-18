const { Company } = require("../models/Company");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// Create array of assets
const companies = [
  new Company({
    organizationId: "org001",
    name: "ZF Wabco",
  }),
  new Company({
    organizationId: "org002",
    name: "Microsoft",
  }),
  new Company({
    organizationId: "org003",
    name: "Tesla",
  }),
];

//connect mongoose
mongoose
  .connect("mongodb://localhost:27017/driver-db", { useNewUrlParser: true })
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });

//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
const seedDB = async () => {
  await Company.deleteMany({});
  await Company.insertMany(companies);
};

seedDB().then(() => {
  mongoose.connection.close();
});
