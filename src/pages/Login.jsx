import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Log In</h1>
            {error ? (
              <p className="text-red-500 mt-2 font-bold">{error}</p>
            ) : null}
            <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="email"
                autoComplete="email"
                className="p-3 my-2 bg-gray-600 rounded"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                autoComplete="current-password"
                className="p-3 my-2 bg-gray-600 rounded"
                onChange={(e) => setpassword(e.target.value)}
              />
              <button className="bg-red-600 py-3 my-5 rounded font-bold">
                Log In
              </button>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <p>
                  <input className="mr-2" type="checkbox" /> Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-4 text-gray-500">
                <span>New to Netflix</span>{" "}
                <Link to="/signup" className="text-white">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
