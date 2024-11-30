import { useContext } from "react";
import { AuthContext } from "../context/auth";

const LoginPage = () => {
  const useAuth = () => {
    return useContext(AuthContext);
  };
  const { login } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Login Page</h2>
      <button
        onClick={login}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
