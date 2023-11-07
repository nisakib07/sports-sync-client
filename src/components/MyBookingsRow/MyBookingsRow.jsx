import PropTypes from "prop-types";

const MyBookingsRow = ({ singleData }) => {
  const { serviceName, serviceProviderEmail, bookingDate, status } = singleData;
  return (
    <tr className="text-black text-center">
      <td>{serviceName}</td>
      <td>{serviceProviderEmail}</td>
      <td>{bookingDate}</td>
      <td className="font-bold">{status}</td>
    </tr>
  );
};

MyBookingsRow.propTypes = {
  singleData: PropTypes.object,
};

export default MyBookingsRow;
