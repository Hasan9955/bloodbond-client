import campaignBg from "../../../assets/campaign bg.jpg";
import img from "../../../assets/donation img 3.png";

const CampaignBanner = () => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover py-6"
      style={{ backgroundImage: `url("${campaignBg}")` }}
    >
      <div className="absolute top-0 left-0 h-full w-full  bg-black bg-opacity-60 "></div>
      <div className="relative flex justify-evenly items-center">
        <div className="space-y-3 text-white max-w-2xl md:px-4 text-center md:text-left">
          <h5 className="font-medium text-md md:text-lg lg:text-2xl">
            One Donation Can Save Three Lives
          </h5>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ">
            Give <span className="text-[#ea062b]">Blood</span> Save Life
          </h1>
          <p className="text-sm md:text-md lg:text-lg">
            Join us in making a difference! Your blood donation can be the
            lifeline someone desperately needs. Be a hero, donate blood, and
            help us reach our goal.
          </p>
        </div>
        <div className="hidden md:flex">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CampaignBanner;
