import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";
 export interface Blog{
    "content" : string,
    "title" : string,
    "id" : Number,
    "author" : {
        "name" :string,
    }
}
export const Useblog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
  
    useEffect(() => {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setBlog(res.data.blog);
          console.log(res.data.blog)
          setLoading(false);
        });
    }, [id]);
  
    return {
      loading,
      blog,
    };
  };

export const Useblogs = ()=>{
    const [loading , setloading ] = useState(true);
    const [blogs , setblogs] = useState<Blog[]>([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk` , {
           headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
           }
        }
        ).then((res)=>{
            setblogs(res.data.blogs)
            setloading(false);
        },)
       

    },[])
    return{
        loading ,blogs
}
}