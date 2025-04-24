import { Link } from "react-router-dom";
// import video from "../../assets/videobanner.mp4"
import video1 from "../../assets/depositphotos_blood.mp4";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <div className="relative">
      <video
        src={video1}
        autoPlay
        loop
        muted
        className="w-full md:h-[95vh] h-[60vh] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#04030993] from-40% via-transparent bg-opacity-60 to-transparent">
        <div className="flex items-center h-full px-6">
          <Container>
            <div className="space-y-1 md:space-y-5 text-white">
              <div className="mb-5 text-xl md:text-3xl lg:text-5xl font-bold ">
                <h1>Be a Lifesaver Donate</h1>
                <h1> Blood Today</h1>
              </div>
              <p className="mb-5 text-sm font-medium max-w-2xl">
                Unite in Compassion, Join the Blood Heroes' Movement —
                Transforming Every Donation into a Ray of Hope, igniting lives
                with each drop given. A lifeline for those in crisis, a legacy
                of kindness, and a beacon of life for those in need, uniting
                hearts for a noble cause.
              </p>
              <div className="space-x-5">

                <Link to="/donorRegistration">
                  <button className="btn rounded-none secondary_bg text-white border-[#ea062b] hover:text-[#ea062b] hover:border-[#ea062b] duration-300">
                    Register as Donor
                  </button>
                </Link>

                <Link to="/donorSearch">
                  <button className="btn rounded-none primary_bg primary_color border-[#ea062b] hover:text-white hover:border-[#ea062b] hover:bg-[#ea062b] duration-300">
                    Search Donor
                  </button>
                </Link>

              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
