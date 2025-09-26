import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts (auth listener)
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error.code);
      });
  };

  return (
    <div className="flex justify-between absolute px-8  bg-gradient-to-b from-black  w-full z-10">
      <img className="w-40 m-6" src={LOGO} alt="logo" />
      {user && (
        <button
          onClick={handleSignOut}
          className="my-10 m-16 pr-2 hover:shadow-xl bg-transparent rounded-md text-white font-bold"
        >
          <img
            className="w-10 rounded-md inline mr-2"
            src={
              !auth.currentUser.photoURL
                ? "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                : auth.currentUser.photoURL
            }
            alt="user-logo"
          />
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
