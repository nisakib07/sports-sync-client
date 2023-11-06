import ServiceCard from "../../components/ServiceCard/ServiceCard";
import useServices from "../../hooks/useServices";

const AllServices = () => {
  const { data, isLoading } = useServices();

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-6">
        All of our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((singleData) => (
          <ServiceCard
            key={singleData._id}
            singleData={singleData}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
