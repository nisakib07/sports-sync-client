import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const AllServicesCard = ({ singleData }) => {
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
  return (
    <div>
      <div className="card bg-cyan-400 shadow-xl">
        <figure>
          <img className="w-full h-[600px]" src={serviceImage} />
        </figure>
        <div className="p-5">
          <h2 className="text-2xl">{serviceName}</h2>
          <p>{serviceDescription.slice(0, 100)}</p>
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

        <div className="flex p-5 justify-end">
          <Link to={`/serviceDetails/${_id}`}>
            <button className="flex items-center gap-2 bg-cyan-700 p-2 rounded-lg text-white">
              View Detail
              <span>
                <BsArrowRight></BsArrowRight>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

AllServicesCard.propTypes = {
  singleData: PropTypes.object,
};

export default AllServicesCard;
