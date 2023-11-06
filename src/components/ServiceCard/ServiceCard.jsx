import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ singleData }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    servicePrice,
  } = singleData;
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
          <p>Price : ${servicePrice}</p>
        </div>

        <div className="flex p-5 justify-end">
          <Link to={`/serviceDetails/${_id}`}>
            <button className="flex items-center gap-2 bg-cyan-400 p-2 rounded-lg">
              View Detail{" "}
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

ServiceCard.propTypes = {
  singleData: PropTypes.object,
};

export default ServiceCard;
