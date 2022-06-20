import { PostBlog } from "../../../Api/Repository/Blog";
import BlogPost from "../../../model/BlogPost";
import model from "../../../model/Schema/BlogPostSchema";
import chai from "chai";
export default function Post(mockData){
    describe("should Post an specific blog post based on the input id",
    function (){
        let objectid =  15;
        afterEach(function (){
            let BlogPost :BlogPost = mockData[objectid]
            model.updateOne({_id:objectid},BlogPost)
            if(objectid + 10 < mockData.length)
                objectid += 10
            else
                objectid = 10
        })
        console.log("Starting Post tests");


        it("should return true as the object was updated",async function (){
            let blogs = await PostBlog({
                _id:objectid ,
                Title: "A cool title",
                Date: mockData[objectid].Date,
                ImageLink : mockData[objectid].ImageLink,
                Post : mockData[objectid].Post
            })
            chai.expect(blogs)
            .to.be.true
        })          
        it("should return true and the object in the database should be the same as the mock one but with the changed title",async function (){
            let blogs = await PostBlog({
                Title: "A cool title",
                Date: mockData[objectid+1].Date,
                ImageLink : mockData[objectid+1].ImageLink,
                Post : mockData[objectid+1].Post
            })
            let blogindb = await model.findOne({_id:objectid})
            let comparisionblog = mockData[objectid-1];
            comparisionblog.Title = "A cool title";
            let convertedBlogInDb 
            if(blogindb){
                convertedBlogInDb=  {
                    _id :  blogindb._id,
                    Date : blogindb.Date,
                    ImageLink : blogindb.ImageLink,
                    Post : blogindb.Post,
                    Title : blogindb.Title
                }; 
            }
            console.log(convertedBlogInDb)
            console.log(comparisionblog)
            chai.expect(blogs)
            .to.be.true
            chai.expect(comparisionblog)
                .to.be.eql(convertedBlogInDb)
        })                  
        it("should return false since the id was provided",async function (){
            chai.expect(false).to.be.true
        })
    })


    describe("should Post an specific blog post based on the input id",
        function (){
            let objectid =  15;
            afterEach(function (){
                let BlogPost :BlogPost = mockData[objectid]
                model.updateOne({_id:objectid},BlogPost)
                if(objectid + 10 < mockData.length)
                    objectid += 10
                else
                    objectid = 10
        })
        console.log("Starting Post tests");
        it("should return false as the id provided doesnt exist",async function (){
            let blogs = await PostBlog({
                _id:40000 ,
                Title: " A cool title",
                Date: mockData[0].Date,
                ImageLink : mockData[0].ImageLink,
                Post : mockData[0].Post
            })
            chai.expect(blogs)
            .to.be.false
            
        })
        it("should return true as the object was updated",async function (){
            let blogs = await PostBlog({
                _id:objectid ,
                Title: " A cool title",
                Date: mockData[objectid].Date,
                ImageLink : mockData[objectid].ImageLink,
                Post : mockData[objectid].Post
            })
            chai.expect(blogs)
            .to.be.true
        })          
        it("should return true and the object in the database should be the same as the mock one but with the changed title",async function (){
            let blogs = await PostBlog({
                _id:objectid,
                Title: "A cool title",
                Date: mockData[objectid].Date,
                ImageLink : mockData[objectid].ImageLink,
                Post : mockData[objectid].Post
            })
            let blogindb = await model.findOne({_id:objectid})
            let comparisionblog = mockData[objectid];
            comparisionblog.Title = "A cool title";
            chai.expect(blogs)
            .to.be.true
            chai.expect(blogindb)
                .to.be.eql(comparisionblog)
        })                  
    })
}