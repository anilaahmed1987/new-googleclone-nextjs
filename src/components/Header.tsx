

import { TbGridDots } from "react-icons/tb";
import Link from "next/link";
import { link } from "fs";

const Header :React.FC=()=>{
    return(
    <div className="flex justify-end pr-4 pt-3 space-x-4 items-center" >
        < Link href= "https://support.google.com/mail/answer/56256?hl=en"   className="text-sm hover:underline cursor-pointer"> Gmail </Link>
        < Link href= "http://image.google.com"   className="text-sm hover:underline cursor-pointer"> Image</Link>
       
        
        <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full"/>
        {/* <img 
        src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
        alt="google"
        width={30}
        height={100}
         /> */}
      

    </div>)
}
export default Header;