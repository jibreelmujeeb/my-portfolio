import { AiFillGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import {BiLogoWhatsapp} from "react-icons/bi";
import { GrLinkedin } from "react-icons/gr";



const ContactButtons = () => { 
  return (
    <div>
      {" "}
      <div className="lg:mt-32  space-y-5 left-5 bottom-5  bg-gray-200 p-3 rounded fixed z-[1000]">
        <div>
          {" "}
          <a href="https://github.com/jibreelmujeeb">
            <AiFillGithub className="text-dark " size={36} />
          </a>
        </div>

        <div>
          {" "}
          <a href="https://wa.me/2347085099216">
            <BiLogoWhatsapp className="text-dark " size={36} />
          </a>
        </div>
        <div>
          <a href="https://x.com/@JibreelMuj25619">
            <RiTwitterXLine className=" text-dark" size={36} />
          </a>
        </div>
        <div>
          
          <a href="https://www.facebook.com/mujeeb itanolu abu umair">
            <FaFacebookMessenger className="text-dark" size={36} />
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/jibreel-mujeeeb-314b8b1a2/">
            <GrLinkedin className="text-dark" size={36} />
          </a>
          </div>
        
      </div>
    </div>
  );
};

export default ContactButtons;
