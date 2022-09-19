const express = require('express');
const app = express();  // it store all methods of express

// ***** vd-4 ***
const path = require('path');

const staticPath = (path.join(__dirname, '../public')); // join path

// built in Middleware
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.send("hello from the express");  // instead of res.end() in node
});

app.get("/about", (req, res) =>{
    res.send("Hello world form the About section");
});

app.listen(8000, () => {
    console.log("listening express on port 8000");
});



