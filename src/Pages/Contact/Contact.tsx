/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, FormEvent } from "react";
import useAuth from "../../hooks/useAuth";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import contactImg from "../../assets/email.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";
import Container from "../../Component/Container/Container";
import { SiMinutemailer } from "react-icons/si";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const auth = useAuth();

  if (!auth) {
    return null;
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_0lmy5dx",
          "template_q1qkcin",
          form.current,
          "wpNh2IsyaGvPczacL"
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your message has been sent successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "This is an error. Please try again.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
    }
  };

  return (
    <div className="py-8">
      <Container>
        <h3 className="font-bold text-center py-5 text-3xl mb-5">Contact Us</h3>
        <div className="md:flex justify-evenly items-center px-8">
          <div className="">
            <div className="">
              <img className="md:w-96 mb-10" src={contactImg} alt="" />


              <div className="md:flex justify-between items-center space-y-2 space-x-2 gap-5">
                <div className="flex items-center gap-3">
                  <div className="p-5 bg-[#ea062c] inline-block rounded-full">
                    <FaPhoneAlt className="text-3xl  text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#ea062c] font-bold">PHONE NUMBER</p>
                    <a href="tel:+6221.2002.2012">+6221.2002.2012</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-5 bg-[#ea062c] inline-block rounded-full">
                    <MdOutlineSchedule className="text-3xl  text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#ea062c] font-bold">SCHEDULE</p>
                    <a href="tel:+6221.2002.2012">10:00 - 16:00 daily</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-10 shadow-2xl rounded-2xl">
            <h1 className="text-2xl font-semibold text-center pb-6">
              Send us a message
            </h1>
            <form ref={form} onSubmit={sendEmail} className="">
              <div className="space-y-5">
                <input
                  name="name"
                  required
                  defaultValue={auth?.user?.displayName || ""}
                  type="text"
                  placeholder="👤 Your Name"
                  className="input  border border-gray-400 w-full rounded-full bg-base-200 shadow-xl"
                />
                <input
                  required
                  defaultValue={auth?.user?.email || ""}
                  type="email"
                  name="email"
                  placeholder="✉ Your Email"
                  className="input  border border-gray-400 w-full rounded-full bg-base-200 shadow-xl"
                />
              </div>
              <textarea
                name="message"
                required
                className="textarea-lg rounded-3xl border border-gray-400 w-full bg-base-200 my-5 shadow-xl"
                placeholder="Message"
              ></textarea>
              <div className="absolute inset-x-1/3 flex justify-center">
                <button className="p-4 bg-[#ea062c] text-white rounded-full hover:bg-[#ea062cd0]">
                  <SiMinutemailer className="text-3xl" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
