import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Dna } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const UpdateUserService = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["updateProduct"],
    queryFn: () =>
      fetch(`https://assignmentb8-11-server.vercel.app/services/${id}`, {
        credentials: "include",
      }).then((res) => res.json()),
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
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceArea,
    servicePrice,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.serviceDescription.value;

    const updatedService = {
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
      .put(
        `https://assignmentb8-11-server.vercel.app/services/${_id}`,
        updatedService,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Service Updated Successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>SportsSync | Update Service</title>
      </Helmet>
      <h2 className="text-center text-2xl font-bold my-6">Update Service</h2>
      <div className="p-5 bg-cyan-400 rounded-lg mx-5">
        <form onSubmit={handleUpdate}>
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
                defaultValue={serviceName}
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
                defaultValue={serviceImage}
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
                defaultValue={servicePrice}
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
                defaultValue={serviceArea}
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
                defaultValue={serviceDescription}
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="btn mt-6 bg-cyan-700 text-white hover:bg-cyan-600 border-0 px-14"
              type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserService;
