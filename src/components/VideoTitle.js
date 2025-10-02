const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] pl-[5%] absolute w-screen aspect-video text-white bg-gradient-to-r from-black space-y-4">
      <h1 className="text-6xl w-1/2 line-clamp-2">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div className="space-x-4">
        <button className="p-2 px-8 text-lg hover:shadow-xl bg-gray-300 text-black rounded-md hover:bg-opacity-50">
          	Play
        </button>
        <button className="p-2 px-8 text-lg hover:shadow-xl bg-gray-300 bg-opacity-10 rounded-md ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
