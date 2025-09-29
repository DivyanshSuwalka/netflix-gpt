const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt space-y-4 p-8 max-w-lg">
      <h1 className="text-6xl">{title}</h1>
      <p>{overview}</p>
      <div className="space-x-4">
        <button className="p-2 px-8 text-lg hover:shadow-xl bg-gray-300 rounded-md ">
          	Play
        </button>
        <button className="p-2 px-8 text-lg hover:shadow-xl bg-gray-300 rounded-md ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
