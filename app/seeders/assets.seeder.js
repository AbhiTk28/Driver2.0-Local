const { Asset } = require("../models/Asset");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// Create array of assets
const assets = [
  new Asset({
    organizationId: "org001",
    assetId: uuidv4(),
    assetType: "Truck",
    licensePlate: "KA 51MB 5890",
    vinNumber: uuidv4(),
    parentAssetId: uuidv4(),
    createdOn: "2022-01-31T11:58:26:906Z",
    lastUpdatedOn: "2022-01-31T11:58:26:906Z",
    assetStatus: "active",
    inUse: true,
  }),
  new Asset({
    organizationId: "org001",
    assetId: uuidv4(),
    assetType: "Truck",
    licensePlate: "KA 51MB 5891",
    vinNumber: uuidv4(),
    parentAssetId: uuidv4(),
    createdOn: "2022-01-31T11:58:26:906Z",
    lastUpdatedOn: "2022-01-31T11:58:26:906Z",
    assetStatus: "active",
    inUse: false,
  }),
  new Asset({
    organizationId: "org002",
    assetId: uuidv4(),
    assetType: "Truck",
    licensePlate: "KA 51MB 5892",
    vinNumber: uuidv4(),
    parentAssetId: uuidv4(),
    createdOn: "2022-01-31T11:58:26:906Z",
    lastUpdatedOn: "2022-01-31T11:58:26:906Z",
    assetStatus: "active",
    inUse: false,
  }),
  new Asset({
    organizationId: "org002",
    assetId: uuidv4(),
    assetType: "Truck",
    licensePlate: "KA 51MB 5893",
    vinNumber: uuidv4(),
    parentAssetId: uuidv4(),
    createdOn: "2022-01-31T11:58:26:906Z",
    lastUpdatedOn: "2022-01-31T11:58:26:906Z",
    assetStatus: "active",
    inUse: true,
  }),
  new Asset({
    organizationId: "org003",
    assetId: uuidv4(),
    assetType: "Truck",
    licensePlate: "KA 51MB 5894",
    vinNumber: uuidv4(),
    parentAssetId: uuidv4(),
    createdOn: "2022-01-31T11:58:26:906Z",
    lastUpdatedOn: "2022-01-31T11:58:26:906Z",
    assetStatus: "active",
    inUse: false,
  }),
  new Asset({
    organizationId: "org003",
    assetId: uuidv4(),
    assetType: "Truck",
    licensePlate: "KA 51MB 5895",
    vinNumber: uuidv4(),
    parentAssetId: uuidv4(),
    createdOn: "2022-01-31T11:58:26:906Z",
    lastUpdatedOn: "2022-01-31T11:58:26:906Z",
    assetStatus: "active",
    inUse: false,
  }),
  new Asset({
    organizationId: "org003",
    assetId: uuidv4(),
    assetType: "Truck",
    licensePlate: "KA 51MB 5896",
    vinNumber: uuidv4(),
    parentAssetId: uuidv4(),
    createdOn: "2022-01-31T11:58:26:906Z",
    lastUpdatedOn: "2022-01-31T11:58:26:906Z",
    assetStatus: "inactive",
    inUse: false,
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
  await Asset.deleteMany({});
  await Asset.insertMany(assets);
};

seedDB().then(() => {
  mongoose.connection.close();
});
