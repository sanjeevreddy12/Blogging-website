import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Useblogs } from "../hooks"



export const Blogs = ()=>{

    const {loading , blogs}= Useblogs();
    if(loading){
        return(<div>
            <Appbar/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        
        </div>)
    }
    return (
        <div>
            <div>
                <Appbar />
            </div>
        <div className="flex justify-center ">
        <div className="">
            {blogs.map(blog=>
                <Blogcard author={blog.author.name} Date="8 nov " title={blog.title} content={blog.content} id = {blog.id} />
            )}
           
        </div>
        </div>
        </div>
    )
}