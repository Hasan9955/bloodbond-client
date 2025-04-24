import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";


const Profile: React.FC = () => {

    const axiosPublic = useAxiosPublic();
    const auth = useAuth();
    
    if (!auth) {
        return;
      } 
    const { user} = auth;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useQuery({
        queryKey: ['user', auth],
        queryFn: async () => {
            const res = await axiosPublic.post('/getuser', { email: user?.email });
            return res.data;
        }
    })

  const User = data?.user;
  // console.log(User);

  return (
    <div className="bg-white p-5 border rounded-lg">
      <div className="max-w-3xl mx-auto py-6">
        {!User?.donor ? (
          <div className="  md:flex items-center gap-10">
            <img
              className="rounded-full max-w-40 w-full"
              src={User?.photo}
              alt=""
            />
            <div className="space-y-3">
              <h4 className="text-2xl font-semibold">{User?.name}</h4>
              <p className="font-semibold text-black opacity-80 -z-10">
                {User?.email}
              </p>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className="  md:flex items-center gap-10">
              <img
                className="rounded-full max-w-40 w-full"
                src={User?.photo}
                alt=""
              />
              <div className="space-y-3">
                <h4 className="text-2xl font-semibold">{User?.name}</h4>
                <p className="font-semibold text-black opacity-80 -z-10">
                  {User?.email}
                </p>
              </div>
            </div>
            <div className="md:flex  pt-5 text-base">
              <div className="md:w-1/2 space-y-3">
                <div className="">
                  <p className="font-semibold text-gray-500">Blood Group:</p>
                  <span className="font-semibold">
                    {User?.donor?.bloodGroup}
                  </span>
                </div>
                <div className="">
                  <p className="font-semibold text-gray-500">
                    Last Donation Date:{" "}
                  </p>
                  <span className="font-semibold">
                    {User?.donor?.lastDonationDate.slice(0, 10)}
                  </span>
                </div>
                <div className="">
                  <p className="font-semibold text-gray-500">Phone: </p>
                  <span className="font-semibold">{User?.donor?.phone}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="">
                  <p className="font-semibold text-gray-500">District: </p>
                  <span className="font-semibold">{User?.donor?.district}</span>
                </div>
                <div className="">
                  <p className="font-semibold text-gray-500">Upazila: </p>
                  <span className="font-semibold">{User?.donor?.upazila}</span>
                </div>
                <div className="">
                  <p className="font-semibold text-gray-500">Address: </p>
                  <span className="font-semibold">{User?.donor?.address}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
