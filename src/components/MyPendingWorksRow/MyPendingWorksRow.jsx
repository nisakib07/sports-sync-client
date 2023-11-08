import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
const MyPendingWorksRow = ({ singlePending, refetch }) => {
  const {
    serviceImage,
    serviceName,
    serviceProviderEmail,
    userEmail,
    bookingDate,
    instruction,
    price,
    status,
    _id,
  } = singlePending;
  const [newStatus, setNewStatus] = useState(status);

  const handleChangeStatus = (e) => {
    const updatedStatus = e.target.value;

    const updatedBooking = {
      serviceImage: serviceImage,
      serviceName: serviceName,
      serviceProviderEmail: serviceProviderEmail,
      userEmail: userEmail,
      bookingDate: bookingDate,
      instruction: instruction,
      price: price,
      status: updatedStatus,
    };
    axios
      .put(
        `https://assignmentb8-11-server.vercel.app/bookings/${_id}`,
        updatedBooking,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Status Updated Successfully");
        }
        setNewStatus(updatedStatus);
        refetch();
      });
  };
  return (
    <tr className="text-black text-center">
      <td>{serviceName}</td>
      <td>{userEmail}</td>
      <td>{bookingDate}</td>
      <td className="font-bold">
        <select
          onChange={handleChangeStatus}
          value={newStatus}
          className="bg-cyan-400 p-2 rounded-lg"
          name=""
          id="">
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
    </tr>
  );
};

MyPendingWorksRow.propTypes = {
  singlePending: PropTypes.object,
  refetch: PropTypes.func,
};

export default MyPendingWorksRow;
