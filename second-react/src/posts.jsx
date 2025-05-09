import { use } from "react"
import Post from "./post"

export default function Posts({postsPromise}){
   
    const posts = use(postsPromise)
    
    return(
        <div className="postCard">
            <h2>All posts are here</h2>
        { 
         posts.map(post=> <Post post={post}></Post> )
             
       }
        </div>
    )

}