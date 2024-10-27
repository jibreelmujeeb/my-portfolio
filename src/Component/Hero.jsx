import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";
import img from "../../src/assets/logo.png";

const Hero = () => {
  return (
    <div className="lg:flex mt-5 justify-around">
      <div className="lg:flex">
        <div data-aos="fade-right">
          <h1 className="lg:ms-32 font-bold mt-28 lg:mt-36 ms-10 text-green-950 lg:text-7xl text-5xl sm:mt-5">
            <span className="text-green-950">Hello!, 👋</span> I'm <br />
            <span className="text-lime-700">JIBREEL MUJEEB</span>
          </h1>
          <div className="lg:ms-32 ms-10 mt-5 text-green-950 lg:text-5xl text-2xl">
            <h2 className="">
              AN EXPERT IN WEB DEVELOPMENT <br /> AND DATA ANALYSIS <br />
              <TypeAnimation
                sequence={[
                  "Mern Stack Development",
                  500,
                  "Python Development",
                  500,

                  "Powerbi",
                  500,
                  "Excel",
                  500,
                  "SQL",
                  500,
                  "Spss",
                  500
                ]}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </h2>
          </div>
        </div>
        <div className="mt-20 lg:mt-24 mx-5 md:mx-auto">
          <img
            src={img}
            alt=""
            className=" mt-10 me-10 w-[400px] rounded-ss-[40px] rounded-ee-[40px] rounded-se-md rounded-es-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
