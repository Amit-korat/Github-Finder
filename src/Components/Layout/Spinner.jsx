import spinner from "./Assets/spinner.gif";

function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <img
        width={180}
        className="animate-spin"
        src={spinner}
        alt="Loading..."
      />
      <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
    </div>
  );
}

export default Spinner;
