// import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useEffect, useState } from "react";

const TopDonor: React.FC = () => {
    interface Donor {
        id: number;
        name: string;
        email: string;
        phone: string;
        address: string;
        district: string;
        upazila: string;
        donor: { address: string, bloodGroup: string, district: string, lastDonationDate: string, phone: string, upazila: string },
        bloodGroup: string;
        photo: string;
      }

      const axiosPublic = useAxiosPublic();

    const { data } = useQuery({
        queryKey: ['topDonors'],
        queryFn: async () => {
            const res = await axiosPublic.get("/getdonars")
            return res.data
        }
      })
    const Donors = data?.donors


    return (
        <div className=" bg-white p-5 border rounded-lg ">
            <h1 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Top Donors</h1>
            <div className=" pt-4">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className="bg-slate-300">
                            <tr>
                                <th>Image</th>
                                <th>District</th>
                                <th>Name</th>
                                <th>Blood Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                Donors?.slice(0,10)?.map((Donor: Donor) =>  <tr key={Donor.id}>
                                    <td>
                                        <div className="avatar static">
                                            <div className="rounded-full w-12 h-12">
                                                <img src={Donor.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{Donor.donor.district}</div>
                                            <div className="text-sm opacity-50">{Donor.donor.upazila}</div>
                                        </div>
                                    </td>
                                    <td>
                                        {Donor.name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{Donor.email}</span>
                                    </td>
                                    <td>{Donor.donor.bloodGroup}</td>
                                    {/* <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th> */}
                                </tr>)
                            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TopDonor;