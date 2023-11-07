import { useEffect, useState } from "react";
import AllServicesCard from "../../components/AllServicesCard/AllServicesCard";

import useServices from "../../hooks/useServices";

const AllServices = () => {
  const { data, isLoading } = useServices();

  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    setSearchedData(data);
  }, [data]);

  if (isLoading) return <p>Loading</p>;

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedName = e.target.searchedService.value;

    const matched = data.filter((service) =>
      service.serviceName.toLowerCase().includes(searchedName.toLowerCase())
    );

    setSearchedData(matched);
  };
  console.log(data, searchedData);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-6">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
