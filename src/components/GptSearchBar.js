
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[8%] flex justify-center ">
      <form className="p-4 w-3/5 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="py-2 px-4 mx-2 rounded-md col-span-9 bg-gradient-to-b from-white to-gray-100 text-gray-700"
        />
        <button
          type="submit"
          className="py-2 px-4 mx-2 w-3/4 col-span-3 hover:shadow-xl bg-red-700 text-lg rounded-md text-white"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
