import { useContext } from "react";
import AlertContext from "../Context/Alert/AlertContext";

const Alert = () => {
  const { alert, clearAlert } = useContext(AlertContext);

  if (!alert) return null; // Render nothing if no alert

  return (
    <div className={`alert ${alert.type} shadow-lg mb-4 transition-opacity duration-300 ease-in-out`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <strong>{alert.msg}</strong>
        </div>
        <button
          onClick={clearAlert}
          className="btn btn-sm btn-ghost ml-4"
          aria-label="Close alert"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;
