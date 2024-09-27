import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-4 rounded-lg shadow-md card bg-base-200 hover:bg-base-300 transition duration-300 ease-in-out">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-bold">
          <a href={html_url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-200">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-4 text-gray-700">{description || "No description available."}</p>
        <div className="flex flex-wrap">
          <div className="mr-2 mb-2 badge badge-info badge-lg hover:bg-info-focus transition duration-200">
            <FaEye className="mr-1" /> {watchers_count}
          </div>
          <div className="mr-2 mb-2 badge badge-success badge-lg hover:bg-success-focus transition duration-200">
            <FaStar className="mr-1" /> {stargazers_count}
          </div>
          <div className="mr-2 mb-2 badge badge-error badge-lg hover:bg-error-focus transition duration-200">
            <FaInfo className="mr-1" /> {open_issues}
          </div>
          <div className="mr-2 mb-2 badge badge-warning badge-lg hover:bg-warning-focus transition duration-200">
            <FaUtensils className="mr-1" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
