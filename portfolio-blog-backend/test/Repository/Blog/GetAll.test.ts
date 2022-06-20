import { GetAllBlogs } from "../../../Api/Repository/Blog";
import chai from "chai";
export default async function GetAll(mockData){

    describe("Should get all the blog posts based on the input page",
        function (){
            console.log("Starting Get All tests");

            it("Should get all the Blog Posts and check if its not null",async function (){
                let blogs = await GetAllBlogs(0)
                chai.expect(blogs)
                .to.not.be.null.undefined
                chai.expect(blogs)
                .to.not.be.null
                chai.expect(blogs)
                .to.not.be.empty
            })
            it("Should not get any Blog Posts",function (done){
                chai.expect(GetAllBlogs(10))
                .to.eventually.be.empty.notify(done)

            })
            it("Should get all the blogs from 1 to 50",async function (){
                let blogs = await GetAllBlogs(0)
                let slicedTestData = mockData.slice(0,50) 
                chai.expect(blogs)
                .to.eql(slicedTestData)
                
            })
            it("Should get all the 50-100 blogs from the database "
            ,async function (){
                let blogs = await GetAllBlogs(1)
                chai.expect(blogs)
                .to.eql(mockData.slice(50,100))
            }
            )   
        }
    )
}