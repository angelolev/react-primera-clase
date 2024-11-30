import { useContext } from "react";
import { AuthContext } from "../context/auth";

const DashboardPage = () => {
  const useAuth = () => {
    return useContext(AuthContext);
  };
  const { user, logout } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <p>Welcome, {user?.name}!</p>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Log Out
      </button>
    </div>
  );
};

export default DashboardPage;
