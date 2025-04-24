import { FaHeartPulse } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { HiBuildingOffice, HiMiniUserGroup } from "react-icons/hi2";
import Container from "../Container/Container";

const Statistics = () => {
  return (
    <div className="relative bg-no-repeat bg-cover bg-center" 
    style={{ backgroundImage: `url(https://i.ibb.co/9ssSgHH/stastics-bg.jpg)` }}>
      <div className="bg-black bg-opacity-70">
        <Container>
          <h3 className="font-bold text-center text-white py-5 text-3xl">
            Statistics
          </h3>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-0 text-white">
              <div className="flex flex-col justify-center items-center  py-10 rounded-xl gap-3">
                <FaHeartPulse className="text-4xl"></FaHeartPulse>
                <h5 className="text-[#ea062c] text-4xl font-semibold">75</h5>
                <h6 className="font-bold text-xl">Success Smile</h6>
              </div>
              <div className="flex flex-col justify-center items-center  py-10 rounded-xl gap-3">
                <FaStethoscope className="text-4xl"></FaStethoscope>
                <h5 className="text-[#ea062c] text-4xl font-semibold">40</h5>
                <h6 className="font-bold text-xl">Happy Donors</h6>
              </div>
              <div className="flex flex-col justify-center items-center  py-10 rounded-xl gap-3">
                <HiMiniUserGroup className="text-4xl"></HiMiniUserGroup>
                <h5 className="text-[#ea062c] text-4xl font-semibold">80</h5>
                <h6 className="font-bold text-xl">Happy Recipient</h6>
              </div>
              <div className="flex flex-col justify-center items-center  py-10 rounded-xl gap-3">
                <HiBuildingOffice className="text-4xl"></HiBuildingOffice>
                <h5 className="text-[#ea062c] text-4xl font-semibold">10</h5>
                <h6 className="font-bold text-xl">Total Awards</h6>
              </div>
            </div>
          </div>
        </Container>

      </div>
    </div>
  );
};

export default Statistics;