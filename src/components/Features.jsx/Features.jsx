import { useQuery } from "@tanstack/react-query";
import { Dna } from "react-loader-spinner";
import FeatureCard from "../FeatureCard/FeatureCard";

const Features = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["features"],
    queryFn: async () => {
      const response = await fetch(
        "https://assignmentb8-11-server.vercel.app/features"
      );
      const data = await response.json();
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.map((singleData) => (
            <FeatureCard
              key={singleData._id}
              singleData={singleData}></FeatureCard>
          ))}
      </div>
    </div>
  );
};

export default Features;
