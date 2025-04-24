import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FirebaseError } from "firebase/app";
import axios from "axios";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string().required("Name is required"),
  photo: Yup.mixed().required("Photo is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

const initialValues = {
  email: "",
  name: "",
  photo: "",
  password: "",
  confirmPassword: "",
};

const Registration: React.FC = () => {
  const auth = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSubmit = async (values: typeof initialValues) => {
    const name = values.name;
    const email = values.email;
    const password = values.password;

    const fileInput = document.getElementById("photo") as HTMLInputElement;

    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      // console.error("No Photo Selected");

      Swal.fire({
        title: "No Photo Selected",
        icon: "error",
      });
      return;
    }

    const photo = fileInput.files[0];

    console.log(email, password, photo);

    const img = new FormData();
    img.append("image", photo);

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    try {
      const imgUploadResponse = await axios.post(image_hosting_api, img);

      const imageUrl = imgUploadResponse.data.data.url;

      if (auth) {
        const { createUser, updateUserInfo } = auth;

        const user = { name, email, photo: imageUrl };

        createUser(email, password)
          .then(() => {
            updateUserInfo(name, imageUrl);

            axiosPublic.post("/usercreate", user).then((res) => {
              if (res.data.user._id) {
                Swal.fire({
                  title: "Sign Up Successful",
                  icon: "success",
                });
                navigate("/");
              }
            });
          })
          .catch((error: FirebaseError) => {
            Swal.fire({
              title: error.message,
              icon: "error",
            });
          });
      }
    } catch (error) {
      Swal.fire({
        title: "Error uploading photo to ImgBB",
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto">
      {/* overlay div */}
      <div className="py-32">
        <div
          style={{ boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.28)" }}
          className="card-body py-16 rounded-lg w-[95%] sm:w-3/4 2xl:w-3/5 mx-auto bg-white"
        >
          <h3 className="text-center text-4xl font-bold mb-8">
            Please Sign Up
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Email</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="email"
                  component="div"
                />
              </div>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Name</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="name"
                  component="div"
                />
              </div>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Photo</span>
                </label>
                <Field
                  className=""
                  type="file"
                  id="photo"
                  name="photo"
                  placeholder="Photo"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="photo"
                  component="div"
                />
              </div>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Password</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="password"
                  component="div"
                />
              </div>
              <div className="form-control font-semibold">
                <label className="label">
                  <span>Confirm Password</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  className="text-red-500 mt-1 font-semibold"
                  name="confirmPassword"
                  component="div"
                />
              </div>
              <label className="label font-semibold">
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link
                      className="register-link text-blue-700 hover:font-bold"
                      to="/login"
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </label>
              <div className="form-control mt-6">
                <button type="submit" className="btn btnStyle">
                  Sign Up
                </button>
              </div>
              <SocialLogin></SocialLogin>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registration;
