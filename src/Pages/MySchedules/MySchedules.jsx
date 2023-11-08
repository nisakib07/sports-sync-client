import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import MyBookingsRow from "../../components/MyBookingsRow/MyBookingsRow";
import MyPendingWorks from "../../components/MyPendingWorks/MyPendingWorks";
import { Dna } from "react-loader-spinner";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: myBookings, isLoading } = useQuery({
    queryKey: ["userBooking"],
    queryFn: async () => {
      const response = await fetch(url, { credentials: "include" });
      const result = await response.json();
      return result;
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
      <div>
        <div>
          <h2 className="text-center text-2xl font-bold mt-32 mb-6">
            My Bookings
          </h2>
        </div>
        <div>
          {myBookings.length === 0 ? (
            <div className="flex justify-center text-xl font-semibold">
              <p>Sorry, You have not booked any service yet!!!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-lg text-black text-center">
                    <th>Service Name</th>
                    <th>Provider Mail</th>
                    <th>Booking Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {myBookings &&
                    myBookings.map((singleData) => (
                      <MyBookingsRow
                        key={singleData._id}
                        singleData={singleData}></MyBookingsRow>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-center text-2xl font-bold mt-32 mb-6">
            My Pending Works
          </h2>
        </div>
        <MyPendingWorks></MyPendingWorks>
      </div>
    </div>
  );
};

export default MySchedules;
