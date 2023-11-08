import PropTypes from "prop-types";

const FeatureCard = ({ singleData }) => {
  const { image, featureName, smallDescription } = singleData;
  return (
    <div>
      <div className="card card-compact bg-cyan-500 shadow-xl">
        <figure className="p-4">
          <img className="max-w-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{featureName}</h2>
          <p>{smallDescription}</p>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  singleData: PropTypes.object,
};
export default FeatureCard;
