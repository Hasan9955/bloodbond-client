import CampaignBanner from "./CampaignBanner/CampaignBanner";
import UpcomingCampaigns from "./UpcomingCampaigns/UpcomingCampaigns";

const Campaign = () => {
  return (
    <div className="container mx-auto">
      <CampaignBanner></CampaignBanner>
      <UpcomingCampaigns></UpcomingCampaigns>
    </div>
  );
};

export default Campaign;
