import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title text-center">
          Latest Repositories
        </h2>
        {repos && repos.length > 0 ? (
          repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))
        ) : (
          <p className="text-center text-gray-600 mt-4">No repositories found.</p>
        )}
      </div>
    </div>
  );
}

export default RepoList;
