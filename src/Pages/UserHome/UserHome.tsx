import { BiSolidDonateBlood } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa6";
import { TbCamper } from "react-icons/tb";

const UserHome: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* <div className="flex items-center bg-white p-5 gap-6 rounded-lg border">
                    <div className=" p-4 bg-purple-100 rounded-full">
                        <FaUsers className="text-3xl" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-purple-500">1200</h2>
                        <p className="text-lg">Total Donar</p>
                    </div>
                </div> */}
                <div className="flex items-center bg-white p-5 gap-6 rounded-lg border">
                    <div className=" p-4 bg-red-100 rounded-full">
                        <BiSolidDonateBlood className="text-3xl text-red-600" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-red-500">05 <span className="text-base font-normal">Bag</span></h2>
                        <p className="text-lg">Your Donated</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-5 gap-6 rounded-lg border">
                    <div className=" p-4 bg-sky-100 rounded-full">
                        <TbCamper className="text-3xl" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-sky-500">00</h2>
                        <p className="text-lg">Contribute Campaign </p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-5 gap-6 rounded-lg border">
                    <div className=" p-4 bg-blue-100 rounded-full">
                        <FaDonate className="text-3xl" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-blue-600">$00</h2>
                        <p className="text-lg">Donation</p>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                <div className=" bg-white p-5 border rounded-lg ">
                    <h1 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Who resived blood</h1>
                    <div className=" pt-4">
                        <div className="overflow-x-auto">
                            <table className="table static">
                                {/* head */}
                                <thead className=" bg-slate-300 ">
                                    <tr>
                                        <th>patient Name</th>
                                        <th>Dictrict</th>
                                        <th>Blood</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}

                                    <tr>
                                        <td className="text-lg font-semibold">
                                            Mr. Rahim
                                        </td>
                                        <td>
                                            Rajshahi
                                        </td>
                                        <td>
                                            2 bag
                                        </td>
                                        <td>
                                            12-2-2024
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-lg font-semibold">
                                            Mr. Boni
                                        </td>
                                        <td>
                                            Khulna
                                        </td>
                                        <td>
                                            1 bag
                                        </td>
                                        <td>
                                            12-8-2023
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <div className="h-fit md:w-2/5 bg-white p-5 border rounded-lg">
                    <h2>User Profile</h2>
                </div> */}
            </div>
        </div>
    );
};

export default UserHome;