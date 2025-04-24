import { Link, NavLink } from "react-router-dom";
import bg from "../../assets/b.jpg";
import doctor from "../../assets/doctor.jpg";
import call from "../../assets/call.jpg";

const AboutBanner = () => {
  return (
    <div className="">
      {/* ========== about banner ========== */}
      <div
        className="relative py-10  md:py-28 bg-no-repeat bg-center	bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute top-0 left-0 h-full w-full  bg-black bg-opacity-60 "></div>
        <div className="relative space-y-2">
          <h2 className="text-3xl md:text-6xl font-semibold text-center z-50 text-white">
            About Us
          </h2>
          <p className="text-white font-medium text-center">
            {" "}
            <Link to={"/"} className="hover:text-[#ea062b] duration-500">
              Home{" "}
            </Link>{" "}
            // <span className="text-[#ea062b]">About Us</span>
          </p>
        </div>
      </div>
      {/* ============= Who We Are =========== */}
      <div className="py-14 max-w-[1200px] mx-auto">
        <div className="md:flex  justify-between items-center ">
          <div className="max-w-[550px] space-y-4 mx-4 md:mx-0">
            <h3 className="text-4xl font-bold">Who We Are</h3>
            <h5 className="text-xl font-semibold">
              We are here not for income, but for outcome
            </h5>
            <p className="text-sm">
              Which is the same as saying through shrinking from toil and pain.
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when untrammelled and when nothing prevents
            </p>
            <button className="px-4 py-2 bg-[#ea062b] font-medium text-white">
              Explore Now
            </button>
          </div>
          <div className="mx-4 md:mx-0 pt-5">
            <img className="" src={doctor} alt="" />
          </div>
        </div>
      </div>
      {/* =============== donate ============= */}
      <div
        className="relative py-14 bg-no-repeat bg-center	bg-cover"
        style={{ backgroundImage: `url(${call})` }}
      >
        <div className="absolute z-1 top-0 left-0 h-full w-full  bg-black bg-opacity-80 "></div>
        <div className="relative border-8 z-40 border-[#ea062b] max-w-[1200px] md:mx-auto mx-4">
          <div className=""></div>
          <div className="text-center text-white space-y-3 py-8">
            <h5 className="font-medium">START DONATING</h5>
            <h2 className="text-4xl font-semibold">Call Now: 333 555 9090</h2>
            <p className="space-x-6 text-sm">
              <span>New York - 1075 Firs Avenue</span>
              <span>Donate@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      {/* ============== contuct ========== */}

      <div className="bg-[#ea062b]">
        <div className="md:flex justify-between items-center gap-6 max-w-[1200px] md:mx-auto mx-4 py-12 ">
          <div className="text-white space-y-3">
            <h2 className="text-4xl font-semibold">
              Let's change the world, Join us now!
            </h2>
            <p className="">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but occasionally
              circumstances occur in which toil and pain can procure reat
              pleasure.
            </p>
          </div>
          <div className="md:w-2/12">
            <NavLink to="/login">
              <button className=" px-4 py-2 bg-white font-medium">
                Explore Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
