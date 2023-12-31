import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Dna } from "react-loader-spinner";
import OtherServicesCard from "../../components/OtherServicesCard/OtherServicesCard";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [allServices, setAllServices] = useState([]);
  const [otherServices, setOtherServices] = useState([]);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["singleService"],
    queryFn: () =>
      fetch(`https://assignmentb8-11-server.vercel.app/services/${id}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  useEffect(() => {
    fetch(
      `https://assignmentb8-11-server.vercel.app/userService?email=${
        data && data?.serviceProviderEmail
      }`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
      });
  }, [data?.serviceProviderEmail, data]);

  useEffect(() => {
    const matched = allServices.filter(
      (singleService) => singleService._id !== id
    );
    refetch();
    setOtherServices(matched);
  }, [allServices, id, refetch]);

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
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    serviceProviderEmail,
    servicePrice,
    serviceArea,
  } = data;

  const handleAddToBooking = (e) => {
    e.preventDefault();

    const booking = {
      serviceImage: serviceImage,
      serviceName: serviceName,
      serviceProviderEmail: serviceProviderEmail,
      userEmail: user?.email,
      bookingDate: e.target.date.value,
      instruction: e.target.instruction.value,
      price: servicePrice,
      status: "Pending",
    };

    axios
      .post("https://assignmentb8-11-server.vercel.app/bookings", booking, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Booking Added Successfully");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>SportsSync | Service Details</title>
      </Helmet>
      <div>
        <h2 className="text-center text-2xl font-bold mb-6 mt-32">
          Service Provider
        </h2>
        <div className="card lg:card-side bg-cyan-400 shadow-xl">
          <div className="flex rounded-xl">
            <figure>
              <img className="h-full w-[250px]" src={serviceProviderImage} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{serviceProviderName}</h2>
              <p>
                <span className="text-lg font-semibold">Service Area : </span>
                {serviceArea}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-center text-3xl font-bold mb-10">
          Service Details
        </h2>
        <div>
          <div className="card bg-cyan-400 shadow-xl">
            <figure>
              <img className="w-full h-[600px]" src={serviceImage} />
            </figure>
            <div className="p-5">
              <h2 className="text-2xl mb-3">{serviceName}</h2>
              <p>{serviceDescription}</p>
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
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="flex items-center gap-2 bg-cyan-700 text-white p-2 rounded-lg">
                Book Now
                <span>
                  <BsArrowRight></BsArrowRight>
                </span>
              </button>
            </div>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-cyan-400">
                <form onSubmit={handleAddToBooking}>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg">Service Name</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={serviceName}
                      className="input input-bordered bg-cyan-200"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg">Service Image</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={serviceImage}
                      className="input input-bordered bg-cyan-200"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg">Service Provider Email</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={serviceProviderEmail}
                      className="input input-bordered bg-cyan-200"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg">User Email</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.email}
                      className="input input-bordered bg-cyan-200"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg">Service Taking Date</span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered bg-cyan-200"
                      name="date"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg">Special Instruction</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered bg-cyan-200"
                      placeholder="Your address / Customization in the plan"
                      name="instruction"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg">Price</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={servicePrice}
                      className="input input-bordered bg-cyan-200"
                      readOnly
                    />
                  </div>
                  <button
                    className="btn mt-6 bg-cyan-700 text-white hover:bg-cyan-600 border-0"
                    type="submit">
                    Purchase
                  </button>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-red-400 border-0">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <div>
        <div>
          {otherServices && otherServices.length === 0 ? (
            ""
          ) : (
            <>
              <h2 className="text-center text-2xl font-bold my-10">
                More from this provider
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {otherServices &&
                  otherServices.map((singleService) => (
                    <OtherServicesCard
                      key={singleService._id}
                      singleService={singleService}></OtherServicesCard>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
