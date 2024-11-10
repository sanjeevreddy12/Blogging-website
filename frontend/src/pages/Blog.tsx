import { useParams } from "react-router-dom"
import { Useblog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";

export const Blog = ()=>{
    const {id}  = useParams();

    const {loading,blog} = Useblog(
        {
            id : id || ""
        }
    )
    if (loading ) {
        return(
<div>
    <Appbar/>
    <BlogSkeleton/>
</div>
        )
    }
    if(!blog)
    {
        return(
            <div>
                No post
            </div>
        )
    }
    
    return(
        <div>
          
            
           <FullBlog blog={blog }  />
        </div>
    )
}