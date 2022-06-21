import { Request,Response } from "express"
import {GetBlog,GetAllBlogs, PostBlog} from "../../Api/Repository/Blog" 
import BlogPost from "../../model/BlogPost";
import CreateFakeData from "../util/CreateFakeData";
import { clearDatabase, closeDatabase, connect } from "../util/MockDatabase"
import randomNumberBetween from "../util/randomNumberBetween";
import model from "../../model/Schema/BlogPostSchema"
import chai from "chai"
import chaiAsPromised from 'chai-as-promised';
import Get from "./Blog/Get.test";
import GetAll from "./Blog/GetAll.test";
import Post from "./Blog/Post.test";
import Put from "./Blog/Put.test";
import Delete from "./Blog/Delete.test";
let mockData :Array<BlogPost| null>= []
before(async function (){
    await connect()
    let number = randomNumberBetween(141,200)
    for (let i = 0; i <=number ; i++) {
        let fakeObj = CreateFakeData()
        let modelScheme = new model({
            Date:fakeObj.Date,
            ImageLink:fakeObj.ImageLink,
            Post:fakeObj.Post,
            Title:fakeObj.Title
        })
        let insertedobj =await modelScheme.save()
        await mockData.push({
            _id:insertedobj._id,
            Date:fakeObj.Date,
            ImageLink:fakeObj.ImageLink,
            Post:fakeObj.Post,
            Title:fakeObj.Title
        })
        
    }
    chai.use(chaiAsPromised)
    chai.config.showDiff=false;
})

Get(mockData)
    .then(()=>{
        console.log("finished Get tests")
        GetAll(mockData).then(()=>{
            console.log("finished GetAll tests")
            Post(mockData).then(()=>{
                console.log("finished Post tests")
                Put(mockData).then(()=>{
                    console.log("finished put tests")
                    Delete(mockData)
                })
            });
        });
    });





after(async function (){
    await clearDatabase();
    await closeDatabase();
})
