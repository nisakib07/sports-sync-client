import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";

const UserSingleServiceCard = ({ singleData, refetch }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    servicePrice,
    serviceArea,
  } = singleData;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to change this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(() => {
      axios
        .delete(`http://localhost:5000/services/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${serviceName} has been deleted.`,
              icon: "success",
            });
          }
          refetch();
        });
    });
  };
  return (
    <div>
      <div className="card bg-cyan-600 shadow-xl">
        <figure>
          <img className="w-full h-[450px]" src={serviceImage} />
        </figure>
        <div className="p-5">
          <h2 className="text-2xl">{serviceName}</h2>
          <p className="min-h-[100px] ">{serviceDescription}</p>
        </div>
        <div className="flex justify-between items-center p-5">
          <div className="flex items-center gap-5">
            <img
              className="rounded-full w-[45px] h-[45px]"
              src={serviceProviderImage}
              alt=""
            />
            <p className="text-lg">{serviceProviderName}</p>
          </div>
          <p>
            <span className="text-lg font-semibold">Price :</span> $
            {servicePrice}
          </p>
        </div>
        <div className="px-5">
          <p>
            <span className="text-lg font-semibold">Service Area : </span>
            {serviceArea}
          </p>
        </div>

        <div className="flex p-5 justify-center gap-6">
          <Link to={`/updateUserService/${_id}`}>
            <button className="flex items-center gap-2 bg-cyan-400 p-2 rounded-lg">
              Update
              <span>
                <GrUpdate></GrUpdate>
              </span>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="flex items-center gap-2 bg-red-400 p-2 rounded-lg">
            Delete
            <span>
              <MdDeleteOutline></MdDeleteOutline>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

UserSingleServiceCard.propTypes = {
  singleData: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserSingleServiceCard;
