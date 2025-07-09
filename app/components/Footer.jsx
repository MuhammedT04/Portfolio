import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
 

        <div className="w-max flex items-center gap-2 mx-auto text-sm">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          muhammedmhd@gmail.com
        </div>
    
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-3.5 py-6">
        <p>© 2025 ....</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target="_blank" href="https://github.com/MuhammedT04">GitHub</a></li>
            <li><a target="_blank" href="https://github.com/MuhammedT04">Linkedin</a></li>
            <li><a target="_blank" href="https://github.com/MuhammedT04"></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
