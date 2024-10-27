import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <section id="About" data-aos="fade-up">
      <h1 className="lg:ms-32 ms-10 mt-20 text-green-950  lg:text-3xl text-3xl">
        ABOUT ME
      </h1>
      <p className="lg:ms-32 ms-10 text-green-950  lg:text-5xl text-3xl font-bold">
        Overview
      </p>
      <p className="lg:ms-32 ms-5 text-green-950 sm:mt-5 font-normal">
        I am a dedicated web developer and data analyst who partners with
        clients to create efficient, scalable solutions. Skilled in Python for
        both web and data applications, I bring a strong foundation in
        JavaScript, React, Node.js, Express, and MongoDB. My data expertise
        includes MySQL, SPSS, Power BI, and Excel, helping drive impactful,
        data-driven insights.
      </p>
    </section>
  );
};

export default About;
