/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import Card from "./Card";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
export default function Donate() {
  const [campaigns, setCampaigns] = useState([]);
  const [organization, setOrganization] = useState([]);

  console.log({ campaigns });
  console.log({ organization });
  useEffect(() => {
    axios
      .get("https://bloodbond-server.vercel.app/getallcampaigns")
      .then((res) => {
        setCampaigns(res.data.campaigns);

        const organization = res.data.campaigns.filter(
          (campaign: any) => campaign._id === "68099def19d93a8b694d4d6e"
        );
        setOrganization(organization);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (campaigns.length === 0) {
    return (
      <>
        <div className="w-full h-screen"></div>
      </>
    );
  }

  return (
    <>
      {/* TODO: update the design of donate us page */}
      <h3 className="text-center text-4xl font-bold my-[5rem]">
        Support Us And Make a Difference Today!
      </h3>

      <div className="px-[2rem]">
        <Tabs defaultIndex={0} className={""}>
          <TabList className={"font-bold border-b-2"}>
            <Tab>Donate for campaign</Tab>
            <Tab>Donate for organization</Tab>
          </TabList>
          <TabPanel className={"mt-4"}>
            <div className="flex justify-center gap-6 flex-wrap">
              {campaigns.map((campaign, index) => {
                // @ts-expect-error 
                if (campaign._id !== "68099def19d93a8b694d4d6e") {
                  return <Card key={index} campaign={campaign} />;
                }
              })}
            </div>
          </TabPanel>
          <TabPanel>
            {organization.length === 1 && (
              <div className="w-full h-screen flex justify-center ">
                <Card campaign={organization[0]} />
              </div>
            )}

            {organization.length === 0 && (
              <div className="w-full h-screen flex justify-center items-center text-3xl font-bold">
                <p>No organization found</p>
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

{
  /* overlay div */
}
//  <div className="py-32">
//  <div
//    style={{ boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.28)" }}
//    className="card-body rounded-lg w-[95%] sm:w-3/4 2xl:w-3/5 mx-auto bg-white py-16"
//  >
//    <h3 className="text-center text-4xl font-bold mb-8">
//      Support Us And Make a Difference Today!
//    </h3>

//    <Modal />
//    <ModalOragnization />
//  </div>
// </div>
