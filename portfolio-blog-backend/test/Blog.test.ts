import { Request,Response } from "express"
import {GetBlog,GetAllBlogs} from "../Api/Blog" 
import BlogPost from "../model/BlogPost";
import CreateFakeData from "./util/CreateFakeData";
import { clearDatabase, closeDatabase, connect } from "./util/MockDatabase"
import randomNumberBetween from "./util/randomNumberBetween";
import model from "../model/Schema/BlogPostSchema"
import { instance, mock, when } from "ts-mockito";
import chai from "chai"
let mockData: BlogPost[]= []
before(async()=>{
    await connect()
    let number = randomNumberBetween(101,200)
    for (let i = 0; i <=number ; i++) {
        let fakeObj = CreateFakeData()
        fakeObj._id = i
        await mockData.push(fakeObj)
    }
    await model.insertMany(mockData)
    chai.config.showDiff=false;
})
describe("should get all the blog posts based on the input page",
    ()=>{
        console.log("Starting Get All tests");
        it("should get all the Blog Posts and check if its not null",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.params).thenReturn({page:"0"});
            let res = instance(resmock);
            let blogs = await GetAllBlogs(req,res)
            chai.expect(blogs)
            .to.not.be.null.undefined
            chai.expect(blogs)
            .to.not.be.null
            chai.expect(blogs)
            .to.not.be.empty
            
        })
        it("should not get any Blog Posts",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.params).thenReturn({page:"10"});
            let res = instance(resmock);
            let blogs = await GetAllBlogs(req,res)
            chai.expect(blogs)
            .to.be.empty
            
        })
        it("should get all the blogs from 1 to 50",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            
            when(reqmock.params).thenReturn({page:"0"});
            let res = instance(resmock);
            let blogs = await GetAllBlogs(req,res)
            let slicedTestData = mockData.slice(0,50) 
            chai.expect(blogs)
            .to.eql(slicedTestData)
            
        })
        it("should get all the 50-100 blogs from the database "
        ,async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            when(reqmock.params).thenReturn({page:"1"});
            let req = instance(reqmock);
            let res = instance(resmock);
            let blogs = await GetAllBlogs(req,res)
            chai.expect(blogs)
            .to.eql(mockData.slice(50,100))
        }
        )   
    }
)
describe("should get an specific blog post based on the input id",
    ()=>{
        console.log("Starting GetId tests");
        it("should get the id the and check if its not null",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.params).thenReturn({id:"0"});
            let res = instance(resmock);
            let blogs = await GetBlog(req,res)
            chai.expect(blogs)
            .to.not.be.null.undefined
            chai.expect(blogs)
            .to.not.be.null
            chai.expect(blogs)
            .to.not.be.empty
        })            
        it("should get the id the and check if its the same as the expected object",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.params).thenReturn({id:"0"});
            let res = instance(resmock);
            let blogs = await GetBlog(req,res)
            console.log(blogs)
            console.log(mockData[0])
            chai.expect(blogs)
            .to.be.eql(mockData[0])
        })
        it("should not get any Blog Posts",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.params).thenReturn({id:"5000"});
            let res = instance(resmock);
            let blogs = await GetAllBlogs(req,res)
            chai.expect(blogs)
            .to.be.undefined
            chai.expect(blogs)
            .to.be.null
            chai.expect(blogs)
            .to.be.empty
        })
        
        
})
describe("should Post an specific blog post based on the input id",
    ()=>{
        console.log("Starting GetId tests");
        it("should get the id the and check if its not null",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.params).thenReturn({id:"0"});
            let res = instance(resmock);
            let blogs = await GetBlog(req,res)
            chai.expect(blogs)
            .to.not.be.null.undefined
            chai.expect(blogs)
            .to.not.be.null
            chai.expect(blogs)
            .to.not.be.empty
        })            
        it("should get the id the and check if its the same as the expected object",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.params).thenReturn({id:"0"});
            let res = instance(resmock);
            let blogs = await GetBlog(req,res)
            chai.expect(blogs)
            .to.be.eql(mockData[0])
        })
        
        
})
after(async ()=>{
    await clearDatabase();
    await closeDatabase();
})