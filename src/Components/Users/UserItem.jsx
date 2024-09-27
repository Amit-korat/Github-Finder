import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-lg transition-transform transform hover:scale-105 bg-base-100 border border-gray-200 rounded-lg">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full overflow-hidden w-16 h-16">
            <img
              src={avatar_url}
              alt={`Profile picture of ${login}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="card-title text-lg font-semibold">{login}</h2>
          <Link
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
