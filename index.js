const express = require("express");
const app = express();
const fs = require("fs");

// setup view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    //const html = fs.readFileSync("./index.html", "utf-8");
    const data = [
        {
            name: "ali",
            class: "bsc"
        },
        {
            name: "saleem",
            class: "fsc"
        },
        {
            name: "akmal",
            class: "fa"
        }
    ]
    res.render("index", {users: data});


});

app.get("/about", (req, res) => {
    //const html = fs.readFileSync("./index.html", "utf-8");
    res.render("about");
});

app.get("/contact", (req, res) => {
    //const html = fs.readFileSync("./index.html", "utf-8");
    res.render("contact");
});




app.listen(3003, ( ) => { console.log("server connected")});