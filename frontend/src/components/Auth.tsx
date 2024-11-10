import { SignupInput } from "@sanjeevreddy125/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link,  useNavigate } from "react-router-dom"

import { BACKEND_URL } from "../config";
 

export const Auth = ({type} : {type : "signin" | "signup"})=>{
    const [postInputs,setpostInputs] = useState<SignupInput>({
        name : "",
        email : "",
        password : ""
    }
   
   
    ) 
    const navigate = useNavigate();
   
  async function sendRequest (){
    try{
    const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"} ` , postInputs)
    
    const jwt = res.data.jwt;
    localStorage.setItem("token" , jwt);
    navigate("/blogs")
    
    }
    
    catch(e){
        alert("Error Occured")
    }
  
  }
    return (
        <div className=" h-screen flex justify-center  flex-col  " >
            <div className=" flex justify-center ">
                <div >
                <div className=" px-10  ">
                    <div className="text-2xl font-bold ">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        {type === 'signup' ? "Already have an account?" : "Dont have an account?" } 
                        <Link className = 'pl-2 underline' to={ type === 'signup' ?'/signin' : '/signup'}>
                         {type === 'signup' ? 'login' : 'signup'}
                        </Link>
                    </div>
                    </div>

                    <div className="pt-5 ">
               
                {type === "signup"?<LabelledInput label= "name" placeholder = "min 3 letters"  onChange = {(e)=>{
                    setpostInputs(c=>({
                        ...c,
                        name : e.target.value,
                        
                        
                    }))
                  
                    
                    
                }}/> : null}
                <LabelledInput label= "email" placeholder = "sanjeev@gmail.com"  onChange = {(e)=>{
                setpostInputs(c=>({
                    ...c,
                    email : e.target.value
                }))

            }}/>
             <LabelledInput label= "password" type="password" placeholder = "min 6 charecters"  onChange = {(e)=>{
                    setpostInputs(c=>({
                        ...c,
                        password : e.target.value
                    }))

                }}/>
                <button onClick = {sendRequest} type="button" className=" w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==='signin' ? 'signin' : 'signup'}</button>

                </div>
                </div>
                </div>
               


        </div>
    )
}
interface labelledInput {
    placeholder : string,
    label :string,
    onChange : (e: ChangeEvent<HTMLInputElement>)=>void;
    type? : string
}

function LabelledInput ({label , placeholder , onChange,type }: labelledInput) {
    return (

    <div>
    <label htmlFor="first_name" className="block mb-2 text-sm font-semibold text-black pt-4  ">{label}</label>
    <input onChange={onChange} type= {type || "text" }id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder={placeholder} required />
</div>
    )

}
