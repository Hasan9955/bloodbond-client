// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../useAxiosPublic";
// import { useState } from "react";
// import useAuth from "../useAuth";
// import axios from "axios";


// const useIsDonor = () => {

//     // const [isDonor, setIsDonor] = useState(false);
//     // const auth = useAuth();

//     // const { user } = auth;

//     // const { isLoading } = useQuery({
//     //     queryKey: ['getUsers'],
//     //     queryFn: async () => {
//     //         const res = await axios.post('https://bloodbond-server.vercel.app//getuser', user?.email);
//     //         console.log(res.data.donor)
//     //         if (res.data.donor) {
//     //             setIsDonor(true)
//     //         }

//     //     }
//     // })


//     if (isLoading) {
//         return <div className="container mx-auto py-8">
//             <div className="flex justify-center items-center">
//                 <span className="loading loading-spinner loading-lg text-white"></span>
//             </div>
//         </div>
//     }

//     return [isDonor]
// };

// export default useIsDonor;