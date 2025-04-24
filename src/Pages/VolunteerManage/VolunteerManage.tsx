import useUpcomingCampaigns from "../../hooks/useUpcomingCampaigns";

interface Campaign {
    _id: string;
    photo: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    address: string;
    volunteer: [
      {
        name: string;
        phone: string;
        email: string;
        address: string;
      }
    ];
  }
  
const VolunteerManage = () => {
  const [allCampaigns] = useUpcomingCampaigns();

  return (
    <div className="bg-white p-5 border rounded-lg">
      <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">
        Volunteer Manage
      </h2>
      <div className="pt-5">
        <div className="overflow-x-auto">
          <table className="table static">
            {/* head */}
            <thead className="bg-slate-300">
              <tr>
                <th>Campaign Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {allCampaigns.map((data: Campaign) =>
                data.volunteer.length > 0 ? (
                  <tr key={data._id}>
                    <td colSpan={data.volunteer.length} className="text-lg font-semibold">
                      {data.title}
                    </td>
                    {data.volunteer.map((item) => (
                      <>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                      </>
                    ))}
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VolunteerManage;
