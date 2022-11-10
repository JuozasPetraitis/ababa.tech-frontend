import { useNavigate } from "react-router-dom";
import { Movie } from "../../store/slice/userSlice";
import { Image, Title, Date, ImdbLink, Storyline } from "../index";

type Props = {
  movieItem: Movie;
  soloMovie?: boolean;
  sortByList?: boolean;
};

const MovieLayout = ({ movieItem: { title, date, imdbLink, thumbnail, storyline }, soloMovie, sortByList }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={!soloMovie ? () => navigate(`/movie/${title}`) : undefined}
      className={`group grid rounded-lg bg-white ${
        sortByList
          ? "cursor-pointer grid-cols-2 grid-rows-1 hover:shadow-md hover:shadow-black"
          : soloMovie
          ? "mx-auto grid-cols-[60rem] grid-rows-[20rem] shadow-md shadow-black lg:grid-rows-[24rem]"
          : "cursor-pointer shadow-md shadow-black"
      }  `}
    >
      <Image src={thumbnail} alt={title} />

      <div className={`flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg py-12 group-hover:bg-neutral-50`}>
        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <Title {...{ title }} />
          <Date {...{ date }} />
          {soloMovie && <ImdbLink {...{ imdbLink }} />}
        </div>

        <Storyline {...{ storyline, sortByList }} />
      </div>
    </div>
  );
};

export default MovieLayout;
