import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  function toggleSignInForm() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute my-36 mx-auto right-0 left-0 w-2/6 p-12 bg-black bg-opacity-75 rounded-md">
        <h1 className="m-2 text-3xl text-white font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 bg-opacity-30 rounded-md bg-gray-700 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 bg-opacity-30 rounded-md bg-gray-700 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 bg-opacity-30 rounded-md bg-gray-700 w-full"
        />
        <button className="py-2 px-4 my-2 w-full bg-red-700 rounded-md text-white font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="text-white py-2 my-2 cursor-pointer"
        >
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
