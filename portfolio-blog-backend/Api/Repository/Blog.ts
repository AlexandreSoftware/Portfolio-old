import { Request,Response } from "express"
import BlogPost from "../../model/BlogPost";
import model from "../../model/Schema/BlogPostSchema"
export async function GetAllBlogs(page:number) : Promise<BlogPost[]> {
    
    let blogpage =await  model.find()
        .skip((+page)*50)
            .limit(50);
    let convertedBlogs :BlogPost[] = blogpage.map((e)=>{return {
        _id :  e._id,
        Date : e.Date,
        ImageLink : e.ImageLink,
        Post : e.Post,
        Title : e.Title
    }})
    return convertedBlogs;
}
export async function GetBlog(id:number) : Promise<BlogPost> {
    let blog = await  model.findOne({_id : id});
    if(blog){
        let convertedBlog =  {
            _id :  blog._id,
            Date : blog.Date,
            ImageLink : blog.ImageLink,
            Post : blog.Post,
            Title : blog.Title
        }; 
        return convertedBlog;
    }
    throw new Error("ERROR: Unable to find the Blog post")
}
export async function PostBlog(blog :BlogPost) : Promise<boolean> {
    try{
        if(await model.exists({_id:blog._id})){
            await model.updateOne({_id:blog._id},blog)
            return true;
        }
        return false;
    }
    catch{
        return false;
    }
}
export async function PutBlog(blog :BlogPost) : Promise<number> {
    try{
        let newblogpost = new model({
            Date : blog.Date,
            ImageLink : blog.ImageLink,
            Post : blog.Post,
            Title : blog.Title
        }) 
        let resultblogpost = await newblogpost.save();
        if(resultblogpost._id)
            return +resultblogpost._id;
        throw new Error("Unable to insert into db")
    }
    catch(e){
        throw e
    }
}
export async function DeleteBlog(id:number) : Promise<boolean> {
        if(await model.exists({_id:id})){
            await model.deleteOne({_id:id})
            return true;
        }
        return false
}