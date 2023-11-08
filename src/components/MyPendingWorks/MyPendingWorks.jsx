import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyPendingWorksRow from "../MyPendingWorksRow/MyPendingWorksRow";
import { Dna } from "react-loader-spinner";

const MyPendingWorks = () => {
  const { user } = useContext(AuthContext);
  const url = `https://assignmentb8-11-server.vercel.app/pendingWorks?email=${user?.email}`;
  const {
    data: myPending,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myPending"],
    queryFn: async () => {
      const response = await fetch(url, { credentials: "include" });
      const result = await response.json();
      return result;
    },
  });

  console.log(myPending);
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
      {myPending.length === 0 ? (
        <div className="flex justify-center text-xl font-semibold">
          <p>Sorry, no one has booked any of your services yet!!!</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg text-black text-center">
                <th>Service Name</th>
                <th>Customer Mail</th>
                <th>Booking Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myPending &&
                myPending.map((singlePending) => (
                  <MyPendingWorksRow
                    key={singlePending._id}
                    singlePending={singlePending}
                    refetch={refetch}></MyPendingWorksRow>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPendingWorks;
