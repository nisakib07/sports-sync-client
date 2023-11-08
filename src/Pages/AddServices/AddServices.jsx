import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const { email, displayName, photoURL } = user;

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.serviceDescription.value;

    const newService = {
      serviceImage: serviceImage,
      serviceName: serviceName,
      serviceDescription: serviceDescription,
      serviceProviderImage: photoURL,
      serviceProviderName: displayName,
      serviceProviderEmail: email,
      servicePrice: servicePrice,
      serviceArea: serviceArea,
    };

    axios
      .post("https://assignmentb8-11-server.vercel.app/services", newService)
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();
          toast.success("Service Added Successfully");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>SportsSync | Add Services</title>
      </Helmet>
      <h2 className="text-center text-2xl font-bold mt-32 mb-6">
        Add Services
      </h2>
      <div className="p-5 bg-cyan-400 rounded-lg mx-5">
        <form onSubmit={handleAddService}>
          {/* Service name and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="text-lg">Service Name</span>
              </label>
              <input
                type="text"
                name="serviceName"
                className="input input-bordered bg-cyan-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg">Service Image</span>
              </label>
              <input
                type="text"
                name="serviceImage"
                className="input input-bordered bg-cyan-200"
                required
              />
            </div>
          </div>

          {/* Provider name and email and photo*/}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="text-lg">Your Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered bg-cyan-200"
                defaultValue={displayName}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg">Your Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered bg-cyan-200"
                defaultValue={email}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg">Photo URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered bg-cyan-200"
                defaultValue={photoURL}
                readOnly
              />
            </div>
          </div>

          {/* Price, Service Area and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="text-lg">Price</span>
              </label>
              <input
                type="text"
                name="servicePrice"
                className="input input-bordered bg-cyan-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg">Service Area</span>
              </label>
              <input
                type="text"
                name="serviceArea"
                className="input input-bordered bg-cyan-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg">Description</span>
              </label>
              <input
                type="text"
                name="serviceDescription"
                className="input input-bordered bg-cyan-200"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="btn mt-6 bg-cyan-700 hover:bg-cyan-600 text-white border-0 px-14"
              type="submit">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
