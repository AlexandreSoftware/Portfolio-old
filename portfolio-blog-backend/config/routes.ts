import express from "express"
import {Auth} from "../Api/Auth";
import {GetAllBlogs}  from "../Api/Blog";
module.exports=function live(app:express.Application){
    app.route("/Blog")
    .get(GetAllBlogs)
}
