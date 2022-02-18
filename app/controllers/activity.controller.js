const {Activity} = require('../module/activity')
const {ActivityList} = require('../module/activityList')
const {ObjectId} = require('mongoose');

const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/driver-db';

mongoose.set('debug', true);
const database = mongoose.connection;

exports.getActivityList = async (req, res) => {
    const filter = {};
    ActivityList.find(filter)
        .then(activityList => {
            if (activityList) {
                res.json({"activities": activityList, statusCode:200});
            }
            else {
                res.status(404).json({
                    message: "No Activity found"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: error
            })
        });
};

exports.getActivityHistory = async (req, res) => {
    let startDate = new Date();//current time and date
    let endDate = new Date();
    console.log("getActivityHistory", " req ", req.body)
    if(req && req.body && req.body?.startDate !== null && req.body?.endDate !== null) {
        startDate = new Date(req.body?.startDate);
        endDate = new Date(req.body?.endDate);
    }else{
        let minimumHr = 15;
        let seconds = 1000 * 60;
        let currentTime = new Date().getTime();
        endDate = currentTime - (minimumHr * 60 * seconds);
        startDate = new Date();//current time and date
        endDate = new Date(endDate); // 15hr old date and time
    }

    const filter = {};
    Activity.find(filter)
        .then(Activity => {
            if (Activity) {
                let resultActivities = Activity.filter(a => {
                    let date = new Date(a.createdOn);
                    return (date >= endDate && date <= startDate);
                });
                res.json({"activities": resultActivities, statusCode:200});
            }
            else
                res.status(404).json({
                    message: "No Activity found"
                })
        })
        .catch(error => {
            res.status(500).json({
                message: error
            })
        });

}

exports.updateActivity = async (req, res) => {
    const filter = {};
    Activity.find(filter)
        .then(Activity => {
            if (Activity) {
                console.log("reqreceived", req.body)
                mongoose.connect(url, function(err, db) {
                    if (err) throw err;
                    let myquery = { _id: mongoose.Types.ObjectId("620a1bd33fa3cf4518c6898d" )};
                    let newvalues = { $set: {
                            "state": req.body?.state,
                        } };
                    db.collection("Activity").updateOne(myquery,newvalues,{w:1},
                        function(err, res) {
                            if (err){console.log("failure while document updated", err)};
                            console.log("1 document updated", res);
                            db.close();
                        });
                });

                res.json({"message": 'activity updated', statusCode:200});
            }
            else
                res.status(404).json({
                    message: "No Activity found"
                })
        })
        .catch(error => {
            res.status(500).json({
                message: error
            })
        });

}

