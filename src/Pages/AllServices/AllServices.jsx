import { useEffect, useState } from "react";
import AllServicesCard from "../../components/AllServicesCard/AllServicesCard";

import useServices from "../../hooks/useServices";
import { Dna } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const { data, isLoading } = useServices();

  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    setSearchedData(data);
  }, [data]);

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

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedName = e.target.searchedService.value;

    const matched = data.filter((service) =>
      service.serviceName.toLowerCase().includes(searchedName.toLowerCase())
    );

    setSearchedData(matched);
  };

  return (
    <div>
      <Helmet>
        <title>SportsSync | All Services</title>
      </Helmet>
      <h2 className="text-center text-2xl font-bold mt-32 mb-6">
        All of our Services
      </h2>
      <div className="flex justify-center mb-16">
        <form onSubmit={handleSearch}>
          <div className="flex">
            <input
              type="text"
              name="searchedService"
              placeholder="Type here"
              className="input input-bordered rounded-none
             rounded-l-lg input-success w-full max-w-xs"
            />
            <button type="submit" className="bg-cyan-400 p-2 rounded-r-lg">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {searchedData &&
          searchedData.map((singleData) => (
            <AllServicesCard
              key={singleData._id}
              singleData={singleData}></AllServicesCard>
          ))}
      </div>
    </div>
  );
};

export default AllServices;
