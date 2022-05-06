const express = require("express");
const path = require('path');
const bp = require('body-parser')


const PORT = 3001;

const app = express();

//parse incoming requests
app.use(bp.json());
app.use(bp.urlencoded());

// Handle GET requests to /api route
app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});