import axios from 'axios'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { arrayBuffer } from 'stream/consumers'
import BlogPostComponent from '../../Components/Blog/BlogPostComponent'
import BlogPost from '../../model/BlogPost'


interface PostProps{
    post:BlogPost
}
const Post = (props:PostProps) => {
    return (<div>
            <BlogPostComponent id={props.post._id} Title={props.post.Title} date={props.post.Date} imageLink={props.post.ImageLink}>{props.post.Post}</BlogPostComponent>
    </div>)
  
}

export default Post
async function getPost(context:any){
    const  Post = context.params.Post
    try{
        let res = await axios.get(process.env.blogUrl + "/Blog/id/"+Post)
        if(res.status==200){
            let blogs : BlogPost= res.data 
            return blogs
        }
    }
    catch(e){
        console.log(e)
        throw new Error("unable to get initial blogs")
    }
}
export async function getStaticProps(context:any){
    console.log(context)
    return {
        props: {
          post : await getPost(context),
        },
      }
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
function allNumbersUntil(n : number){
    let arr = []
    for (let i = 1; i<n;i++){
        arr.push({params:{Post:i.toString()}})
    }
    return arr
}
export const getStaticPaths: GetStaticPaths<{ Post: string }> = async () => {
    let posts = await getPosts()
    if(posts && posts.length > 0){
        return {
            paths: allNumbersUntil(posts.length),
            fallback: 'blocking' //indicates the type of fallback
        }
    }
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
