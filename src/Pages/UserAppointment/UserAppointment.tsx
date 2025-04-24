import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


export interface Test {
    address: string,
    date: string,
    imageUrl: string,
    phone: string,
    price: string
    status: string,
    testName: string,
    time: string,
    userEmail: string,
    userName: string,
    __v: number,
    _id: string,
}

const UserAppointment: React.FC = () => {

    const axiosPublic = useAxiosPublic();
    const auth = useAuth();

    const { data } = useQuery({
        queryKey: ['userAppointment'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/gettestbookingsofspecificuser/${user?.email}`);
            return res.data;
        }
    })
    if (!auth) {
        return;
    }
    const { user } = auth;
    const userTest = data?.data
    console.log(userTest);

    const handleDeleteTest = (id: string) => {
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
                axiosPublic.delete(`/delete/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.message) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // refetch()
                        }
                    })
            }
        });

    }
    return (
        <div className="bg-white p-5 border rounded-lg ">
            <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">All Medical Test</h2>
            <div className="pt-4">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className=" bg-slate-300 ">
                            <tr>
                                <th>Test Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {userTest?.map((test: Test) => <tr>
                                <td className="text-lg font-semibold">
                                    {test?.testName}
                                </td>
                                <td>
                                    {test?.price}
                                </td>
                                <td>
                                    {test?.status}
                                </td>
                                <td>
                                    <p>{test?.date}</p>
                                    <p>{test?.time}</p>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteTest(test?._id)} className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">Delete</button>
                                </td>
                            </tr>)}



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserAppointment;