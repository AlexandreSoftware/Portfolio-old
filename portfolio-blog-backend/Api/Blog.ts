import { Request,Response } from "express"
import BlogPost from "../model/BlogPost";
import model from "../model/Schema/BlogPostSchema"
export async function GetAllBlogs(req:Request,res:Response) : Promise<BlogPost[]> {
    
    let page =await  model.find()
        .skip((+req.params.page)*50)
            .limit(50);
    let convertedBlogs :BlogPost[] = page.map((e)=>{return {
        _id :  e._id,
        Date : e.Date,
        ImageLink : e.ImageLink,
        Post : e.Post,
        Title : e.Title
    }})
    return convertedBlogs;
}
export async function GetBlog(req:Request,res:Response) : Promise<BlogPost> {
    let blog:BlogPost =await  model.find({_id : +req.params.id})[0];
    let convertedBlog =  {
        _id :  blog._id,
        Date : blog.Date,
        ImageLink : blog.ImageLink,
        Post : blog.Post,
        Title : blog.Title
    }; 
    return convertedBlog;
}
export async function PostBlog(req:Request,res:Response) : Promise<void> {
    
}
export async function PutBlog(req:Request,res:Response) : Promise<number> {
    return 1;
}
export async function DeleteBlog(req:Request,res:Response) : Promise<boolean> {
    return true;
}