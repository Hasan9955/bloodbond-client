import { Link } from "react-router-dom";
import ServiceBookModal from "../ServiceBookModal/ServiceBookModal";
import { useState } from "react";

export interface Service {
  _id: string;
  testName: string;
  testDescription: string;
  testPrice: string;
  imageUrl: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!service) {
    return;
  }

  const { _id, imageUrl, testName, testDescription, testPrice } = service;

  return (
    <div
      style={{ boxShadow: "0px 4px 10px 5px rgba(167,167,167,0.3)" }}
      className="rounded-lg flex flex-col items-start bg-[#F1F5F9]"
    >
      <img
        className="w-full h-[200px] xl:h-[220px] 2xl:h-[280px] rounded-tl-lg rounded-tr-lg"
        src={imageUrl}
        alt={`Image for ${testName}`}
      />
      <div className="p-5 flex-grow">
        <h4 className="text-2xl font-bold">{testName}</h4>
        <h5 className="font-medium text-xl my-3">{testDescription}</h5>
        <h6 className="font-semibold">
          Test Price:{" "}
          <span className="font-bold text-[#EA062B]"> {testPrice}</span>
        </h6>
      </div>
      <Link
        to={`/services/${_id}`}
        className="mb-5 mx-5 btn btn-outline bg-[#EA062B] text-white hidden"
      >
        See Details
      </Link>
      <button
        onClick={openModal}
        className="mb-5 mx-5 btn btnStyle"
      >
        Book Now
      </button>
      {isModalOpen && (
        <ServiceBookModal
          service={service}
          closeModal={closeModal}
        ></ServiceBookModal>
      )}
    </div>
  );
};

export default ServiceCard;
