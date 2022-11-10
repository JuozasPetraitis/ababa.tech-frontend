import { useSelector } from "react-redux";
import { authState } from "../store/slice/authSlice";
import { userState } from "../store/slice/userSlice";
import useAuth from "../hooks/useAuth";
import { CTA } from "./index";

const Header = (): JSX.Element => {
  const auth = useSelector(authState);
  const user = useSelector(userState);
  const { logOutHandler } = useAuth();

  return (
    <header className="grid h-[10vh] items-center bg-black">
      <div className="mx-auto flex w-11/12 items-center justify-between text-white">
        {!auth && <p className="text-3xl font-extrabold lg:text-5xl">Movies</p>}
        {auth && <p className="text-4xl font-black">Welcome, {user.username}!</p>}
        {auth && <CTA clickHandler={logOutHandler} text="Log out" />}
      </div>
    </header>
  );
};

export default Header;
