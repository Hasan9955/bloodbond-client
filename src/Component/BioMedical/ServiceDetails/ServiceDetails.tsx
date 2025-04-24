import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  return <div>This is service details page. and the id is {id}</div>;
};

export default ServiceDetails;
