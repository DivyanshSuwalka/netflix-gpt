import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  // const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between bg-gradient-to-b from-black bg-opacity-10">
      <img
        className="w-40 my-6 mx-12"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <button
        onClick={handleSignOut}
        className="my-10 m-16 pr-2 hover:shadow-xl  bg-transparent rounded-md text-white font-bold "
      >
        <img
          className="w-8 rounded-md inline mr-2"
          src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          }
          alt="user-logo"
        />
        Logout
      </button>
    </div>
  );
};

export default Browse;
