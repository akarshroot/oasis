const express = require("express");
const path = require('path');
const bp = require('body-parser')
var mongoClient = require("mongodb").MongoClient;


const PORT = 3001;

const app = express();

//parse incoming requests
app.use(bp.json());
app.use(bp.urlencoded());

// Handle GET requests to /api route
app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/verify-user", (req, res) => {
    mongoClient.connect("mongodb://hackathon-tgihchitkara:usaNYGLEt1gzqFT1UqZSS1PHBWREhDsSDxNySOznybs92hvBwiekFuS5EK8MBt66vWNpObFG8MVKQXCEhr2ISQ%3D%3D@hackathon-tgihchitkara.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@hackathon-tgihchitkara@", function (err, client) {
        console.log("done");
        const db = client.db("hackathon")
        const col = db.collection('Users');
        const body = req.body
        console.log(body);
        const docs = col.find(body).toArray()
            .then((resultDocs) => {
                console.log(resultDocs);
                if(resultDocs.length == 0)
                    res.json(false)
                else
                    res.json(true)
            })
        
    });
})

app.post("/post-user", (req, res) => {
    mongoClient.connect("mongodb://hackathon-tgihchitkara:usaNYGLEt1gzqFT1UqZSS1PHBWREhDsSDxNySOznybs92hvBwiekFuS5EK8MBt66vWNpObFG8MVKQXCEhr2ISQ%3D%3D@hackathon-tgihchitkara.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@hackathon-tgihchitkara@", function (err, client) {
        console.log("done");
        const db = client.db("hackathon")
        const body = req.body
        console.log(body);
        db.collection('Users').insertOne(body);
    });
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
