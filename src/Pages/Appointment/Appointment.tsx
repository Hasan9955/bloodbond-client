import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Test } from "../UserAppointment/UserAppointment";

const Appointment = () => {
    const axiosPublic = useAxiosPublic();



    const { data, refetch } = useQuery({
        queryKey: ['appointment'],
        queryFn: async () => {
            const res = await axiosPublic.get('/gettestbookings');
            return res.data;
        }
    })
    const allTest = data?.data
    console.log(allTest);

    const handelTestStatus = (id : string) => {
        axiosPublic.patch(`/statuschangefortestbooking/${id}`)
        .then(res => {
            console.log(res.data);
            refetch()
        })
    }
    
    return (
        <div className="bg-white p-5 border rounded-lg ">
            <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">All Appointment</h2>
            <div className="pt-4">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className=" bg-slate-300 ">
                            <tr>
                                <th>Name</th>
                                <th>District</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                allTest?.map((test: Test )=> <tr key={test._id}>
                                    <td className="text-lg font-semibold">
                                        {test?.userName}
                                    </td>
                                    <td>
                                        {test?.address}
                                    </td>
                                    <td>
                                        {test?.testName}
                                    </td>
                                    <td>
                                        <p>{test?.date}</p>
                                        <p>{test?.time}</p>
                                    </td>
                                    <td>
                                        {test?.status === "pending" ? <button onClick={() => handelTestStatus(test?._id)} className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">Approve</button>: <span>{test?.status}</span>}
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Appointment;