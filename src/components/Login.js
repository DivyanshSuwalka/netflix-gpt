import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const fName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    // console.log(email.current.value, password.current.value);
    // validating form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/76103075?v=4",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
              console.log(user, auth);
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.code);
            });
        })
        .catch((error) => {
          console.log(error.code);
          setErrorMessage(error.code);
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          console.log(error.code);
          setErrorMessage(error.code);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute my-36 mx-auto right-0 left-0 w-2/6 p-12 bg-black bg-opacity-75 rounded-md"
      >
        <h1 className="m-2 text-3xl text-white font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 bg-opacity-30 rounded-md text-white bg-gray-700 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 bg-opacity-30 rounded-md text-white bg-gray-700 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 bg-opacity-30 rounded-md text-white bg-gray-700 w-full"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="py-2 px-4 my-2 w-full bg-red-700 rounded-md text-white font-bold"
        >
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
