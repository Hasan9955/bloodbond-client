import { MdOutlineMail } from "react-icons/md";


interface data {
  name: string;
  email: string;
  photo: string;
  donor: {
    phone: string;
    district: string;
    bloodGroup: string;
    upazila: string;
    address: string;
  };
}

interface DonorCardProps {
  data: data;
}

const DonorCard: React.FC<DonorCardProps> = ({ data }) => {
  const { name, donor, photo, email } = data;
  const handleMail = () => {
    const mail = `mailto:${email}`;
    window.location.href = mail;
  };

 
  return (
    <div className="flex flex-col bg-white text-black rounded-xl font-sans font-medium">
      <div className="flex-grow shadow-2xl ">
        <figure>
          <img
            className="w-32 h-32 rounded-full mt-4 mx-auto"
            src={photo}
            alt="Donor"
          />
        </figure>
        <div className="card-body text-sm font-normal">
          <h2 className="text-lg font-semibold">Name: {name}</h2>
          <p>Blood Group: {donor.bloodGroup}</p>
          <p>Phone: {donor.phone}</p>
          <p>Email: {email}</p>
          <p>District: {donor.district}</p>
          <p>Upazila: {donor.upazila}</p>

          <div className="mt-2 card-actions justify-end">
            <button
              onClick={handleMail}
              className="btn bg-[#ea062b] text-white"
            >
              <MdOutlineMail className="text-xl" /> Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorCard;
