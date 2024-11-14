
"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Main: React.FC =() =>{
    const [search, setSearch ] = useState <string> ("");
    const router =useRouter();

    const onSearchSubmit = (e:React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
router.push(`https://www.google.com/search?q=${search}`);

    }
    return (
        <div className="items-center  flex flex-col mt-28">
            <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
        
            alt="google" 
            height={100}
            width={270}
            
            />
            <form className="flex border mt-7 px-7 py-2 rounded-full w-2/5 items-center hover:shadow-md">

                {/* onsubmit={(e) => onSearchSubmit (e)} */}

                <input type="text"
                className="w-full focus:outline-none ml-4"
                 onChange={(e) => setSearch (e.target.value)}
                 value={search}
                /> 
                
                
            </form>
<div className="mt-7">
<button className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border" 
> Google Search</button>
<button className="bg-slate-100  py-2 px-4 text-sm rounded hover:border">I'm Feeling Lucky</button>
</div>
            


    
        </div>
    )
}
export default Main ;