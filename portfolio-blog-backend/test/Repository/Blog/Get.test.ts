import { GetBlog } from "../../../Api/Repository/Blog";
import chai from "chai";
export default function Get(mockData){
    describe("should get an specific blog post based on the input id",
        function (){
            console.log("Starting GetId tests");
            
            it("should not get any Blog Posts",function (done){
                chai.expect(GetBlog(5000))
                .to.eventually.be.rejectedWith("ERROR: Unable to find the Blog post")
                .and.be.an.instanceOf(Error)
                .notify(done)
                
            })
            it("should get the id the and check if its the same as the expected object",async function (){
                let blogs = await GetBlog(1)
                chai.expect(blogs)
                .to.be.eql(mockData[0])
            })
            
            
            
    })
}