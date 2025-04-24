import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useUpcomingCampaigns from "../../hooks/useUpcomingCampaigns";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export interface Campaign {
    _id: string;
    photo: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    division: string;
    district: string;
    subDistrict: string;
    volunteer: []
    donationAmount: []
}
const ManageCampaign: React.FC = () => {
    const axiosPublic = useAxiosPublic();

    const [allCampaigns, refetch] = useUpcomingCampaigns();
    console.log(allCampaigns);



    const hendelCampaignDelete = (id: string) => {

        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/campaigndelete/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if(res.data.message){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });



    }

    return (
        <div className="bg-white p-5 border rounded-lg ">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Manage Campaign</h2>
                <Link to="/dashboard/createCampaign" className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">New Campaign</Link>
            </div>
            <div className="pt-5">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className="bg-slate-300">
                            <tr>
                                <th>Campign Name</th>
                                <th>Date</th>
                                <th>Volunteer</th>
                                <th>Donation</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allCampaigns.map((campaign: Campaign) => (
                                    <tr>
                                        <td className="text-lg font-semibold">
                                            {campaign?.title}
                                        </td>
                                        <td>
                                            {campaign?.startDate}
                                        </td>
                                        <td>
                                            {campaign?.volunteer?.length}
                                        </td>
                                        <td>
                                            {campaign?.donationAmount?.length}
                                        </td>
                                        <td>
                                            <button onClick={() => hendelCampaignDelete(campaign._id)} className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white"><RiDeleteBin6Line className="text-xl" /> Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCampaign;