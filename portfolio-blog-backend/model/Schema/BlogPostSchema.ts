import mongoose ,{ Schema,Types} from "mongoose";
import BlogPost from "../BlogPost";
let blogSchema = new Schema<BlogPost>({
    _id : {type:Number},
    ImageLink : {type : String, required : true },
    Title : {type : String, required : true},
    Post : {type : String, required : true},
    Date: {type : Date}
})
let model = mongoose.model("BlogPost",blogSchema)
export default model;