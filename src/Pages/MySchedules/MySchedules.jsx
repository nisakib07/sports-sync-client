import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import MyBookingsRow from "../../components/MyBookingsRow/MyBookingsRow";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: myBookings, isLoading } = useQuery({
    queryKey: ["userBooking"],
    queryFn: async () => {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    },
  });

  if (isLoading) <p>Loading</p>;

  return (
    <div>
      <div>
        <div>
          <h2 className="text-center text-2xl font-bold mt-32 mb-6">
            My Bookings
          </h2>
        </div>
        <div>
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
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-center text-2xl font-bold mt-32 mb-6">
            My Pending Works
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
