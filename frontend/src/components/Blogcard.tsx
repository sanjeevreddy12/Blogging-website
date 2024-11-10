import { Link } from "react-router-dom";

interface Blogcardprops{
    author:string,
    Date : string,
    title : string,
    content : string,
    id: Number
}
export const Blogcard = ({author , Date , title , content, id}: Blogcardprops)=>{
    return(
      <Link to={`/blog/${id}`}>
        <div className=" border-b border-slate-200 p-4 w-screen max-w-screen-md curson-pointer">
            <div className="flex">
            <div className="flex justify-center flex-col">

           <Avatar name = {author}/>     
            </div>
            <div className=" font-extralight px-2"> {author}. </div>
            <div className="flex justify-center flex-col pl-2 pt-1">
            <div className="h-1 w-1 rounded-full bg-slate-400 ">
            </div>
                

            </div>
            <div className="font-thin px-1 text-slate-400">
            {Date}

            </div>
            </div>
            
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin flex ">
               {`${content.slice(0,100)}...`}
            </div>
            <div className="text-sm text-slate-400 font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
           

        </div>
        </Link>
    )
}  

export function Avatar({ name, size }: { name: string; size?: string }) {
    return (
      <div
        className={`relative inline-flex items-center justify-center ${size=="big"?"w-10 h-10":"w-4 h-4"} overflow-hidden rounded-full bg-gray-600`}
      >
        <span className="font-medium text-s text-gray-300">{name[0]}</span>
      </div>
    );
  }