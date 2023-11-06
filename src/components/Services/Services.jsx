import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch("http://localhost:5000/services").then((res) => res.json()),
  });

  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-6">
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
        <button className="bg-cyan-400 p-2 rounded-lg">Show All</button>
      </div>
    </div>
  );
};

export default Services;
