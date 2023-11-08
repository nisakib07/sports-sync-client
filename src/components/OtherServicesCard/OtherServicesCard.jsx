import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const OtherServicesCard = ({ singleService }) => {
  const { serviceImage, serviceName, serviceDescription, _id } = singleService;
  return (
    <div>
      <div className="card card-compact bg-cyan-400 shadow-xl">
        <figure>
          <img className="h-[300px]" src={serviceImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>{serviceDescription}</p>
        </div>
        <div className="flex p-5 justify-end">
          <Link to={`/serviceDetails/${_id}`}>
            <button className="flex items-center gap-2 bg-cyan-700 text-white p-2 rounded-lg">
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

OtherServicesCard.propTypes = {
  singleService: PropTypes.object,
};

export default OtherServicesCard;
