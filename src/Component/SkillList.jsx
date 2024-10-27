import { SiExpress } from "react-icons/si";
import img from "../../src/assets/spss.png";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { BsBootstrap, BsGit } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";


export const SkillList = [
  {
    icon: <BsGit className="ms-2" />,
    title: "Git & Github",
  },
  {
    icon: (
      <i>
        <BiLogoTailwindCss size={34} className="ms-2" />
      </i>
    ),
    title: "Tailwind Css",
  },
  {
    icon: (
      <i>
        <SiExpress size={34} className="ms-1" />
      </i>
    ),
    title: "Express",
  },
  {
    icon: (
      <i>
        <FaNodeJs size={33} />
      </i>
    ),
    title: "Node JS",
  },
  {
    icon: (
      <i>
        <FaReact />
      </i>
    ),
    title: "React Js",
  },
  {
    icon: (
      <i>
        <BiLogoMongodb className="ms-4" />
      </i>
    ),
    title: "Mongo DB",
  },
  {
    icon: (
      <i>
        <IoLogoHtml5 />
      </i>
    ),
    title: "HTML 5",
  },

  {
    icon: (
      <i>
        <IoLogoCss3 />
      </i>
    ),
    title: "CSS 3",
  },

  {
    icon: (
      <i>
        <TbBrandJavascript />
      </i>
    ),
    title: "JavaScript",
  },

  {
    icon: (
      <i>
        <BsBootstrap className="ms-1" />
      </i>
    ),
    title: "Bootstrap",
  },
  {
    icon: (
      <i>
        <FaRegFileExcel className="ms-1" />
      </i>
    ),
    title: "Excel",
  },
  {
    icon: (
      <i>
        <SiPowerbi className="ms-1" />
      </i>
    ),
    title: "Power BI",
  },
  {
    icon: (
      <i>
        <TbBrandMysql className="ms-1" />
      </i>
    ),
    title: "MySQL",
  },
  {
    icon: (
      <i>
        <FaPython className="ms-1" />
      </i>
    ),
    title: "Python",
  },
  {
    icon: <img src={img} alt="SPSS" width={40} />,
    title: "SPSS",
  }
];
