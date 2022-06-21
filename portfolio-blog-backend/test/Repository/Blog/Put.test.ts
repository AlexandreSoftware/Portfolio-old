import { PutBlog } from "../../../Api/Repository/Blog";
import BlogPost from "../../../model/BlogPost";
import model from "../../../model/Schema/BlogPostSchema";
import CreateFakeData from "../../util/CreateFakeData";
import chai from "chai";
import { mock } from "ts-mockito";
export default async function Put(mockData){
    describe("Should Put an specific blog post based on the input id",
    function (){
        let lastElement 
        before(()=>{
            lastElement = mockData.length +1;
        })
        afterEach(function (){
            lastElement = lastElement+1
        })
        console.log("Starting put tests");

        it("Should return a number as the object was Put into the database",async function (){
            let mockObject :BlogPost= CreateFakeData()
            let result = await PutBlog(mockObject)
            chai.expect(result)
                .to.be.a('number')
        })          
        it("Should return true and the object in the database should be able to get the same from the database",async function (){
            let mockObject :BlogPost= CreateFakeData()
            let result = await PutBlog(mockObject)
            mockObject._id = lastElement
            let blogindb = await model.findOne({_id:lastElement});
            let convertedBlogInDb ;
            if(blogindb){
                convertedBlogInDb=  {
                    _id :  blogindb._id,
                    Date : blogindb.Date,
                    ImageLink : blogindb.ImageLink,
                    Post : blogindb.Post,
                    Title : blogindb.Title
                }; 
            }
            chai.expect(result)
                .to.be.a('number')
            chai.expect(mockObject)
                .to.be.eql(convertedBlogInDb)
            
        })                  
        it("Should return a number as the object was Put into the database and the number should be the same as the last element on the database",async function (){
            let mockObject :BlogPost= CreateFakeData()
            let result = await PutBlog(mockObject)
            chai.expect(result)
                .to.be.a('number')
            chai.expect(result)
                .to.be.equal(lastElement)
        })          
    })
}