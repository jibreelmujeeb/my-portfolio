import { useEffect, useState } from "react";
import img from "../../src/assets/team.png";
import Aos from "aos";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const get = async () => {
    if (fullName === "" || email === "" || organization === "" || message === "") {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill all the fields",
      });
    } else {
      try {
        await axios.post("http://localhost:5000/send-email", {
          fullName,
          email,
          organization,
          message,
        });

        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Messaged sent successfully",
        });

        setFullName("");
        setEmail("");
        setOrganization("");
        setMessage("");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send the message. Please try again later.",
        });
      }
    }
  };

  return (
    <div data-aos="flip-up" id="Contact" className="bg-green-950 lg:flex">
      <div className="grid lg:grid-cols-2">
        <div className="mt-10 lg:ms-28 ms-8">
          <div className="text-white">CONTACT ME</div>
          <div className="my-2 w-80">
            <label className="text-white" htmlFor="fullName">Full name</label>
            <input
              className="border w-full rounded"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              name="fullName"
            />
          </div>
          <div className="my-2 w-80">
            <label className="text-white" htmlFor="email">Email</label>
            <input
              className="w-full rounded"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
          </div>
          <div className="my-2 w-80">
            <label className="text-white" htmlFor="organization">Organization</label>
            <input
              className="w-full rounded"
              type="text"
              onChange={(e) => setOrganization(e.target.value)}
              value={organization}
              name="organization"
            />
          </div>
          <div className="my-2 w-80">
            <label className="text-white" htmlFor="message">Message</label>
            <textarea
              className="w-full rounded"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button
            onClick={get}
            className="text-white w-80 rounded font-bold bg-red-500 p-2"
          >
            Send Message
          </button>
        </div>
        <div>
          <img src={img} alt="Team" width={700} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
