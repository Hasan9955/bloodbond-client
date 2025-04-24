import { Link, useParams } from "react-router-dom";
import { Campaign } from "../Campaign/UpcomingCampaigns/UpcomingCampaigns";
import { useState } from "react";
import VolunteerRegisterModal from "../../Component/Campaign/VolunteerRegisterModal/VolunteerRegisterModal";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SingleCampaign from "../../Component/Campaign/SingleCampaign/SingleCampaign";
import ModalForPayment from "../Donate/ModalForPayment";

const CampaignDetails: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { data: specificCampaignAndOthers = {}, isLoading } = useQuery({
    queryKey: ["specificCampaignAndOthers", id],
    queryFn: async () => {
      const res = await axiosPublic.post("/getspecificcampaignandothers", {
        campaginId: id,
      });

      return res.data;
    },
  });

  if (!specificCampaignAndOthers) {
    return;
  }

  const specificCampaign = specificCampaignAndOthers.campaign;
  const otherCampaigns = specificCampaignAndOthers.others;

  const { _id, photo, title, address, description, startDate } =
    specificCampaign ?? {};

  const [year, month, date] = startDate?.split("-") ?? [];

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

  const openDonationModal = () => {
    const modal = document.getElementById(
      "my_modal_5"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="container mx-auto py-40">
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-white"></span>
          </div>
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 py-14">
          <div className="lg:col-span-3 px-5 lg:px-0 lg:pl-5">
            {specificCampaign && (
              <>
                <div className="bg-[#F1F5F9] shadow-lg rounded-xl">
                  <figure className="relative">
                    <img
                      className="w-full h-auto mx-auto rounded-tl-xl rounded-tr-xl"
                      src={photo}
                      alt="campaign"
                    />
                  </figure>
                  <div className="md:mt-5 mb-10 pb-8">
                    <div className="flex flex-col-reverse md:flex-row justify-between md:items-start">
                      <div className="mt-3 md:mt-0 px-2 md:px-6 xl:px-8">
                        <h2 className="text-2xl font-bold text-[#DC0000]">
                          {title}
                        </h2>
                        <address>{address}</address>
                      </div>
                      <div className="bg-[#DC0000] text-white px-5 md:py-2 xl:mr-6 md:mr-4 flex-shrink-0">
                        <h4 className="text-lg font-bold text-center">
                          {date}-{month && months[parseInt(month) - 1]}-{year}
                        </h4>
                      </div>
                    </div>
                    <p className="px-2 md:px-6 xl:px-8 mt-6 text-lg font-medium mb-5">
                      {description}
                    </p>
                    {/* ------------------- buttons ------------------- */}
                    <div className="flex flex-col md:flex-row gap-5 px-2 md:px-6 xl:px-8">
                      <button onClick={openModal} className="btn btnStyle">
                        Register as Volunteer
                      </button>
                      <div>
                        {isModalOpen && specificCampaign && (
                          <VolunteerRegisterModal
                            campaign={specificCampaign}
                            closeModal={closeModal}
                          ></VolunteerRegisterModal>
                        )}
                      </div>
                      <button
                        onClick={openDonationModal}
                        className="btn btnStyle px-9"
                      >
                        Donate for this Campaign!
                      </button>
                      <ModalForPayment campaignId={_id}></ModalForPayment>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* other campaigns */}
          <div className="lg:col-span-2 px-5 lg:pl-0">
            <h3 className="text-center text-2xl font-bold mb-14 text-white">
              Other Upcoming Campaigns
            </h3>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {otherCampaigns && otherCampaigns.length > 0 ? (
                  otherCampaigns
                    ?.slice(0, 3)
                    .map((campaign: Campaign) => (
                      <SingleCampaign
                        key={campaign._id}
                        campaign={campaign}
                      ></SingleCampaign>
                    ))
                ) : (
                  <h6 className="text-center text-white">
                    No other campaigns are available.
                  </h6>
                )}
              </div>
              {otherCampaigns && otherCampaigns.length > 3 && (
                <Link to="/campaign">
                  <button className="btn btnStyle mt-14 block mx-auto">
                    Show All
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignDetails;
