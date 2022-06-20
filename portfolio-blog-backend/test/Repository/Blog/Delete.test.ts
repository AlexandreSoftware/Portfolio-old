import { DeleteBlog } from "../../../Api/Repository/Blog";
import BlogPost from "../../../model/BlogPost";
import model from "../../../model/Schema/BlogPostSchema";
import CreateFakeData from "../../util/CreateFakeData";
import chai from "chai";
import { mock } from "ts-mockito";
export default async function Delete(mockData:Array<BlogPost | null>){
    describe("should Delete an specific blog post based on the input id",
    function (){
        let deletedElementIndex = 105
        this.beforeEach(async ()=>{
            deletedElementIndex += 7
        })
        afterEach(async ()=>{
            mockData[deletedElementIndex-1] = null
        })
        console.log("Starting Delete tests");

        it("Should Delete an specific blog post based on the input id and should return true as the object was deleted",async function (){
            let result = await DeleteBlog(deletedElementIndex)
            chai.expect(result)
                .to.be.equal(true)
        })          
        it("Should Delete an specific blog post based on the input id and should return false as the object was not found in the database",async function (){
            let result = await DeleteBlog(4000)
            chai.expect(result)
                .to.be.equal(false)
        })          
        it("Should Delete an specific blog post based on the input id and should return true and the object in the database should be undefined",async function (){
            let result = await DeleteBlog(deletedElementIndex)
            let blogindb = await model.findOne({_id:deletedElementIndex});
            chai.expect(result)
            .to.be.equal(true)
            chai.expect(blogindb)
                .to.be.null
        })                  
    })
}