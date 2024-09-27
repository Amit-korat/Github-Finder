import { useContext } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../Context/Github/GithubContext";

function UserResult() {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }

  if (users.length === 0) {
    return <p className="text-center text-xl text-gray-600">No users found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResult;
