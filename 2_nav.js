
const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    // res.send("Welcome to the Home or root page");

    // res.send("<h1> hello world </h1>");  //one line html
    res.write("<h1> Hello world </h1>"); // better but wait till res.send() encounter
    res.send();
});

app.get("/about", (req, res) =>{
    // diff:- from both respnose in header

    res.send("Welcome to the About page");
    // res.status(200).send("welcome to my about Page");
});
app.get("/contact", (req, res) =>{
    res.send("Welcome to the Contact page");
});

// ***** vd-3 ******
// app.get("/temp", (req, res) =>{
//     // res.send("Welcome to the Temperature page");

//     res.status(200).send({
//         id: 1,
//         myName: "alok",
//     });  // passing as object and get in JSOn on page

// });

app.get("/temp", (req, res) =>{
    // res.send("Welcome to the Temperature page");

    res.json({
        id: 1,
        myName: "alok",
    });  // passing as object and get in JSOn on page

});

// diff: res.json() and res.send()



app.listen(port, () =>{
    console.log(` listening to the port no ${port}`);
});