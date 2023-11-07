import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyPendingWorksRow from "../MyPendingWorksRow/MyPendingWorksRow";

const MyPendingWorks = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/pendingWorks?email=${user?.email}`;
  const {
    data: myPending,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myPending"],
    queryFn: async () => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    },
  });

  console.log(myPending);
  if (isLoading)
    return (
      <div className="text-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  return (
    <div>
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
    </div>
  );
};

export default MyPendingWorks;
