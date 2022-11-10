import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authState } from "../store/slice/authSlice";

const ProtectedOutlet = (): JSX.Element => {
  const isVerified = useSelector(authState);
  return isVerified ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedOutlet;
