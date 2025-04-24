import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FirebaseError } from "firebase/app";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (values: typeof initialValues) => {
    const email = values.email;
    const password = values.password;

    if (auth) {
      const { userLogin } = auth;

      userLogin(email, password)
        .then(() => {
          Swal.fire({
            title: "Login Successful",
            icon: "success",
          });

          // navigate after login
          navigate(location?.state ? location.state : "/");
        })
        .catch((error: FirebaseError) => {
          console.log(error);
          Swal.fire({
            title: "Incorrect Email or Password",
            icon: "error",
          });
        });
    }
  };

  return (
    <div className="container mx-auto">
      {/* overlay div */}
      <div className="py-32">
        <div
          style={{ boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.28)" }}
          className="card-body rounded-lg w-[95%] sm:w-3/4 2xl:w-3/5 mx-auto bg-white py-16"
        >
          <h3 className="text-center text-4xl font-bold mb-8">Please Login</h3>
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
                  className="input input-bordered bg-transparent"
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
                  <span>Password</span>
                </label>
                <Field
                  className="input input-bordered bg-transparent"
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
              <label className="label font-semibold">
                <p>
                  Do not have an account?{" "}
                  <span>
                    <Link
                      className="register-link text-blue-700 hover:font-bold"
                      to="/register"
                    >
                      Sign Up
                    </Link>
                  </span>
                </p>
              </label>
              <div className="form-control mt-6">
                <button type="submit" className="btn btnStyle">
                  Login
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

export default Login;
