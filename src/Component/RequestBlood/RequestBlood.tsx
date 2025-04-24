import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DonateBlood from "../DonateBlood/DonateBlood";
import Container from "../Container/Container";

interface BloodRequest {
  patientName: string;
  bloodGroup: string;
  bloodBag: string;
  time: string;
  location: string;
  phone: string;
  _id: string;
}

const RequestBlood: React.FC = () => {
  const [requests, setRequests] = useState<BloodRequest[]>([]);

  useEffect(() => {
    axios
      .get("https://bloodbond-server.vercel.app//getbloodrequests")
      .then((response) => {
        const currentDate = new Date();
        const filteredRequests = response.data.bloodRequests
          .flat()
          .filter(
            (request: BloodRequest) => new Date(request.time) > currentDate
          )
        const filterBloodBag = filteredRequests.filter((data: BloodRequest) => parseInt(data.bloodBag) > 0).splice(0, 2);
        setRequests(filterBloodBag);
      })
      .catch((error) => {
        console.error("Error fetching blood requests:", error);
      });
  }, []);

  return (
    <div className="bg-gray-200 section-donate-blood py-10">
      <Container>
        <div className="space-y-4 px-4 md:px-0">
          <p className=" text-3xl font-semibold py-6 text-center">
            Donate Your Blood
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:px-10">
            {requests.slice(0, 2).map((bloodGroupRequests, index) => (
              <DonateBlood key={index} data={bloodGroupRequests}></DonateBlood>
            ))}
          </div>
          <div className="pt-5 text-center">
            <Link to="/allrequest">
              <button className="btn btnStyle">All Blood Request</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RequestBlood;
