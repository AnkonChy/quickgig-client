import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLoginbtn = () => {
    try {
      signInWithGoogle().then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          profile_picture: res.user?.photoURL,
          role: "worker",
          coin: 10,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          navigate(location?.state ? location.state : "/");
        });
      });
    } catch (err) {}
  };
  return (
    <div className=" w-3/4 mx-auto">
      <button
        onClick={handleGoogleLoginbtn}
        className="text-lg btn  w-full bg-[#2B2738] text-[#D0CFD1] hover:text-black"
      >
        <FcGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
