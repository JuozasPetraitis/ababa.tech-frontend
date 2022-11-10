import { useState } from "react";
import { useSelector } from "react-redux";
import { userState } from "../store/slice/userSlice";
import { CTA, MovieLayout, MovieForm } from "../components/index";

const ProfilePage = (): JSX.Element => {
  const [showMyMovies, setShowMyMovies] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState("");
  const { movies } = useSelector(userState);
  const [sortByList, setSortByList] = useState<boolean>(true);

  const filteredMovies = inputValue.length > 0 && movies.filter((item) => item.title.startsWith(inputValue));

  return (
    <div className="mx-auto flex w-11/12 max-w-screen-2xl flex-col gap-8 py-8">
      <div className="flex justify-center">
        {showMyMovies ? (
          <CTA text="Add movie" clickHandler={() => setShowMyMovies(false)} />
        ) : (
          <CTA text="Show my movies" clickHandler={() => setShowMyMovies(true)} />
        )}
      </div>

      {showMyMovies && (
        <div className="flex items-center justify-end gap-4">
          <input type="text" placeholder="Search your movie by title" className="border border-black p-1" onChange={(e) => setInputValue(e.target.value)} />
          <div className="flex items-center gap-2">
            <p>Sort by:</p>
            <CTA text="Grid" clickHandler={() => setSortByList(false)} />
            <CTA text="List" clickHandler={() => setSortByList(true)} />
          </div>
        </div>
      )}

      {showMyMovies ? (
        <div
          className={`grid ${
            sortByList
              ? "auto-rows-[16rem] gap-4 2xl:auto-rows-[20rem] 2xl:gap-8"
              : "auto-rows-[16rem] gap-4 lg:grid-cols-2 2xl:auto-rows-[20rem] 2xl:gap-y-8 2xl:gap-x-4"
          }`}
        >
          {filteredMovies
            ? filteredMovies.map((item, index) => <MovieLayout key={index} movieItem={item} sortByList />)
            : movies.map((item, index) => <MovieLayout key={index} movieItem={item} sortByList />)}
        </div>
      ) : (
        <MovieForm clickHandler={() => setShowMyMovies(true)} />
      )}
    </div>
  );
};

export default ProfilePage;
