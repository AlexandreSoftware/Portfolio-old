import express from "express"
import { DeleteBlogApi, GetAllBlogsApi, GetBlogApi, PostBlogApi, PutBlogApi } from "../Api/BlogApi";
module.exports=function routes(app:express.Application){
    app.route("/Blog")
        .post(PostBlogApi)
        .put(PutBlogApi)
    app.route("/Blog/id/:id")
        .get(GetBlogApi)
        .delete(DeleteBlogApi)
    app.route("/Blog/page/:page")
        .get(GetAllBlogsApi)
    
}
