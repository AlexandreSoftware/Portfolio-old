import express from "express";
import mongo from "mongoose"
import BlogSchema from "./model/Schema/BlogPostSchema";
import consign from "consign";
let config = require("./config/config")
const app = express();
mongo.connect(config.mongo);
let port = 8000;
consign({ extensions: [ '.js', '.json', '.node', '.ts' ] })
    .then("./config/middlewares.ts")
    .then("./config/routes.ts")
    .into(app)
app.listen(port,()=>console.log(`Running Backend on port ${port}`))
