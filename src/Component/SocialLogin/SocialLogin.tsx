import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!auth) {
    return;
  }
  const { googleLogin } = auth;

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong, Try again later.",
        });
      });
  };

  return (
    <div className="">
      {/* <div className="h-[1px] bg-[#a7a8a5] w-full"></div> */}
      <div className="divider">or</div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex btn btnStyle w-full items-center border px-8 py-3 text-xl"
        >
          <img
            className="w-6 mr-2"
            src="https://i.ibb.co/kyggTTw/Logo-google-icon-PNG.png"
            alt=""
          />
          <span className="font-medium">Login With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
