import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
// import logo from "../../assets/icon.png";
import { LuLogOut } from "react-icons/lu";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth) {
    return;
  }

  const { user, logOut } = auth;

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Log Out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Log Out Successful",
              icon: "success",
            });
            navigate("/");
          })
          .catch(() => {
            Swal.fire({
              title: "Something went wrong, try again later.",
              icon: "error",
            });
          });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-5 block secondary_bg text-white duration-300"
              : "p-5 block primary_color hover:bg-[#e9556d] hover:text-white duration-300"
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-5 block secondary_bg text-white duration-300"
              : "p-5 block primary_color hover:bg-[#e9556d] hover:text-white duration-300"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bioMedical"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-5 block secondary_bg text-white duration-300"
              : "p-5 block primary_color hover:bg-[#e9556d] hover:text-white duration-300"
          }
        >
          Bio-Medical
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/campaign"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-5 block secondary_bg text-white duration-300"
              : "p-5 block primary_color hover:bg-[#e9556d] hover:text-white duration-300"
          }
        >
          Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bloodRequest"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-5 block secondary_bg text-white duration-300"
              : "p-5 block primary_color hover:bg-[#e9556d] hover:text-white duration-300"
          }
        >
          Request Blood
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donate"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-5 block secondary_bg text-white duration-300"
              : "p-5 block primary_color hover:bg-[#e9556d] hover:text-white duration-300"
          }
        >
          Donate Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/communityChat"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-5 block secondary_bg text-white duration-300"
              : "p-5 block primary_color hover:bg-[#e9556d] hover:text-white duration-300"
          }
        >
          Community Chat
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard/userhome"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "p-5 block secondary_bg text-white duration-300"
                : "p-5 block primary_color hover:bg-[#e9556d] hover:text-white duration-300"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="shadow-xl">
      <Container>
        <div className=" navbar min-h-[60px] p-0 font-semibold">
          <div className="navbar-start">
            {/* nav items for small devices */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <img
              className="w-10"
              src={logo}
              alt=""
            />
            <p className="font-bold">
              <span className="text-[#ea062b]">Blood</span>
              <span>Bond</span>
            </p>
          </div>
          {/* nav items for large devices */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 lg:text-[10px] xl:text-sm">
              {links}
            </ul>
          </div>
          {/* navbar end */}
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center text-white">
                <div className="dropdown dropdown-hover dropdown-end dropdown-bg-[#DC0000]">
                  <label
                    tabIndex={0}
                    className="btn btn-sm md:btn-md btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        title={user.displayName || ""}
                        src={user.photoURL || ""}
                        alt="userImg"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[10] menu px-5  shadow bg-white text-black rounded-box py-5 w-64"
                  >
                    <div className="flex flex-col justify-center items-center mb-4">
                      <label tabIndex={0} className="btn btn-circle avatar">
                        <div className="w-16 rounded-full">
                          <img src={user.photoURL || ""} alt="userImg" />
                        </div>
                      </label>
                      <h2 className="text-lg font-bold w-auto">
                        {user.displayName}
                      </h2>
                      <h2 className="w-auto">{user.email}</h2>
                      <Link to="/dashboard/userHome">
                        <button className="btn lg:btn-sm btn-xs btn-outline text-[#ea062b] border-[#ea062b] mt-2">
                          View Profile
                        </button>
                      </Link>
                    </div>
                    <li>
                      <button
                        className="font-bold text-md mx-auto text-[#ea062b]"
                        onClick={handleLogOut}
                      >
                        Logout <LuLogOut className="text-xl"></LuLogOut>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn rounded-none secondary_bg text-white border-[#ea062b] hover:text-[#ea062b] hover:border-[#ea062b] duration-300">Login</button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
