import Banner from "../../Component/Banner/Banner";
import RequestBlood from "../../Component/RequestBlood/RequestBlood";
import Statistics from "../../Component/Statistics/Statistics";
import WhyDonateBlood from "../../Component/WhyDonateBlood/WhyDonateBlood";
import WorldDonorDay from "../../Component/WorldDonorDay/WorldDonorDay";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <WhyDonateBlood></WhyDonateBlood>
      <RequestBlood></RequestBlood>
      <WorldDonorDay></WorldDonorDay>
      <Statistics></Statistics>
      <Contact></Contact>
    </div>
  );
};

export default Home;
