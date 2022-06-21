import mongoose ,{ Schema,Types} from "mongoose";
import BlogPost from "../BlogPost";
import AutoIncrement from "mongoose-sequence"
let blogSchema = new Schema<BlogPost>({
    _id : {type:Number},
    ImageLink : {type : String, required : true },
    Title : {type : String, required : true},
    Post : {type : String, required : true},
    Date: {type : Date}
})
blogSchema.plugin(AutoIncrement(mongoose), {id:'order_seq',inc_field: '_id'});

let model = mongoose.model("BlogPost",blogSchema)
export default model;