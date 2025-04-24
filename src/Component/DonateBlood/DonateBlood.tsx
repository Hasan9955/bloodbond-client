import React, { useState } from "react"; 
import DonateBloodModal from "../DonateBloodModal/DonateBloodModal";

export interface donateBloodProps {
    data: {
        _id: string,
        bloodGroup: string,
        patientName: string,
        bloodBag: string,
        time: string,
        location: string,
        phone: string
    }
}



const DonateBlood: React.FC<donateBloodProps> = ({ data }) => {

    const [isModalOpen, setIsModalOpen] = useState(false); 


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

 

    return (

        <div className="bg-white p-6 rounded-md border border-gray-300 shadow-md"
        >
            <div className="text-center text-xl font-bold text-[#ea062b] mb-4">
                {data.bloodGroup} BLOOD REQUIRED
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                    <div className="font-bold">Patient Name</div>
                    <div className="text-left pl-2">{data.patientName}</div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold">Blood Group</div>
                    <div className="text-left pl-2">{data.bloodGroup}</div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold">Need No. Of Bags</div>
                    <div className="pl-2">{data.bloodBag} Bag</div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold">Donation Date</div>
                    <div className="pl-2">{data.time}</div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold">Location</div>
                    <div className="text-left pl-2">{data.location}</div>
                </div>
                <div className="flex items-center">
                    <div className="font-bold">Phone Number</div>
                    <div className="text-left pl-2">{data.phone}</div>
                </div>
            </div>


            <div className="text-center mt-6">
                <button onClick={openModal} className="btn btnStyle">
                    Donate Blood
                </button>
                {isModalOpen && (
                    <DonateBloodModal
                        singleData={data}
                        closeModal={closeModal}
                    ></DonateBloodModal>)}
            </div>


        </div>
    );
};

export default DonateBlood;