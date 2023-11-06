import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";

const Services = () => {
  const { data, isLoading } = useServices();

  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-6">
        Our Popular Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.slice(0, 4).map((singleData) => (
          <ServiceCard
            key={singleData._id}
            singleData={singleData}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center mt-7 pb-7">
        <Link to="/allServices">
          <button className="bg-cyan-400 p-2 rounded-lg">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;