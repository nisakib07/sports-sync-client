import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UserSingleServiceCard from "../../components/UserSingleServiceCard/UserSingleServiceCard";
import { Dna } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const MyServices = () => {
  const { user } = useContext(AuthContext);

  const url = `https://assignmentb8-11-server.vercel.app/userService?email=${user?.email}`;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["userService"],
    queryFn: () =>
      fetch(url, { credentials: "include" }).then((res) => res.json()),
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
      <Helmet>
        <title>SportsSync | My Services</title>
      </Helmet>
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
