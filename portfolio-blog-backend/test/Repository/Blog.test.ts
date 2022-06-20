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
let mockData :BlogPost[]= []
before(async function (){
    await connect()
    let number = randomNumberBetween(101,200)
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

Get(mockData);
GetAll(mockData);
Post(mockData);
Put(mockData)


after(async function (){
    model.collection.stats(function(err, results) {
        if(results)
            console.log(results.storageSize);
    });
    await clearDatabase();
    await closeDatabase();
})
