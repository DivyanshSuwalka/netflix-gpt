import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
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
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
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
          // console.log(user);
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
          src={BG_URL}
          alt="background"
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
            ref={name}
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
