import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["singleService"],
    queryFn: () =>
      fetch(`http://localhost:5000/services/${id}`).then((res) => res.json()),
  });

  if (isLoading) return <p>Loading</p>;
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    servicePrice,
    serviceArea,
  } = data;

  return (
    <div>
      <div>
        <h2 className="text-center text-2xl font-bold my-6">
          Service Provider
        </h2>
        <div className="card lg:card-side bg-cyan-600 shadow-xl">
          <div className="flex rounded-xl">
            <figure>
              <img src={serviceProviderImage} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{serviceProviderName}</h2>
              <p>
                <span className="text-lg font-semibold">Service Area : </span>
                {serviceArea}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
