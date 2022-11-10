import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { getUser, User } from "../store/slice/userSlice";
import { isVerified } from "../store/slice/authSlice";
import { SIGN_UP_USER_URI, LOG_IN_USER_URI, GET_USER_URI, MOVIES_URI } from "../utils/endpoints";
import { LoginFormValues } from "../components/Form/LoginForm";
import { AddMovieFormValues } from "../components/Form/MovieForm";
import { SignUpFormValues } from "../components/Form/SignUpForm";

const useAuth = () => {
  const dispatch = useDispatch();

  const signUpHandler = async (formData: SignUpFormValues) => {
    try {
      const response = await axios.post(SIGN_UP_USER_URI, formData);
      const {
        data: { user, accessToken },
      }: { data: { user: User; accessToken: string } } = response;
      localStorage.setItem("accessToken", accessToken);
      dispatch(getUser(user));
      dispatch(isVerified(true));
    } catch (error) {
      const errors = error as AxiosError;
      console.log(errors);
      throw errors.response?.data;
    }
  };

  const logInHandler = async (formData: LoginFormValues) => {
    try {
      const response = await axios.post(LOG_IN_USER_URI, formData);
      const {
        data: { user, accessToken },
      }: { data: { user: User; accessToken: string } } = response;
      localStorage.setItem("accessToken", accessToken);
      dispatch(getUser(user));
      dispatch(isVerified(true));
    } catch (error) {
      const errors = error as AxiosError;
      console.log(errors);
      throw errors.response?.data;
    }
  };

  const logOutHandler = () => {
    localStorage.clear();
    dispatch(isVerified(false));
    window.location.reload();
  };

  const verifyToken = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      localStorage.clear();
      return;
    }

    try {
      const response = await axios.get(GET_USER_URI, {
        headers: {
          Authorization: accessToken,
        },
      });

      const {
        data: { user },
      }: { data: { user: User } } = response;
      dispatch(getUser(user));
      dispatch(isVerified(true));
    } catch (error) {
      localStorage.clear();
      const errors = error as AxiosError;
      console.log(errors);
      throw errors.response?.data;
    }
  };

  const addMovieHandler = async (formData: AddMovieFormValues) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      localStorage.clear();
      return;
    }
    try {
      const response = await axios.post(MOVIES_URI, formData, {
        headers: {
          Authorization: accessToken,
        },
      });

      const {
        data: { user },
      }: { data: { user: User } } = response;
      dispatch(getUser(user));
    } catch (error) {
      const result = (error as Error).message;
      console.log(result);
    }
  };

  return { signUpHandler, logInHandler, logOutHandler, verifyToken, addMovieHandler };
};

export default useAuth;
