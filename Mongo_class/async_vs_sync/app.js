//the mongodb is the driver we just installed
//MongoClient - will be the object we use to access node.js driver api mongodb
var MongoClient = require('mongodb').MongoClient;

//Setting up a connection with the database - this link is to the cloud database created on Mongolab.com
MongoClient.connect('mongodb://student:classcen3031@ds035503.mongolab.com:35503/lecture', function(err, db) {

    if(err) throw err;

    // Find one document in our collection
    //We need the callback function(err,doc) since this is an async call to MongoDB
    db.collection('coll').findOne({}, function(err, doc) {

        // Print the result
        console.dir(doc);

        // Close the DB
        db.close();
    });

     db.collection('birds').insert({"name" : "blue bird" , "location" : "NE United States"}, function(err, doc) {

        // Print the result
        console.dir(doc);

        // Close the DB
        db.close();
    });

    // Declare success
    console.dir("Called findOne!");
});
