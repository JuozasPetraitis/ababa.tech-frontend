import React, { useState } from "react";
import LoginForm from "../Form/LoginForm";
import SignUpForm from "../Form/SignUpForm";

const HomePage = () => {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(true);
  const clickHandler = () => setShowLoginForm((prev) => !prev);
  return (
    <div className="flex h-[85vh]">
      <div className="m-auto grid h-4/5 w-11/12 grid-rows-[1fr,2fr] items-center gap-4 md:grid-cols-2 md:grid-rows-1 2xl:max-w-screen-2xl">
        <div className="relative flex h-full rounded-lg">
          <img src="assets/Netflix.jpg" alt="Netflix" className="absolute h-full w-full rounded object-cover" />
        </div>
        <div className="flex h-1/2 flex-col justify-evenly">
          {showLoginForm ? <LoginForm clickHandler={clickHandler} /> : <SignUpForm clickHandler={clickHandler} />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
