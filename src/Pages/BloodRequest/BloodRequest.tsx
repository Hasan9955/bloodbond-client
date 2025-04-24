/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

interface FormData {
  patientName: string;
  bloodGroup: string;
  bloodBag: string;
  time: string;
  location: string;
  phone: string;
}

const BloodRequest = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const auth = useAuth();
  if (!auth) {
    return;
  }

  const { user } = auth;

  const onSubmit = (data: FormData) => {
    console.log(data);
    const { phone, bloodGroup, location, time, bloodBag, patientName } = data;

    const request = {
      email: user?.email,
      phone,
      bloodGroup,
      location,
      time,
      bloodBag,
      patientName,
    };

    axios
      .post("https://bloodbond-server.vercel.app/createbloodrequest", request, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        try {
          Swal.fire({
            title: "Your Blood Request Created Successfully",
            icon: "success",
          });
          reset();
        } catch (error: any) {
          console.log(error.message);
        }
      }

      );


  };

  return (
    <div className="mx-auto container py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-gray-300 shadow-xl w-full mx-auto lg:w-3/4 p-8  font-medium rounded-lg"
      >
        <h2 className="text-3xl font-bold  text-center">Blood Request</h2>
        <div className="gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Patient Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              {...register("patientName", { required: true })}
            />
            {errors.patientName?.type === "required" && (
              <p
                className="text-red-400 font-bold text-center mt-1"
                role="alert"
              >
                * Patient Name is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Blood Need</span>
            </label>
            <select
              className="select select-bordered  text-lg text-black "
              {...register("bloodGroup", { required: true })}
            >
              <option value=""></option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {errors.bloodGroup?.type === "required" && (
              <p
                className="text-red-400 font-bold text-center mt-1"
                role="alert"
              >
                * Blood Group is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Number Blood Bags</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              {...register("bloodBag", { required: true })}
            />
            {errors.bloodBag?.type === "required" && (
              <p
                className="text-red-400 font-bold text-center mt-1"
                role="alert"
              >
                * Blood Bag Number is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blood Need Time</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              {...register("time", { required: true })}
            />
            {errors.time?.type === "required" && (
              <p
                className="text-red-400 font-bold text-center mt-1"
                role="alert"
              >
                * Date is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Blood Donate Location</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              {...register("location", { required: true })}
            />
            {errors.location?.type === "required" && (
              <p
                className="text-red-400 font-bold text-center mt-1"
                role="alert"
              >
                * Address is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              {...register("phone", { required: true })}
            />
            {errors.phone?.type === "required" && (
              <p
                className="text-red-400 font-bold text-center mt-1"
                role="alert"
              >
                * Contact Number is required
              </p>
            )}
          </div>
        </div>
        <input
          className="btn btnStyle w-full mt-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default BloodRequest;
