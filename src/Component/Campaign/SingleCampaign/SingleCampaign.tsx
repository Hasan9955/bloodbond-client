import { useLocation, useNavigate } from "react-router-dom";
import { Campaign } from "../../../Pages/Campaign/UpcomingCampaigns/UpcomingCampaigns";

interface SingleCampaignCardProps {
  campaign: Campaign;
}

const SingleCampaign: React.FC<SingleCampaignCardProps> = ({ campaign }) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const { _id, photo, title, address, description, startDate } = campaign;

  const wordsPerDescription = 18;
  const slicedDescription = description
    .split(" ")
    .slice(0, wordsPerDescription)
    .join(" ");

  const [, month, date] = startDate.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleNavigate = () => {
    navigate(`/campaign/${_id}`);
  };

  return (
    <>
      <div
        onClick={handleNavigate}
        className="bg-slate-100 p-4 xl:p-5 rounded-xl duration-500 border-b-4 border-[#F1F5F9]  hover:border-[#ea062b] flex flex-col items-start cursor-pointer"
      >
        <div className="space-y-2 flex-grow">
          <div className="relative">
            <img
              className={`h-[210px] sm:h-[300px] md:h-[210px] 2xl:h-[300px] object-cover w-full ${
                pathname.match(/^\/campaign\/\S+$/) && `xl:h-[250px]`
              }`}
              src={photo}
              alt=""
            />
            <div className="absolute top-0 left-0  bg-[#ea062b] py-3 px-4 text-white">
              <h4 className="text-lg font-bold">{date}</h4>
              <h5>{month && months[parseInt(month) - 1]}</h5>
            </div>
          </div>
          <address>{address}</address>
          <h2 className="text-2xl font-bold text-[#ea062b]">{title}</h2>
          <p>
            {description.length > wordsPerDescription
              ? slicedDescription
              : description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleCampaign;
