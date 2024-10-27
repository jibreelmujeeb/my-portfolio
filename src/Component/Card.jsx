import img1 from "../../src/assets/data analysis.jpeg"
import img2 from "../../src/assets/www.png"
import img3 from "../../src/assets/python.png"
import img4 from "../../src/assets/frontend.png"
const Card = () => {
  return (
    <div data-aos="flip-left">
      <div className="grid lg:grid-cols-4 gap-5 my-2 lg:ms-20 mx-10  lg:me-20">
        <div id="card" className="bg-gray-600 shadow p-2 pb-5 mt-20 rounded-lg">
          <img className="mx-auto mt-10" src={img2} alt="" width={50} />
          <p className="text-center mt-10 font-bold text-white text-2xl">
          Frontend Developer
          </p>
        </div>
        <div id="card" className="bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg">
          <img className=" mx-auto mt-10" src={img4} alt="" width={50} />
          <p className="text-center mt-10 font-bold text-white text-2xl">
          Backend Developer
          </p>
        </div>
        <div id="card" className="bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg">
          <img className="mx-auto mt-10" src={img3} alt="" width={50} />
          <p className="text-center mt-6 font-bold text-white text-2xl">
            Python Developer
          </p>
        </div>
        <div id="card" className="bg-gray-600 shadow lg:mt-20 pb-5 rounded-lg">
          <img className="mx-auto mt-10 rounded" src={img1} alt="" width={50} />
          <p className="text-center mt-10  font-bold text-white text-2xl">
           Data Analyst
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card