
const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

const staticPath = path.join(__dirname, '../public');

// to set the view engine ((vd= 6))
app.set("view engine", 'hbs');

// built in middleware
// app.use(express.static(staticPath));
//***** vd - 7 (express) */
const templatePath = path.join(__dirname, "../template");
app.set('views', templatePath);

//**** vd-7 end */

// template engine route
app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/", (req, res) =>{
    res.send("reponse from express server");
});


app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})