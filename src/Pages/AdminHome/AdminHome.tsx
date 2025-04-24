import { FaUsers } from "react-icons/fa6";
import { BiSolidDonateBlood } from "react-icons/bi";
import { TbCamper } from "react-icons/tb";
import { FaDonate } from "react-icons/fa";
import TopDonor from "../../Component/TopDonor/TopDonor";
// import AdminProfile from "../../Component/AdminProfile/AdminProfile";
const AdminHome: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-4">
                <div className="flex items-center bg-white p-5 gap-6 rounded-lg border">
                    <div className=" p-4 bg-purple-100 rounded-full">
                        <FaUsers className="text-3xl" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-purple-500">50</h2>
                        <p className="text-lg">Total Donar</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-5 gap-6 rounded-lg border">
                    <div className=" p-4 bg-red-100 rounded-full">
                        <BiSolidDonateBlood className="text-3xl text-red-600" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-red-500">2<span className="text-base font-normal">Bag</span></h2>
                        <p className="text-lg">Donated Blood</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-5 gap-6 rounded-lg border">
                    <div className=" p-4 bg-sky-100 rounded-full">
                        <TbCamper className="text-3xl" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-sky-500">6</h2>
                        <p className="text-lg">Campaign </p>
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
                <TopDonor></TopDonor>
            </div>
        </div>
    );
};

export default AdminHome;