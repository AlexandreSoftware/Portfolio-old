import axios from "axios";
import { motion } from "framer-motion";
import BlogSummaryCard from "../Components/Blog/BlogSummaryCard";
import ProjectSummaryCard from "../Components/Projects/ProjectSummaryCard";
import BlogPost from "../model/BlogPost";

interface BlogProps{
    posts:BlogPost[]
}
export default function Blog(props:BlogProps) {
    return <motion.div
            initial="initial"
            animate="animate"
            variants={{
                initial:{
                    opacity:0
                },
                animate:{
                    opacity:1
                }
        }}
        >
            {props.posts.map(element => {return(<BlogSummaryCard Title={element.Title} imageLink={element.ImageLink} id={element._id} key={element._id}  >{element.Post}</BlogSummaryCard>)})}
        </motion.div>
}
async function getPosts(){
    try{
        let res = await axios.get(process.env.blogUrl + "/Blog/page/0")
        if(res.status==200){
            let blogs : BlogPost[] = res.data 
            return blogs
        }
    }
    catch(e){
        console.log(e)
        throw new Error("unable to get initial blogs")
    }
}
export async function getStaticProps(){
    return {
        props: {
          posts : await getPosts(),
        },
      }
}