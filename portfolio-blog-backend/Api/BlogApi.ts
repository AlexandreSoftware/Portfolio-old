import { Request,Response } from "express"
import BlogPost from "../model/BlogPost"
import { DeleteBlog, GetAllBlogs, GetBlog, PostBlog, PutBlog } from "./Repository/Blog"

export function GetAllBlogsApi(req:Request,res:Response){
    let page = req.params.page
    if(page&& parseInt(page) !=NaN){
        console.log(page)
        GetAllBlogs(+page).then((result)=>{
            res.status(200)
            console.log(result)
            res.send(result)
        },
        ()=>{
            res.status(500)
            res.send("Error: unable to get page")
        })
    }
    else{
        res.status(404)
        res.send("ERROR: page param not included")
    }
 
}
export function GetBlogApi(req:Request,res:Response)  {
    let id = req.params.id
    if(id&& parseInt(id) !=NaN){
        GetBlog(+id).then((result)=>{
            res.status(200)
            res.send(result)
        },
        ()=>{
            res.status(500)
            res.send("Error: unable to get Blog")
        })
    }
    else{
        res.status(404)
        res.send("ERROR: id param not included")
    }
}
export function PostBlogApi(req:Request,res:Response){
    if(Date.parse(req.body.Date) && req.body.id && parseInt(req.body.id) != NaN && req.body.Title && req.body.Date && req.body.ImageLink && req.body.Post){
        let blog :BlogPost= {
            _id:req.body.id,
            Title: req.body.Title,
            Date:new Date(req.body.Date),
            ImageLink: req.body.ImageLink,
            Post: req.body.Post,            
        }
        
        PostBlog(blog).then((result)=>{
            if(result===true){
                res.status(200)
                res.send("Sucessfully Updated Element")
            }
            else{
                res.status(500)
                res.send("ERROR: unable to Update Element")
            }
        },
        ()=>{
            res.status(500)
            res.send("Error: unable to Post Blog")
        })
    }
    else{
        res.status(404)
        res.send("ERROR: Malformed Body")
    }
}
export function PutBlogApi(req:Request,res:Response){
    if(req.body.Title && req.body.ImageLink && req.body.Post){
        let blog :BlogPost= {
            Title: req.body.Title,
            Date:new Date(Date.now()),
            ImageLink: req.body.ImageLink,
            Post: req.body.Post,            
        };
        PutBlog(blog).then((result)=>{
            res.status(200);
            res.send(result.toString());
        },
        ()=>{
            res.status(500);
            res.send("Error: unable to Post Blog");
        });
    }
    else{
        res.status(404);
        res.send("ERROR: Malformed Body");
    }
}
export function DeleteBlogApi(req:Request,res:Response){
    let id = req.params.id
    if(id&& parseInt(id) !=NaN){
        DeleteBlog(+id).then((result)=>{
            if(result===true){
                res.status(200)
                res.send("Sucessfully Deleted Element")
            }
            else{
                res.status(500)
                res.send("ERROR: unable to Delete Element")
            }
        },
        ()=>{
            res.status(500)
            res.send("Error: unable to Delete Blog")
        })
    }
    else{
        res.status(404)
        res.send("ERROR: id param not included")
    }   
}