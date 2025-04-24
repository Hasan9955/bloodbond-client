import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Campaign } from "../../../Pages/Campaign/UpcomingCampaigns/UpcomingCampaigns";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

interface CampaignDetailsProps {
  campaign: Campaign;
  closeModal: () => void;
}

const VolunteerRegisterModal: React.FC<CampaignDetailsProps> = ({
  campaign,
  closeModal,
}) => {
  const auth = useAuth();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const modalBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modalBtnRef.current) {
      modalBtnRef.current.click();
    }
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  if (!auth) {
    return null;
  }

  const { user } = auth;

  if (!auth || !user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  const handleResister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // const campaignName = formData.get("campaignName") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    const volunteerInfo = {
      campaingId: campaign._id,
      name,
      email,
      phone,
      address,
    };

    // send volunteer info to the backend
    axiosPublic.post("/volunteercreate", volunteerInfo).then((res) => {
      if (res.data.message === "Volunteer added successfully") {
        Swal.fire({
          icon: "success",
          title: "Congratulation, Now you are volunteer for this campaign",
        });
        closeModal();
      } else if (res.data.message === "User already added") {
        Swal.fire({
          icon: "success",
          title: "You are already volunteer for this campaign",
        });
        closeModal();
      } else {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong!",
        });
        closeModal();
      }
    });
  };

  console.log("modal rendered");

  return (
    <div>
      <button
        ref={modalBtnRef}
        className="btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full hidden"
        onClick={() => {
          const modal =
            (document.getElementById("my_modal_2") as HTMLDialogElement) ||
            null;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Register as Volunteer
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-5">
            Volunteer Registration
          </h3>
          <form onSubmit={handleResister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Name</span>
              </label>
              <input
                name="campaignName"
                required
                readOnly
                defaultValue={campaign?.title || ""}
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                required
                readOnly
                defaultValue={user?.displayName || ""}
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                defaultValue={user?.email || ""}
                name="email"
                required
                readOnly
                type="email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                required
                name="phone"
                type="text"
                placeholder="+880 18XXXXXXXX"
                className="input input-bordered w-full"
                defaultValue={"+880"}
              />{" "}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                required
                name="address"
                type="text"
                className="input input-bordered w-full"
                placeholder="Your Address"
              />
            </div>
            <button className="w-full mt-5 btn btnStyle">Register</button>
          </form>
          <form method="dialog">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VolunteerRegisterModal;
