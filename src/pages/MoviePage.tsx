import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { userState } from "../store/slice/userSlice";

import { MovieLayout, CTA } from "../components/index";

const MoviePage = (): JSX.Element => {
  const { title } = useParams();
  const navigate = useNavigate();

  const { movies } = useSelector(userState);
  const filteredMovie = movies.find((movie) => movie.title === title);

  return filteredMovie ? (
    <div className="mx-auto flex w-11/12 flex-col gap-8 py-4">
      <div className="flex justify-center">
        <CTA text="Go back" clickHandler={() => navigate(-1)} />
      </div>
      <MovieLayout movieItem={filteredMovie} soloMovie />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default MoviePage;
