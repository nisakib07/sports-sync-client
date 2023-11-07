import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UserSingleServiceCard from "../../components/UserSingleServiceCard/UserSingleServiceCard";

const MyServices = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/userService?email=${user?.email}`;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["userService"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  if (isLoading)
    return (
      <div className="text-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-32 mb-6">
        My Services : {data.length}
      </h2>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data.map((singleData) => (
            <UserSingleServiceCard
              key={singleData._id}
              singleData={singleData}
              refetch={refetch}></UserSingleServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
