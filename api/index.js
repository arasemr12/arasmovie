require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(cors({
    credentials:false,
    origin:"*"
}));

app.use(morgan("dev"));

let routes = fs.readdirSync(path.join(__dirname,"routes"));
routes.forEach((routeName) => {
    let route = require(path.join(__dirname,"routes",routeName));
    app.use(`/api/${routeName.replace(path.extname(routeName),"")}`,route);
});

app.listen(process.env.PORT || 5001,() => console.log("app listening"));
