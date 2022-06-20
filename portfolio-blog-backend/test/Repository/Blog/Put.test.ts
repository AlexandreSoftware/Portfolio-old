import { PostBlog } from "../../../Api/Repository/Blog";
import BlogPost from "../../../model/BlogPost";
import model from "../../../model/Schema/BlogPostSchema";
import CreateFakeData from "../../util/CreateFakeData";
import chai from "chai";
export default function Put(mockData){
    describe("should Put an specific blog post based on the input id",
    function (){
        let objectid = mockData.length;
        afterEach(function (){
            let mockobject :BlogPost= CreateFakeData()
            mockobject._id=objectid;
            model.deleteOne({_id:objectid})
        })
        console.log("Starting Post tests");

        it("should return false as the id provided doesnt exist",async function (){
            let blogs = await PostBlog({
                _id:40000 ,
                Title: mockData[0].Title,
                Date: mockData[0].Date,
                ImageLink : mockData[0].ImageLink,
                Post : mockData[0].Post
            })
            chai.expect(blogs)
            .to.be.false
            
        })
        it("should return true as the object was updated",async function (){
            let blogs = await PostBlog({
                _id:objectid,
                Title: mockData[0].Title,
                Date: mockData[objectid].Date,
                ImageLink : mockData[objectid].ImageLink,
                Post : mockData[objectid].Post
            })
            chai.expect(blogs)
            .to.be.true
        })          
        it("should return true and the object in the database should be the same as the mock one but with the changed title",async function (){
            let blogs = await PostBlog({
                _id:objectid ,
                Title: mockData[0].Title,
                Date: mockData[objectid].Date,
                ImageLink : mockData[objectid].ImageLink,
                Post : mockData[objectid].Post
            })
            let blogindb = await model.findOne({_id:objectid})
            let comparisionblog = mockData[objectid];
            comparisionblog.Title = " A cool title";
            chai.expect(blogs)
            .to.be.true
            chai.expect(blogindb)
                .to.be.eql(comparisionblog)
        })                  
    })
}