import { useState, useContext } from "react";
import GithubContext from "../../Context/Github/GithubContext";
import AlertContext from "../../Context/Alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div className="relative">
          <input
            type="text"
            className="w-full pr-10 py-3 bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder=" Search GitHub Users"
            value={text}
            onChange={handleChange}
            aria-label="Search GitHub Users"
          />
          <button
            type="submit"
            className={`absolute top-0 right-0 py-3 px-5 text-white bg-blue-500 rounded-r-lg transition duration-300 ease-in-out hover:bg-blue-600 ${text ? "" : "opacity-50 cursor-not-allowed"}`}
            disabled={!text} // Disable button when input is empty
          >
            Go
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <div className="mt-4">
          <button onClick={clearUsers} className="btn btn-ghost btn-lg text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
